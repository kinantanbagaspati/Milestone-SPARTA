import React, {Component} from "react";
import "./InfectedProbability.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class InfectedProbability extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: 0,
            gender: 0,
            disease1: 0,
            disease2: 0,
            disease3: 0,
            disease4: 0,
            disease5: 0,
            provinsi: 0,
            workDay: 0,
            workMeet: 0,
            pubDay: 0,
            posMeet: 0,
            userHome: 0,
            userElse: 0
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
    }
    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]: event.target.value})
    }
    render(){
        return (
            <div className="container">
                <h1>Infected Probability</h1>
                <div className="factor">
                    <div className="internal">
                        <p>Umur</p>
                        <input type="number" name="age" onChange={this.handleInputChange}/>
                        <form>    
                            <input type="radio" id="male" name="gender" value={1} onChange={this.handleInputChange}/>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value={2} onChange={this.handleInputChange}/>
                            <label for="female">Female</label>
                            <input type="radio" id="other" name="gender" value={0} onChange={this.handleInputChange}/>
                            <label for="other">Other</label>
                        </form>
                        <p>Tinggi (M)</p>
                        <input type="number" name="height" onChange={this.handleInputChange}/>
                        <p>Berat (KG)</p>
                        <input type="number" name="weight" onChange={this.handleInputChange}/>
                        <form>
                            <input type="checkbox" id="disease1" name="disease1" onChange={()=>{this.setState({disease1: this.state.disease1+1})}}/>
                            <label for="disease1"> Hipertensi / Darah Tinggi</label>
                            <input type="checkbox" id="disease2" name="disease2" onChange={()=>{this.setState({disease2: this.state.disease2+1})}}/>
                            <label for="disease2"> Penyakit Jantung</label>
                            <input type="checkbox" id="disease3" name="disease3" onChange={()=>{this.setState({disease3: this.state.disease3+1})}}/>
                            <label for="disease3"> Penyakit Pernapasan</label>
                            <input type="checkbox" id="disease4" name="disease4" onChange={()=>{this.setState({disease4: this.state.disease4+1})}}/>
                            <label for="disease4"> Diabetes</label>
                            <input type="checkbox" id="disease5" name="disease5" onChange={()=>{this.setState({disease5: this.state.disease5+1})}}/>
                            <label for="disease5"> Kanker</label>
                        </form>

                    </div>
                    <div className="external">
                        <label for="cars">Di provinsi mana anda tinggal?</label>
                        <select id="cars" name="provinsi" onChange={this.handleInputChange}>
                            <option value="1">ACEH</option>
							<option value="2">SUMATERA UTARA</option>
							<option value="3">SUMATERA BARAT</option>
							<option value="4">R I A U</option>
							<option value="5">J A M B I</option>
							<option value="6">SUMATERA SELATAN</option>
							<option value="7">BENGKULU</option>
							<option value="8">LAMPUNG</option>
							<option value="9">KEPULAUAN BANGKA BELITUNG</option>
							<option value="10">KEPULAUAN RIAU</option>
							<option value="11">DKI JAKARTA</option>
							<option value="12">JAWA BARAT</option>
							<option value="13">JAWA TENGAH</option>
							<option value="14">DI YOGYAKARTA</option>
							<option value="15">JAWA TIMUR</option>
							<option value="16">B A N T E N</option>
							<option value="17">BALI</option>
							<option value="18">NUSA TENGGARA BARAT</option>
							<option value="19">NUSA TENGGARA TIMUR</option>
							<option value="20">KALIMANTAN BARAT</option>
							<option value="21">KALIMANTAN TENGAH</option>
							<option value="22">KALIMANTAN SELATAN</option>
							<option value="23">KALIMANTAN TIMUR</option>
							<option value="24">SULAWESI UTARA</option>
							<option value="25">SULAWESI SELATAN</option>
							<option value="26">SULAWESI TENGGARA</option>
							<option value="27">GORONTALO</option>
							<option value="28">SULAWESI BARAT</option>
							<option value="29">MALUKU</option>
							<option value="30">MALUKU UTARA</option>
							<option value="31">PAPUA</option>
							<option value="32">PAPUA BARAT</option>
							<option value="33">SULAWESI TENGAH</option>
							<option value="34">KALIMANTAN UTARA</option>
                        </select>
                        <p>Berapa hari dalam seminggu pekerjaan anda mengharuskan keluar rumah?</p>
                        <input type="number" name="workDay" onChange={this.handleInputChange}/>
                        <p>Berapa orang yang ditemui dalam satu hari kerja?</p>
                        <input type="number" name="workMeet" onChange={this.handleInputChange}/>
                        <p>Selama 2 minggu sebeum hari ini, berapa kali anda beraktivitas di fasilitas umum?</p>
                        <input type="number" name="pubDay" onChange={this.handleInputChange}/>
                        <p>Berapa banyak Anda berinteraksi dengan orang yang ternyata positif Covid-19?</p>
                        <input type="number" name="posMeet" onChange={this.handleInputChange}/>
                        <p>Berapa orang yang serumah dengan Anda?</p>
                        <input type="number" name="userHome" onChange={this.handleInputChange}/>
                        <p>Selain yang telah ditanyakan, berapa banyak orang yang anda temui per harinya?</p>
                        <input type="number" name="userElse" onChange={this.handleInputChange}/>
                    </div>
                </div>
                <div>
                    <Link to={{pathname: "/infected-probability/result", userProb: this.state}}>
                        <Button block bsSize="large">
                            Lihat Hasil
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
}