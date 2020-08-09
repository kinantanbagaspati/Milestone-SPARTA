import React, {Component} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Home extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="Container">
                <div className="header">
                    <h1 className="headerhome">Selamat datang di Website Pemantau Kemungkinan Terinfeksi COVID-19</h1>
                </div>
                <div className="kotakputihhome">
                    <p className="pertanyaanhome">Apa yang ingin anda ketahui hari ini?</p>
                    <div className="kumpulantombolhome">
                        <div>
                            <Link to="/infected-probability">
                                <Button className = "buttonHome" block bsSize="large">
                                    <p className="tulisan">Kemungkinan Terinfeksi COVID-19</p>
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/symptoms">
                                <Button className="buttonHome" block bsSize="large">
                                <p className="tulisan">Tingkat Kecocokan dengan Gejala COVID-19</p>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}