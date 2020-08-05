import React, {Component} from "react";
import "./SkalaGejala.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Home extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="Container">
                <h1>Skala Gejala</h1>
				<Link to={{pathname: "/symptoms"}}>
					<Button>Back</Button>
				</Link>
				<ol start="0" class="center">
					<li>Organ terkait gejala tersebut berfungsi normal sepenuhnya</li>
					<br/>
					<li>Terasa gangguan terhadap organ terkait gejala dalam
					melakukan fungsi seharusnya</li>
					<br/>
					<li>Terasa sejumlah gangguan pada organ terkait dan mulai
					membentuk tanda-tanda yang cocok dengan gejala tersebut</li>
					<br/>
					<li>Gejala sudah dapat dipastikan timbul dan mengganggu
					aktivitas sehari-hari bahkan terasa sakit atau ketidaknyamanan</li>
					<br/>
					<li>Sakit yang ditimbulkan dari suatu gejala menyebabkan sejumlah
					aktivitas manusia normal sudah tidak dapat dikerjakan seperti
					biasa</li>
				</ol>
            </div>
        );
    }
}