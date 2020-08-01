import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function IPResult() {
    return (
        <div className="Container">
            <h1>Hasil Probabilitas Anda Terinfeksi</h1>
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