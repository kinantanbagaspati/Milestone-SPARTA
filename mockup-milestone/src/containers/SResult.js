import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function SResult() {
    return (
        <div className="Container">
            <h1>Hasil Kecocokan Anda dengan Gejala</h1>
            <div>
                <Link to="/">
                    <Button block bsSize="large">
                        Lihat Hasil
                    </Button>
                </Link>
            </div>
        </div>
    );
}