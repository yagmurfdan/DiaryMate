import React from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'; // Link ekledik
import "./signedout.css";

const SignedOut = (props) => {
  return (
    <div className='girisler'>
      <Menu.Item>
        <Link to="/login"> {/* Link ekledik */}
          <Button onClick={props.signin}>Giriş Yap</Button>
        </Link>
        <Link to="/register"> {/* Link ekledik */}
          <Button style={{ marginLeft: "5px" }}>Kayıt Ol</Button>
        </Link>
      </Menu.Item>
    </div>
  );
}

export default SignedOut;
