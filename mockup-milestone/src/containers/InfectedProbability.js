import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function InfectedProbability() {
    return (
        <div className="Container">
            <h1>Infected Probability</h1>
            <div>
                <Link to="/infected-probability/result">
                    <Button block bsSize="large">
                        Lihat Hasil
                    </Button>
                </Link>
            </div>
        </div>
    );
}