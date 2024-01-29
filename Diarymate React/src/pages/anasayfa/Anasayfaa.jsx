import React from "react";
import "./anasayfa.css";
import logo3 from "../../assets/images/logo3.png";
import videoBg from "../abcolour.mp4";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.tsx";
import { Nav } from "react-bootstrap";
import a from "../../assets/images/slogan.jpg";
import b from "../../assets/images/logo3.png";
const Anasayfaa = () => {
  return (
    <div>
      <Navbar />

      <div className="heroo">
        <video autoPlay loop muted className="back-video">
          <source src={videoBg} type="video/mp4" />
        </video>

        <div className="contentt">
          <img src={b} alt="logo" id="logoo" />
          <h1>
            Online günlük ile size günlük duygularınızı ve aktivitelerinizi
            arşivleyebileceğiniz güvenli bir alan sağlar.
          </h1>

          <p>
            Günlük tutma, duygusal refahı artırabilir, düşünceleri
            düzenleyebilir ve hedeflere ulaşma sürecinde rehberlik edebilir.
            Bireylerin duygusal sağlığını iyileştirebilir, stresle başa
            çıkmalarına yardımcı olabilir ve kişisel hedeflere odaklanmalarına
            katkıda bulunabilir.
          </p>

          <Nav>
            <Link to="/login" className="nav-linkk">
              Giriş Yap
            </Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Anasayfaa;
