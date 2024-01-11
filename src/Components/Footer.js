import React from 'react';
import "./NavAndFoot.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../image/logo.png';


function Footer() {
  return (
    <div className='footer'>
      <div className="logo" style={{ display: "flex", flexDirection: "row", backgroundColor: 'none' }}>
        <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "5px 10px 5px 5px", display: "inline", marginTop: '15px' }}></img>
        <h5 style={{ color: 'white', marginTop: '20px' }}>VR MALL</h5>
      </div>

      <div className='content'>
        <div>
          <h3>Services</h3><br />
          <p><a href='#'>Door Delivery</a></p>
          <p><a href='#'>Tech Support</a></p>
          <p><a href='#'>Web Developing</a></p>
          <p><a href='#'>App Developing</a></p>
        </div>

        <div>
          <h3>Social</h3><br />
          <p><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
          <p><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</p>
          <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
          <p><FontAwesomeIcon icon={faTwitter} /> Twitter</p>
        </div>

        <div>
          <h3>Quick links</h3><br />

          <p><a href='#'>Home</a></p>
          <p><a href='#'>About</a></p>
          <p><a href='#'>Services</a></p>
          <p><a href='#'>Contact Us</a></p>
        </div>

        <div>
          <h3>Address</h3><br />
          <p>1/69, Middle Street, <br /> Melakrishnaperri,<br /> Alangulam (Taluk), <br /> Tenkasi - 627 808 </p>
          <h5>Mobile Number</h5>
          <p>+91 7010831356</p>
          <h5>Email</h5>
          <p>laransvictor2003@gmail.com</p>
        </div>
      </div>

      <footer>
        <hr style={{ color: "white" }} />
        <p style={{ margin: '20px auto 20px auto', color: 'white' }}> © 2024 VR MALL.</p>
        <hr />
      </footer>

    </div>
  )
}

export default Footer;
