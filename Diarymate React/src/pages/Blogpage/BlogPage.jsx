// BlogPage.tsx
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bilgi from "../../components/bilgi/Bilgi.tsx";
import Emoji from "../../components/emoji/Emoji.tsx";
import videoBg from "../abcolour.mp4";
import Navbar from "../../components/navbar/Navbar.tsx";
import "./blogpage.css";
import Diaryy from "../../components/diary/Diaryy.tsx";
import Diarynavbar from "../../components/diarynavbar/Diarynavbar.tsx";
import gif from "../../assets/images/gif.gif";
const BlogPage = () => {
  const [loadingDiary, setLoadingDiary] = useState(false);
  return (
    <>
    <Diarynavbar />
      <div className="video-background">
            <video className="main" src={videoBg} autoPlay loop muted />
          </div>
     
     
      <Row>
        
          {/* Navbar bölümü */}
          <Col xs={12} >
          {loadingDiary ? (
            <img src={gif} alt="waiting photo" width={100}  />
          ) : (
            <Diaryy setLoadingDiary={setLoadingDiary} />
          )}
        </Col>
        
      </Row>
      
      
     
      
      <Row>
      
        
        <Col xs={12} md={6}>
          {/* Emoji bölümü */}
          <Emoji
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          />
        </Col>
        
      </Row>
    </>
  );
};

export default BlogPage;
