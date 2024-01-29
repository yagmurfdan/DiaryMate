// App.js
import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPage from "./pages/Blogpage/BlogPage.jsx";
import Anasayfaa from "./pages/anasayfa/Anasayfaa.jsx";
import { Route, Routes } from "react-router-dom";
import SignedIn from "./components/sign-in/SignedIn.tsx";

import Register from "./components/login-page/login-page.tsx";
import İletisim from "./pages/iletisim/İletisim.tsx";
import LoginPage from "./components/login-page/login-page.tsx";
import Analizlerim from "./pages/analizlerim/analizlerim.tsx";
import RegisterPage from "./components/register-page/register-page.tsx";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Anasayfaa />} />
        <Route path="/Anasayfaa" element={<Anasayfaa />} />
        <Route path="/Günlüklerim" element={<BlogPage />} />
        <Route path="/GirisYap" element={<SignedIn />} />
        
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/Blogpage" element={<BlogPage/>} />
        <Route path="/İletisim" element={<İletisim/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/analizlerim" element={<Analizlerim/>} />
        
      </Routes>
    </div>
  );
}

export default App;
