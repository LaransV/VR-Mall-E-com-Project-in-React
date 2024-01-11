import React, { useState } from 'react';
import './LogIn.css';
import logInBgImg from '../image/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/logo.png'


function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/loginpage');
  };

  function Getstart() {
    if (!loggedIn) {
      // If not logged in, prompt to login
      //  alert("Please Login")
      console.log("Login");

    } else {
      console.log("User is already logged in");
    }
  }

  return (
    <div className="loginContainer">
      <nav className='loginNav' >
        <div className='logo' style={{ display: 'flex', flexDirection: 'row' }}>
          <img src={logo} className='rounded-pill' alt='logo' style={{ width: '45px', height: '37px', margin: '5px 10px 5px 5px' }}></img>
          <h2>VR MALL</h2>
        </div>
        <div className='btn'>
          <button className='btn1' onClick={handleLogin}>
            <FontAwesomeIcon style={{ color: 'white' }} icon={faRightToBracket} /> LogIn
          </button>
        </div>
      </nav>

      <div className='backgroundImage'>
        <img className='loginbgimg' src={logInBgImg} alt='bg-img' />
      </div>

      <div className='vrmall'>
        <h3>Welcome To</h3>
        <h1>VR MALL</h1>
        <button onClick={Getstart} type="button" variant="primary" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Get Start</button>
      </div>





      <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">


            <div class="modal-header">
              <h4 class="modal-title">LOGIN ALERT</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
              <p>Please LogIn to Continue.</p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
