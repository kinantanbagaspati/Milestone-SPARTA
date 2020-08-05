import React, {Component} from "react";
import "./IPResult.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function IPResult(){
    const location = useLocation();
    return (
        <div className="Container">
            <h1>Hasil Probabilitas Anda Terinfeksi</h1>
            <div>
                {location.userProb.age}
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