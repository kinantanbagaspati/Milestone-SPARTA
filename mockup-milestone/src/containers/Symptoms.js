import React, {Component} from "react";
import "./Symptoms.css";
import { Link, Switch} from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Symptoms extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fever: 0,
            fatigue: 0,
            cough: 0,
            apetite: 0,
            muscleache: 0,
            breath: 0,
            sneeze: 0,
            diarrhea: 0,
            nausea: 0,
            headache: 0
        };
    }
    handleClick(row, isPlus) {
        switch(row){
            case 0:
                if(isPlus){
                    this.setState({fever: this.state.fever+1 <= 4 ? this.state.fever+1 : 4})
                }else{
                    this.setState({fever: this.state.fever-1 >= 0 ? this.state.fever-1 : 0})
                }
                break;
            case 1:
                if(isPlus){
                    this.setState({fatigue: this.state.fatigue+1 <= 4 ? this.state.fatigue+1 : 4})
                }else{
                    this.setState({fatigue: this.state.fatigue-1 >= 0 ? this.state.fatigue-1 : 0})
                }
                break;
            case 2:
                if(isPlus){
                    this.setState({cough: this.state.cough+1 <= 4 ? this.state.cough+1 : 4})
                }else{
                    this.setState({cough: this.state.cough-1 >= 0 ? this.state.cough-1 : 0})
                }
                break;
            case 3:
                if(isPlus){
                    this.setState({apetite: this.state.apetite+1 <= 4 ? this.state.apetite+1 : 4})
                }else{
                    this.setState({apetite: this.state.apetite-1 >= 0 ? this.state.apetite-1 : 0})
                }
                break;
            case 4:
                if(isPlus){
                    this.setState({muscleache: this.state.muscleache+1 <= 4 ? this.state.muscleache+1 : 4})
                }else{
                    this.setState({muscleache: this.state.muscleache-1 >= 0 ? this.state.muscleache-1 : 0})
                }
                break;
            case 5:
                if(isPlus){
                    this.setState({breath: this.state.breath+1 <= 4 ? this.state.breath+1 : 4})
                }else{
                    this.setState({breath: this.state.breath-1 >= 0 ? this.state.breath-1 : 0})
                }
                break;
            case 6:
                if(isPlus){
                    this.setState({sneeze: this.state.sneeze+1 <= 4 ? this.state.sneeze+1 : 4})
                }else{
                    this.setState({sneeze: this.state.sneeze-1 >= 0 ? this.state.sneeze-1 : 0})
                }
                break;
            case 7:
                if(isPlus){
                    this.setState({diarrhea: this.state.diarrhea+1 <= 4 ? this.state.diarrhea+1 : 4})
                }else{
                    this.setState({diarrhea: this.state.diarrhea-1 >= 0 ? this.state.diarrhea-1 : 0})
                }
                break;
            case 8:
                if(isPlus){
                    this.setState({nausea: this.state.nausea+1 <= 4 ? this.state.nausea+1 : 4})
                }else{
                    this.setState({nausea: this.state.nausea-1 >= 0 ? this.state.nausea-1 : 0})
                }
                break;
            case 9:
                if(isPlus){
                    this.setState({headache: this.state.headache+1 <= 4 ? this.state.headache+1 : 4})
                }else{
                    this.setState({headache: this.state.headache-1 >= 0 ? this.state.headache-1 : 0})
                }
                break;
        }
    }
    render(){
        return (
		
            <div className="container">

				<div className="headerSym">
					<h1>Symptoms</h1>
				</div>
				<Link to={{pathname: "/", userSymp: this.state}}>
                    <Button className="buttonHasil" block bsSize="large">
                        <p className="tulisanTombol">Kembali ke Home</p>
                    </Button>
				</Link>
				
				<div>
					<h2>Diantara 10 gejala di bawah ini, pilih skala dari 0-4 sesuai gejala yang Anda rasakan</h2>
					<div className="skala">
						<p>&ensp; &ensp;Skala Gejala. Keterangan</p>
						<ol start="0">
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
					<div className="pilihan">
						<div className="options">
							<p>&ensp; Demam &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(0, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.fever}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(0, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Lemas/Kelelahan &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(1, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.fatigue}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(1, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Batuk kering/sakit tenggorokan &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(2, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.cough}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(2, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Nafsu makan turun &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(3, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.apetite}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(3, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Nyeri otot &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(4, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.muscleache}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(4, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Napas pendek &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(5, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.breath}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(5, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Bersin &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(6, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.sneeze}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(6, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Diare/sakit perut &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(7, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.diarrhea}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(7, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Mual/muntah &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(8, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.nausea}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(8, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
						<div className="options">
							<p>&ensp; Pusing atau sakit kepala &ensp;</p>
							<div className="changeInput" onClick={()=>{this.handleClick(9, false)}}>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
							</div>
							<div className="input">
								{this.state.headache}
							</div>
							<div className="changeInput" onClick={()=>{this.handleClick(9, true)}}>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginBottom: -2}}/>
								<div style={{width: 16, height: 4, backgroundColor: "white", borderRadius: 2}}/>
								<div style={{width: 4, height: 8, backgroundColor: "white", borderRadius: 2, marginTop: -2}}/>
							</div>
						</div>
					</div>
				</div>
                <Link to={{pathname: "/symptoms/result", userSymp: this.state}}>
                    <Button className="buttonHasil" block bsSize="large">
                        <p className="tulisanTombol">Hasil ></p>
                    </Button>
                </Link>

            </div>
        );
    }
}
