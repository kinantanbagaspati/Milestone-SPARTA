import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Symptoms() {
    return (
        <div className="Container">
            <h1>Symptoms</h1>
            <div>
                <Link to="/symptoms/result">
                    <Button block bsSize="large">
                        Lihat Hasil
                    </Button>
                </Link>
            </div>
        </div>
    );
}