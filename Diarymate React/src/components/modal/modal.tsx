import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalProps } from "react-bootstrap";

export interface MyModalProps extends ModalProps {
  userId: number;
  diaryText?: string;
  result?: string;
  onCloseClisk?: () => void;
}

function MyModal(props: MyModalProps) {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState<boolean>(false);
  const [isGenerateImage, setGenerateImage] = useState<boolean>(false);

  const imageGenerate = async (input: string) => {
    if (input === "") {
      return 0;
    }
    setGenerateImage(true);
    setLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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", //ai-image api key
        },
        body: JSON.stringify({
          //prompt: `${input}, BU METİNİ YAZAN BİRİSİNE İYİ HİSSETTİRİCEK RESİM OLUŞTUR`, //dall-e ye giden mesaj
          prompt: "Mutluluk içeren bir fotoğraf",
          n: 1,
          model: "dall-e-2",
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    setImage_url(data.data[0].url);
    setLoading(false);
  };

  const uploadResultDiary = () => {
    const diaryAddModel = {
      diaryText: props.diaryText,
      result: props.result,
      userId: props.userId,
    };
    axios
      .post("http://localhost:9090/api/v1/diary", diaryAddModel)
      .then(() => {
        console.log("yüklendi");
      })
      .catch(() => {
        console.log("yüklenemedi");
      })
      .finally(() => {
        props.onCloseClisk && props.onCloseClisk();
      });
  };

  return (
    // <Modal {...props} backdrop="static" keyboard={false}>
    //   <Modal.Header closeButton onClick={props.onCloseClisk}>
    //     <Modal.Title>Duygu Durum Analiz Sonucunuz</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>{props.result}</Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={props.onCloseClisk}>
    //       Kapat
    //     </Button>
    //     <Button variant="primary" onClick={uploadResultDiary}>
    //       Kaydet
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
    <Modal {...props} backdrop="static" keyboard={false}>
      {isGenerateImage === true ? (
        <>
          <Modal.Header closeButton onClick={props.onCloseClisk}>
            <Modal.Title>Ruhunuz İçin Görsel</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {loading === true ? (
              <p>Resminiz Yükleniyor, Lütfen Bekleyin.</p>
            ) : image_url !== "/" ? (
              <img src={image_url} alt="--" />
            ) : (
              <p>Resim yok</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setGenerateImage(false);
                props.onCloseClisk && props.onCloseClisk();
              }}
            >
              Kapat
            </Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Header closeButton onClick={props.onCloseClisk}>
            <Modal.Title>Duygu Durum Analiz Sonucunuz</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.result}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onCloseClisk}>
              Kapat
            </Button>
            <Button
              variant="primary"
              onClick={async () => imageGenerate(props.diaryText as string)}
            >
              Resim üret
            </Button>

            {localStorage.getItem("id") !== null ? (
              <Button variant="primary" onClick={uploadResultDiary}>
                Kaydet
              </Button>
            ) : null}
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
}

export default MyModal;
