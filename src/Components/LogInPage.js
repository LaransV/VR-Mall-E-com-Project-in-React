import React from 'react';
import './LogIn.css';
import logInBgImg from '../image/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/logo.png';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LogInPage() {
  const navigate = useNavigate();
  //Default Admin Name and Password
  const [adminame, setAdminame] = useState("Larans");
  const [admipassword, setAdmipassword] = useState(123)

  sessionStorage.setItem('adminName', adminame);
  sessionStorage.setItem('adminPassword', admipassword)

  // Login Form Validation

  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  sessionStorage.setItem('name', name);

  // register from validation
  const [registerName, setRegisterName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  // handle registration
  const handleRegistration = (e) => {
    e.preventDefault();

    if (
      registerName.trim() === "" ||
      registerPassword.trim() === "" ||
      confirmPassword.trim() === "" ||
      email.trim() === ""
    ) {

      alert("Please fill in all fields");
      return;
    }
    else if (registerPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    sessionStorage.setItem('registeredName', registerName);
    sessionStorage.setItem('registeredPassword', registerPassword);
    sessionStorage.setItem('confirmPassword', confirmPassword);
    sessionStorage.setItem('email', email);

    setRegisterName('');
    setRegisterPassword('');
    setConfirmPassword('');
    setEmail('');

    alert('Congratulations! Your Registration Was Successful');

  };

  /// Handle for Login
  const handleLogin = (e) => {
    e.preventDefault();

    const adminname = sessionStorage.getItem('adminName');
    const adminpassword = sessionStorage.getItem('adminPassword')

    const storedName = sessionStorage.getItem('registeredName');
    const storedPassword = sessionStorage.getItem('registeredPassword');

    if (name.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
    }
    else if (name === storedName && password === storedPassword) {
      navigate('/home')
    }
    else if (name === adminname && password === adminpassword) {
      navigate('/home')
    }
    else {
      alert("Invalid Name and Password Please SingnUp and then LogIn.");
    }

  };

  const Navi = () => {
    navigate('/LogInPage')
  }
  return (
    <>
      <nav className='loginNav'>
        <div className='logo' style={{ display: 'flex', flexDirection: 'row' }}>
          <img src={logo} className='rounded-pill' alt='logo' style={{ width: '45px', height: '37px', margin: '5px 10px 5px 5px', display: 'inline' }}></img>
          <h2>VR MALL</h2>
        </div>
      </nav>

      <div className='backgroundImage'>
        <img className='loginbgimg' src={logInBgImg} alt='bg-img' />
      </div>

      {/* Login Form */}
      <div className='loginform'>
        <form action='' onSubmit={handleLogin}>
          <h1 className='form_head'>LogIn</h1>

          <div className='input'>
            <label htmlFor="name" className="textlabel">Name:</label>
            <input className="put" name="name" id='name' type='text' required value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='input'>
            <label htmlFor="password" className="textlabel">Password:</label>
            <input className="put" name="password" id='password' type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="button">
            <p>If you don't have an account</p>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">SignUp</button>
            <button type="submit" className="btn btn-primary"> LogIn </button>
          </div>
        </form>

        {/* Modal for SignUp */}

        <div className="modal fade" id="myModal" style={{ color: 'black' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">SIGN UP</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <form onSubmit={handleRegistration}>
                <div className="modal-body" style={{ padding: '10px 10px 10px 130px' }}>

                  <div style={{ marginBottom: '10px' }}>
                    <label for='username' style={{ display: 'block', margin: '0px auto 5px auto' }}>Name :</label>
                    <input name='name' for='username' required type='text' value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label for='password' style={{ display: 'block' }}>Password :</label>
                    <input name='name' for='password' type='password' required value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label for='Cpassword' style={{ display: 'block' }}>Confirm Password :</label>
                    <input name='name' for='Cpassword' type='password' required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label for='email' style={{ display: 'block' }}>Email :</label>
                    <input name='name' for='email' type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div style={{ margintap: '40px', marginRight: '100px', textAlign: 'center' }}>
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>

                </div>
              </form>
              <div className="modal-footer">
                <p style={{ fontSize: '18px' }}>Already you have an Account</p>
                <button type='button' className='btn btn-primary' data-bs-dismiss="modal" onClick={Navi} >  LogIn </button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

// eslint-disable-next-line

export default LogInPage;
