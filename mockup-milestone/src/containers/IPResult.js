import React, {Component} from "react";
import "./IPResult.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import data from "../data.json";

export default function IPResult(){
    const location = useLocation();

    let userInfRate = data.infRate;
    userInfRate *= data.internal.age[Math.min(Math.floor(location.userProb.age/10), 8)];
    userInfRate *= data.internal.gender[location.userProb.gender];
    userInfRate *= data.internal.disease[location.userProb.disease];
    let userBMI = location.userProb.weight*10000/(location.userProb.height*location.userProb.height);
    userInfRate *= (1 + 0.012*(userBMI - 23.55)*(userBMI - 23.55));

    let infProv = data.external.provinsi.case[location.userProb.provinsi]*(1 + data.infRate * 25 * 9);
    let probProv = infProv/(data.external.provinsi.population[location.userProb.provinsi]*1000000);
    let exValueMeetPerDay = (2*(location.userProb.workDay)*(location.userProb.workMeet) + 25*(location.userProb.pubDay))/14 + 1*(location.userProb.userElse);
    exValueMeetPerDay *= probProv;
    exValueMeetPerDay += (location.userProb.posMeet/14);

    let probDay= 0;
    let predMeetPerDay = exValueMeetPerDay;
    if(predMeetPerDay>1){
        probDay = 1- Math.pow((1-userInfRate), predMeetPerDay)
    }else{
        probDay = userInfRate*predMeetPerDay;
    }
    let userProb = probDay;

    for(var i=1; i<14; i++){
        predMeetPerDay = (location.userProb.userHome)*probDay + predMeetPerDay;
        if(predMeetPerDay>1){
            probDay = 1- Math.pow((1-userInfRate), predMeetPerDay)
        }else{
            probDay = userInfRate*predMeetPerDay;
        }
        userProb = 1 - (1-userProb)*(1-probDay)
    }

    return (
        <div className="Container">
                <div className="header">
                <h1>Hasil Probabilitas Anda Terinfeksi</h1>
                </div>
                <div className="kotakputihhome">
                    <h3>Probabilitas anda terinfeksi COVID: {userProb*100}%</h3>
                    <p>Keterangan:</p>
                    <div className="keterangan">
                        <div className="subketerangan">
                            <p style={{fontSize:14}}>Infectious Rate</p>
                            <p style={{fontSize:14}}>Faktor pengali internal</p>
                            <p style={{fontSize:14}}>Probabilitas 1 orang acak di provinsi anda terinfeksi</p>
                            <p style={{fontSize:14}}>Prediksi banyaknya pengidap COVID yang anda temui per hari</p>
                        </div>
                        <div className="subketerangan">
                            <p style={{fontSize:14}}>: {data.infRate}</p>
                            <p style={{fontSize:14}}>: {userInfRate/data.infRate}</p>
                            <p style={{fontSize:14}}>: {probProv*100}%</p>
                            <p style={{fontSize:14}}>: {Math.pow(exValueMeetPerDay*predMeetPerDay, 0.5)} pengidap</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/">
                        <Button className="homeButton" block bsSize="large">
                            <p className="tulisanTombol"> Kembali ke home</p>
                        </Button>
                    </Link>
                </div>
            </div>
    );
}