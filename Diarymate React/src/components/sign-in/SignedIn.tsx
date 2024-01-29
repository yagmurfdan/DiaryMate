import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./signedoutin.css";
import { useNavigate } from "react-router-dom";
import SignedOut from "../sign-out/SignedOut";
import { Button } from "react-bootstrap";

const SignedIn = (props) => {
  const navigate = useNavigate();

  return (
    <div className="kullanici">
      {localStorage.getItem("id") !== null ? (
        <Menu.Item>
          <Image
            avatar
            spaced="right"
            src="https://picsum.photos/id/29/25/25"
          />
          <Dropdown
            pointing="top left"
            text={localStorage.getItem("username") || "Yağmur Fidan"}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  localStorage.removeItem("id");
                  localStorage.removeItem("username");
                  navigate("/");
                }}
                text="Çıkış Yap"
                icon="sign-out"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      ) : (
        <Button style={{width:"100%"}} onClick={()=>{navigate('/login')}}>Giriş Yap</Button>
      )}
    </div>
  );
};

export default SignedIn;
