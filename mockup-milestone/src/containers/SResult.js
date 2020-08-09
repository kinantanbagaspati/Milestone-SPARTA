import React, {Component} from "react";
import "./SResult.css";
import { Link, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function SResult(){
    const location = useLocation();
    let weight = [];
    return (
        <div class = "centerize">
            <h1>Hasil Kecocokan Anda dengan Gejala</h1>
            <div>
            </div>
            <div>
                <Link to="/">
                    <button class = "button">
                        Kembali ke home
                    </button>
                </Link>
            </div>
        </div>
    );
}