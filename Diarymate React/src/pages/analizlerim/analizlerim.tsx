// Analizlerim.tsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./analizlerim.css"; // Import your CSS file
import Diarynavbar from "../../components/diarynavbar/Diarynavbar.tsx";
import videoBg from "../abcolour.mp4";

export interface DiaryResult {
  diaryText: string;
  result: string;
  userUsername: string;
}

const Analizlerim = () => {
  const [dataList, setDataList] = useState<DiaryResult[]>([]);

  const fetchDiariesByUserId = () => {
    axios
      .get(`http://localhost:9090/api/v1/diary/${localStorage.getItem("id")}`)
      .then((response) => {
        setDataList(response.data);
      })
      .catch(() => {})
      .finally(() => {});
  };

  useEffect(() => {
    fetchDiariesByUserId();
  }, []);

  return (
    <div className="diaryy-container">
      <Diarynavbar />
      <div className="video-background">
        <video className="main" src={videoBg} autoPlay loop muted />
      </div>
      {dataList.map((data, index) => (
        <div key={index} className="diaryy-card">
          <p className="diaryy-username">Kullanıcı: {data.userUsername}</p>
          <p className="diaryy-text">Günlük: {data.diaryText}</p>
          <p className="diaryy-result">Analiz: {data.result}</p>
        </div>
      ))}
    </div>
  );
};

export default Analizlerim;
