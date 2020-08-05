import React, {Component} from "react";
import "./SResult.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function SResult(){
    const location = useLocation();
    let weight = [];
    return (
        <div className="Container">
            <h1>Hasil Kecocokan Anda dengan Gejala</h1>
            <div>
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