import React, {Component} from "react";
import "./IPResult.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import data from "../data.json";

export default function IPResult(){
    const location = useLocation();
    let userInfRate = 1;
    userInfRate *= data.internal.age[Math.min(Math.floor(location.userProb.age/10), 8)];
    userInfRate *= data.internal.gender[location.userProb.gender];
    userInfRate *= data.internal.disease[location.userProb.disease];
    let userBMI = location.userProb.weight*10000/(location.userProb.height*location.userProb.height);
    userInfRate *= (1 + 0.012*(userBMI - 23.55)*(userBMI - 23.55));
    return (
        <div className="Container">
            <h1>Hasil Probabilitas Anda Terinfeksi</h1>
            <div>
                {location.userProb.disease}
            </div>
            <div>
                <Link to="/">
                    <Button block bsSize="large">
                        Kembali ke home
                    </Button>
                </Link>
            </div>
        </div>
    );
}