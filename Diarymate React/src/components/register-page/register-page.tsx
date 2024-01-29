import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register-page.css"; // Import your CSS file
import videoBg from "./P-d.mp4";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const registerModel = { username: username, password: password };
    axios
      .post("http://localhost:9090/api/v1/user/register", registerModel)
      .then((response) => {
        if (response.data.id) {
          console.log("BAŞARILI:", response);
          navigate("/login");
        } else {
          console.log("BAŞARILI DEĞİL");
        }
      })
      .catch((e) => {
        console.log("BAŞARILI DEĞİL HATA VAR", e);
      });
  };

  return (
    <div className="login-container">
      <video autoPlay loop muted playsInline className="back-video">
        <source src={videoBg} type="video/mp4" />
      </video>
      <h1 className="üye">KAYIT OL</h1>
      <input
        className="login-input"
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="login-button" onClick={handleLogin}>
        Kayıt Ol
      </button>
    </div>
  );
};

export default RegisterPage;
