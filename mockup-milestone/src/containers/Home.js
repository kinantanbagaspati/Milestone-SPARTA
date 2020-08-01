import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Home() {
    return (
        <div className="Container">
            <h1>Tes</h1>
            <p>Tes lagi</p>
            <div>
                <Link to="/infected-probability">
                    <Button block bsSize="large">
                        Kemungkinan Terinfeksi COVID-19
                    </Button>
                </Link>
            </div>
            <div>
                <Link to="/symptoms">
                    <Button block bsSize="large">
                        Tingkat Kecocokan dengan Gejala COVID-19
                    </Button>
                </Link>
            </div>
        </div>
    );
}