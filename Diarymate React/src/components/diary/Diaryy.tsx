import React, { useState } from "react";
import Foti from "../../assets/images/defter.png";
import "./diary.css"; // Stil dosyanızı ekleyebilirsiniz
import { sendMsgToOpenAI } from "../ai/Openai";

import MyModal from "../modal/modal.tsx";
import gif from "../../assets/images/gif.gif";

const Diaryy: React.FC = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const [userText, setUserText] = useState("");
  const [gptResponse, setGptResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalysis = async () => {
    setLoading(true);
    console.log("User Input:", userText);
    const response = await sendMsgToOpenAI(
      userText +
        " Yanda yazılan yazının duygu durum analizini yap.  hitap ederken yazar demek yerine sizin de."
    );
    setGptResponse(response.message.content || "");
    setLoading(false);
    setOpenModal(true);
    //setUserText("");
    console.log("DUYGU DURUM ANALİZ SONUCU : ", response.message.content);
  };

  return (
    <div className="diary-container">
      {loading ? (
        <img src={gif} alt="waiting photo" width={400} />
      ) : (
        <div>
          {/* Information Component */}
          <div className="image-container">
            <img src={Foti} alt="Fotii Resmi" />
            <div>
              <textarea
                className="overlay-text"
                style={{ width: "530px", height: "500px" }}
                value={userText}
                onChange={(e) => {
                  setUserText(e.target.value);
                  console.log("usertext :>> ", userText);
                }}
              ></textarea>
            </div>
          </div>
          <div>Nasıl hissediyorsun ?</div>
          <div className="abc">
            <button style={{ cursor: "pointer" }} onClick={handleAnalysis}>
              Analiz et
            </button>
          </div>
        </div>
      )}

      <MyModal
        userId={parseInt(localStorage.getItem('id')||'')}
        diaryText={userText}
        show={isOpenModal}
        result={gptResponse}
        onCloseClisk={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Diaryy;
