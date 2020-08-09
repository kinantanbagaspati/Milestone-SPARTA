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

    let infProv = data.external.provinsi.case[0]*(1 + data.infRate * 25 * 9);
    let probProv = infProv/(data.external.provinsi.population[0]*1000000);
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
            <div className="hero-image2">
                <div className="header">
                <h1>Hasil Probabilitas Anda Terinfeksi</h1>
                </div>
                <div className="kotakputihhome">
                    <p>Probabilitas anda terinfeksi COVID: {userProb}</p>
                    <p>Keterangan:</p>
                    <p>Infectious Rate: {data.infRate}</p>
                    <p>Faktor pengali internal: {userInfRate/data.infRate}</p>
                    <p>Probabilitas 1 orang acak di provinsi anda terinfeksi: {probProv}</p>
                    <p>Prediksi banyaknya pengidap COVID yang anda temui per hari: {Math.pow(exValueMeetPerDay*predMeetPerDay, 0.5)}</p>
                </div>
                <div>
                    <Link to="/">
                        <Button block bsSize="large">
                            Kembali ke home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}