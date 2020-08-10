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
                <div className="hero-image1">
                    <div className="header">
                        <h1>Infected Probability</h1>
                    </div>
                <div className="factor">
                    <div className="internal">
                        <div className="factortitle">
                            <h3>Faktor Eksternal</h3>
                        </div>
                        <p style={{marginBottom:0}}>Masukkan umur anda</p>
                        <input type="text" id="age" name="age" onChange={this.handleInputChange}/>
                        <div>
                            <p style={{marginBottom:0}}>Masukkan jenis kelamin anda</p>
                            <form>    
                                <input type="radio" id="male" name="gender" value={1} onChange={this.handleInputChange}/>
                                <label for="male">Male</label>
                                <input type="radio" id="female" name="gender" value={2} onChange={this.handleInputChange}/>
                                <label for="female">Female</label>
                                <input type="radio" id="other" name="gender" value={0} onChange={this.handleInputChange}/>
                                <label for="other">Other</label>
                            </form>
                        </div>
                        <p style={{marginBottom:0}}>Masukkan tinggi anda (cm)</p>
                        <input type="text" name="height" onChange={this.handleInputChange}/>
                        <p style={{marginBottom:0}}>Masukkan berat anda(kg)</p>
                        <input type="text" name="weight" onChange={this.handleInputChange}/>
                        <p style={{marginBottom:0}}>Centang satu penyakit di bawah ini yang anda derita:</p>
                        <form style={{display: "flex", flexDirection: "column"}}>
                            <div>
                            <input type="radio" id="disease1" name="disease" value={1} onChange={this.handleInputChange}/>
                            <label for="disease1"> Hipertensi / Darah Tinggi</label>
                            </div>
                            <div>
                                <input type="radio" id="disease2" name="disease" value={2} onChange={this.handleInputChange}/>
                                <label for="disease2"> Penyakit Jantung</label>
                            </div>
                            <div>
                                <input type="radio" id="disease3" name="disease" value={3} onChange={this.handleInputChange}/>
                                <label for="disease3"> Penyakit Pernapasan</label>
                            </div>
                            <div>
                                <input type="radio" id="disease4" name="disease" value={4} onChange={this.handleInputChange}/>
                                <label for="disease4"> Diabetes</label>
                            </div>
                            <div>
                                <input type="radio" id="disease5" name="disease" value={5} onChange={this.handleInputChange}/>
                                <label for="disease5"> Kanker</label>
                            </div>
                            <div>
                                <input type="radio" id="disease0" name="disease" value={0} onChange={this.handleInputChange}/>
                                <label for="disease0"> Tidak ada </label>
                            </div>
                        </form>
                    </div>
                    <div className="external">
                        <div className="factortitle">
                            <h3>Faktor Eksternal</h3>
                        </div>
                        <div className="subexternal">
                            <div className="question">Di provinsi mana anda tinggal?</div>
                            <div className="externalinput">
                                <select id="provinsi" name="provinsi" onChange={this.handleInputChange} style={{width: 283}}>
                                    <option value="0">INDONESIA (bila provinsi pilihan tidak ada)</option>
                                    <option value="17">ACEH</option>
                                    <option value="10">SUMATERA UTARA</option>
                                    <option value="13">SUMATERA BARAT</option>
                                    <option value="19">R I A U</option>
                                    <option value="22">J A M B I</option>
                                    <option value="23">SUMATERA SELATAN</option>
                                    <option value="14">LAMPUNG</option>
                                    <option value="28">KEPULAUAN BANGKA BELITUNG</option>
                                    <option value="16">KEPULAUAN RIAU</option>
                                    <option value="1">DKI JAKARTA</option>
                                    <option value="2">JAWA BARAT</option>
                                    <option value="5">JAWA TENGAH</option>
                                    <option value="8">DI YOGYAKARTA</option>
                                    <option value="4">JAWA TIMUR</option>
                                    <option value="3">B A N T E N</option>
                                    <option value="7">BALI</option>
                                    <option value="24">NUSA TENGGARA BARAT</option>
                                    <option value="11">KALIMANTAN BARAT</option>
                                    <option value="25">KALIMANTAN UTARA</option>
                                    <option value="15">KALIMANTAN TENGAH</option>
                                    <option value="18">KALIMANTAN SELATAN</option>
                                    <option value="9">KALIMANTAN TIMUR</option>
                                    <option value="26">SULAWESI UTARA</option>
                                    <option value="20">SULAWESI TENGAH</option>
                                    <option value="6">SULAWESI SELATAN</option>
                                    <option value="21">SULAWESI TENGGARA</option>
                                    <option value="29">SULAWESI BARAT</option>
                                    <option value="30">MALUKU</option>
                                    <option value="31">MALUKU UTARA</option>
                                    <option value="12">PAPUA</option>
                                    <option value="27">PAPUA BARAT</option>
                                </select>
                            </div>
                        </div>
                        <div className="subexternal">
                            <div className="question">Berapa hari dalam seminggu pekerjaan anda mengharuskan keluar rumah?</div>
                            <div className="externalinput">
                                <input type="number" name="workDay" onChange={this.handleInputChange} style={{width: 275}}/>
                            </div>
                        </div>
                        <div className="subexternal">
                            <div className="question">Berapa orang yang ditemui secara fisik dalam satu hari kerja? (apabila anda petugas medis, anda dapat menghitung juga pasien positif COVID di input ini, bukan pada input ke-5)</div>
                            <div className="externalinput">
                                <input type="number" name="workMeet" onChange={this.handleInputChange} style={{width: 275}}/>
                            </div>
                        </div>
                        <div className="subexternal">
                            <div className="question">Selama 2 minggu sebeum hari ini, berapa kali anda beraktivitas di fasilitas umum?</div>
                            <div className="externalinput">
                                <input type="number" name="pubDay" onChange={this.handleInputChange} style={{width: 275}}/>
                            </div>
                        </div>
                        <div className="subexternal">
                            <div className="question">Berapa banyak Anda berinteraksi dengan orang yang ternyata positif Covid-19 selama 2 minggu terakhir? (serta anda tidak menggunakan proteksi medis yang lengkap)</div>
                            <div className="externalinput">
                                <input type="number" name="posMeet" onChange={this.handleInputChange} style={{width: 275}}/>
                            </div>
                        </div>
                        <div className="subexternal">
                            <div className="question">Berapa orang yang serumah dengan Anda?</div>
                            <div className="externalinput">
                                <input type="number" name="userHome" onChange={this.handleInputChange} style={{width: 275}}/>
                            </div>
                        </div>
                        <div className="subexternal">
                            <div className="question">Selain yang telah ditanyakan, berapa banyak orang yang anda temui per harinya?</div>
                            <div className="externalinput">
                                <input type="number" name="userElse" onChange={this.handleInputChange} style={{width: 275}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={{pathname: "/infected-probability/result", userProb: this.state}}>
                        <Button className="resultButton" block bsSize="lg">
                            <p className="tulisanTombol">Lihat Hasil</p>
                        </Button>
                    </Link>
                </div>
                </div>
            </div>
            
        );
    }
}