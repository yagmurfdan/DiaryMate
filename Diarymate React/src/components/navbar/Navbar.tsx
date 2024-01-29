import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './navbar.css';
import TECNO from '../../assets/images/TECNO.png';
import 'semantic-ui-css/semantic.min.css'
import SignedIn from '../sign-in/SignedIn.tsx';
import SignedOut from '../sign-out/SignedOut.tsx';
import { useState } from 'react';
import Diaryy from '../diary/Diaryy.tsx';
import Anasayfaa from '../../pages/anasayfa/Anasayfaa.jsx';
const CustomNavbar = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();
    const handleSignOut=(params)=> {
        console.log("komtrpoll")
        setAuthenticated(false);
        navigate("/register")
    }

    function handleSignin(param) {
        setAuthenticated(true);
    }

    return (
        <div className='container a'>
            <div className='my-row'>
                <div className="navbar-container">
                    <Link to="/Anasayfaa" className="navbar-brand">
                        <img
                            src={TECNO}
                            alt="Tecno Logo"
                            height="160" // Dilediğiniz yüksekliği ayarlayabilirsiniz
                            width="160"  // Dilediğiniz genişliği ayarlayabilirsiniz
                            className="tecno-logo"
                        />
                    </Link>
                    <Nav className="me-auto my-3 my-lg-0 d-flex" navbarScroll>
                        <Link to="/Anasayfaa" className="nav-link">Anasayfa</Link>
                        <Link to="/Günlüklerim" className="nav-link">Günlüklerim</Link>
                        <Link to="/İletisim" className="nav-link">İletişim</Link>
                        <Link to="/analizlerim" className="nav-link">Analizlerim</Link>
                    </Nav>
                    {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signin={handleSignin} />}
                </div>
            </div>
        </div>
    );
};

export default CustomNavbar;