import React, {Component} from "react";
import "./Algorithm.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Algorithm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    }
    render(){
        return (
            <div className="Container">
                <div className="hero-image">
                    <div className="header">
                        <h1>Algoritma COVID-19</h1>
                    </div>
                </div>
            </div>
        );
    }
}