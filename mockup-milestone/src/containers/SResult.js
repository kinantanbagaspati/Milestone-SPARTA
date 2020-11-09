import React, {Component} from "react";
import "./SResult.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import data from "../data.json"

export default function SResult(){
    const location = useLocation();
    let TP = [];
    let ProbDay = [];
    for(var i=0; i<10; i++){
        TP.push([])
    }
    for(var i=0; i<5; i++){
        TP[0].push(1 - Math.abs(location.userSymp.fever - data.symptom.prediction[0][i])/Math.max(data.symptom.prediction[0][i], 4-data.symptom.prediction[0][i]));
        TP[1].push(1 - Math.abs(location.userSymp.fatigue - data.symptom.prediction[1][i])/Math.max(data.symptom.prediction[1][i], 4-data.symptom.prediction[1][i]));
        TP[2].push(1 - Math.abs(location.userSymp.cough - data.symptom.prediction[2][i])/Math.max(data.symptom.prediction[2][i], 4-data.symptom.prediction[2][i]));
        TP[3].push(1 - Math.abs(location.userSymp.apetite - data.symptom.prediction[3][i])/Math.max(data.symptom.prediction[3][i], 4-data.symptom.prediction[3][i]));
        TP[4].push(1 - Math.abs(location.userSymp.muscleache - data.symptom.prediction[4][i])/Math.max(data.symptom.prediction[4][i], 4-data.symptom.prediction[4][i]));
        TP[5].push(1 - Math.abs(location.userSymp.breath - data.symptom.prediction[5][i])/Math.max(data.symptom.prediction[5][i], 4-data.symptom.prediction[5][i]));
        TP[6].push(1 - Math.abs(location.userSymp.sneeze - data.symptom.prediction[6][i])/Math.max(data.symptom.prediction[6][i], 4-data.symptom.prediction[6][i]));
        TP[7].push(1 - Math.abs(location.userSymp.diarrhea - data.symptom.prediction[7][i])/Math.max(data.symptom.prediction[7][i], 4-data.symptom.prediction[7][i]));
        TP[8].push(1 - Math.abs(location.userSymp.nausea - data.symptom.prediction[8][i])/Math.max(data.symptom.prediction[8][i], 4-data.symptom.prediction[8][i]));
        TP[9].push(1 - Math.abs(location.userSymp.headache - data.symptom.prediction[9][i])/Math.max(data.symptom.prediction[9][i], 4-data.symptom.prediction[9][i]));
        ProbDay.push(0);
        for(var j=0; j<10; j++){
            ProbDay[i] = ProbDay[i] + data.symptom.weight[j]*TP[j][i];
        }
        ProbDay[i] = Math.round(ProbDay[i]/data.symptom.weight[10]*100);
    }

    let Day = [1, 5, 7, 8, 10];
    let userDay = 0;
    let totalProb = 0;
    for(var i=0; i<5; i++){
        userDay += (ProbDay[i]*Day[i]);
        totalProb += ProbDay[i];
    }
    userDay /= totalProb;
    totalProb /= 5;
    
    return (
        <div class = "container">
            <div className="header">
                <h1>Hasil Kecocokan Anda dengan Gejala</h1>
            </div>
            <div className="heading2">
                Tingkat kecocokan terhadap orang yang sudah 1 hari terinfeksi: {ProbDay[0]} %
	    		<br/>
                Tingkat kecocokan terhadap orang yang sudah 5 hari terinfeksi: {ProbDay[1]} %
	    		<br/>
                Tingkat kecocokan terhadap orang yang sudah 7 hari terinfeksi: {ProbDay[2]} %
	            <br/>
                Tingkat kecocokan terhadap orang yang sudah 8 hari terinfeksi: {ProbDay[3]} %
                <br/>
                Tingkat kecocokan terhadap orang yang sudah 10 hari terinfeksi: {ProbDay[4]} %
			    <br/>
            </div>
            <div className="box">
                <div className="komponendiagram">
                    <div className="heading2">{ProbDay[0]} %</div>
                    <div style={{width: 20, height: 2*ProbDay[0], backgroundColor: "#47B713"}}/>
                    <div style={{height: 20}}>
                        <div className="heading2">hari 1</div>
                    </div>
                </div>
                <div className="komponendiagram">
                    <div className="heading2">{ProbDay[1]} %</div>
                    <div style={{width: 20, height: 2*ProbDay[1], backgroundColor: "#47B713"}}/>
                    <div style={{height: 20}}>
                        <div className="heading2">hari 5</div>
                    </div>
                </div>
                <div className="komponendiagram">
                    <div className="heading2">{ProbDay[2]} %</div>
                    <div style={{width: 20, height: 2*ProbDay[2], backgroundColor: "#47B713"}}/>
                    <div style={{height: 20}}>
                        <div className="heading2">hari 7</div>
                    </div>
                </div>
                <div className="komponendiagram">
                    <div className="heading2">{ProbDay[3]} %</div>
                    <div style={{width: 20, height: 2*ProbDay[3], backgroundColor: "#47B713"}}/>
                    <div style={{height: 20}}>
                        <div className="heading2">hari 8</div>
                    </div>
                </div>
                <div className="komponendiagram">
                    <div className="heading2">{ProbDay[4]} %</div>
                    <div style={{width: 20, height: 2*ProbDay[4], backgroundColor: "#47B713"}}/>
                    <div style={{height: 20}}>
                        <div className="heading2">hari 10</div>
                    </div>
                </div>
            </div>
            <div className="heading2">
                Prediksi hari paling cocok dengan user: {userDay}
	    		<br/>
                Tingkat akurasi: {totalProb} %
            </div>
            <div>
                <Link to="/">
                    <Button className="buttonHome" block bsSize="large">
                        <p className="tulisan">Kembali ke Home</p>
                    </Button>
                </Link>
            </div>
        </div>
    );
}