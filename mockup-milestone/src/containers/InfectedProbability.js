import React, {Component} from "react";
import "./InfectedProbability.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class InfectedProbability extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: 30,
            gender: 0,
            weight: 60,
            height: 160,
            disease: 0,
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
                        <input type="text" name="age" onChange={this.handleInputChange}/>
                        <form>    
                            <input type="radio" id="male" name="gender" value={1} onChange={this.handleInputChange}/>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value={2} onChange={this.handleInputChange}/>
                            <label for="female">Female</label>
                            <input type="radio" id="other" name="gender" value={0} onChange={this.handleInputChange}/>
                            <label for="other">Other</label>
                        </form>
                        <p>Tinggi (cm)</p>
                        <input type="text" name="height" onChange={this.handleInputChange}/>
                        <p>Berat (kg)</p>
                        <input type="text" name="weight" onChange={this.handleInputChange}/>
                        <form>
                            <input type="radio" id="disease1" name="disease" value={1} onChange={this.handleInputChange}/>
                            <label for="disease1"> Hipertensi / Darah Tinggi</label>
                            <input type="radio" id="disease2" name="disease" value={2} onChange={this.handleInputChange}/>
                            <label for="disease2"> Penyakit Jantung</label>
                            <input type="radio" id="disease3" name="disease" value={3} onChange={this.handleInputChange}/>
                            <label for="disease3"> Penyakit Pernapasan</label>
                            <input type="radio" id="disease4" name="disease" value={4} onChange={this.handleInputChange}/>
                            <label for="disease4"> Diabetes</label>
                            <input type="radio" id="disease5" name="disease" value={5} onChange={this.handleInputChange}/>
                            <label for="disease5"> Kanker</label>
                            <input type="radio" id="disease0" name="disease" value={0} onChange={this.handleInputChange}/>
                            <label for="disease0"> Tidak ada </label>
                        </form>
                    </div>
                    <div className="external">
                        <label for="cars">Di provinsi mana anda tinggal?</label>
                        <select id="cars" name="provinsi" onChange={this.handleInputChange}>
                            <option value="0">INDONESIA (bila provinsi pilihan tidak ada)</option>
                            <option value="1">ACEH</option>
                            <option value="2">SUMATERA UTARA</option>
                            <option value="3">SUMATERA BARAT</option>
                            <option value="4">R I A U</option>
                            <option value="5">J A M B I</option>
                            <option value="6">SUMATERA SELATAN</option>
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
                            <option value="20">KALIMANTAN BARAT</option>
                            <option value="21">KALIMANTAN TENGAH</option>
                            <option value="22">KALIMANTAN SELATAN</option>
                            <option value="23">KALIMANTAN TIMUR</option>
                            <option value="24">SULAWESI UTARA</option>
                            <option value="25">SULAWESI SELATAN</option>
                            <option value="26">SULAWESI TENGGARA</option>
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
                        <p>Berapa orang yang ditemui secara fisik dalam satu hari kerja? (apabila anda petugas medis, anda dapat menghitung juga pasien positif COVID di input ini, bukan pada input ke-5)</p>
                        <input type="number" name="workMeet" onChange={this.handleInputChange}/>
                        <p>Selama 2 minggu sebeum hari ini, berapa kali anda beraktivitas di fasilitas umum?</p>
                        <input type="number" name="pubDay" onChange={this.handleInputChange}/>
                        <p>Berapa banyak Anda berinteraksi dengan orang yang ternyata positif Covid-19 selama 2 minggu terakhir? (serta anda tidak menggunakan proteksi medis yang lengkap)</p>
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