import React from 'react';
import './iletisim.css'; // Stil dosyanızı içe aktarın
import videoBg from '../abcolour.mp4';
import Navbar from '../../components/navbar/Navbar.tsx';
import logo from "../../assets/images/logo3.png";

const İletisim = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <Navbar />
            <div className="hero">
                <video autoPlay loop muted playsInline className="back-video">
                    <source src={videoBg} type="video/mp4" />
                </video>
    

                <div className="content">
                    <form onSubmit={handleSubmit}>
                        <label className='firstt' htmlFor="name">First name</label>
                        <br />
                        <input className='first' placeholder="Ad Soyad" type="text" />
                        <br />
                        <br />
                        <label className='firstt' htmlFor="mail">Mail</label>
                        <br />
                        <input className='first' placeholder="Mail" type="text" />
                        <br />
                        <br />
                        <label className='firstt' htmlFor="tel">Telefon Numarası</label>
                        <br />
                        <input className='first' placeholder="Telefon" type="text" />
                        <br />
                        <br />
                        <label className='firstt' htmlFor="mesaj">Mesaj</label>
                        <br />
                        <input className='first' placeholder="Mesaj" type="text" />
                        <br />
                        <br />
                        <input className='first' type="submit" value="Submit" id="submit" />
                    </form>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default İletisim;