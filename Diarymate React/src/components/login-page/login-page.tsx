import React, { useState } from "react";
import "./login-page.css";
import logo from "../../assets/images/logo3.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const registerModel = { username: username, password: password };
    axios
      .post("http://localhost:9090/api/v1/user/login", registerModel) //bu login için
      .then((response) => {
        console.log(response.data)
        if (response.data.id) {
          console.log("BAŞARILI:", response);
          localStorage.setItem('id', response.data.id) //localstorage da login olan kullanıcının id bilgisi saklanacak
          localStorage.setItem('username',response.data.username)
          navigate("/Blogpage");
        } else {
          console.log("BAŞARILI DEĞİL");
        }
      })
      .catch((e) => {
        console.log("BAŞARILI DEĞİL HATA VAR", e);
      });
  };

  return (
    <div>
      <div className="container-v">
        <div className="brand">
          <img className="loggo" src={logo} alt="Fotii Resmi" />
          <p className="aba">Günlük yazın Analiz edin</p>
        </div>

        <div className="magic-formm">
          <label htmlFor="email">Kullanıcı adı</label>
          <input
            id="email"
            type="email"
            placeholder="Kullanıcı adı"
            className="inputtt"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <label htmlFor="password">Şifre</label>
          <input
            id="password"
            type="password"
            placeholder="Şifre"
            className="inputtt"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="btn-dark" onClick={handleLogin}>
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

