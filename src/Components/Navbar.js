import React from "react";
import "./NavAndFoot.css";
import logo from '../image/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse , faMagnifyingGlass , faCartShopping , faUser, faRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

function Navbar() {
    const getname = sessionStorage.getItem('registeredName' ? 'adminName':'registeredName').toUpperCase();

    return (
        <div>
            <nav>
                <div className="nav">
                    <div className="logo"style={{ display: "flex", flexDirection: "row" }}>
                        <img src={logo} className="rounded-pill" alt="logo" style={{  width: "45px", height: "37px",margin: "5px 10px 5px 5px", display: "inline",}}></img>
                        <h2 style={{color:'white'}}>VR MALL</h2>
                    </div>

                    <div>
                        <ul className="list">
                            <li><FontAwesomeIcon icon={faHouse} /><Link to='/home' className="link"> Home </Link></li>
                            <li><FontAwesomeIcon icon={faMagnifyingGlass} /> <Link to='/about' className="link"> About </Link></li>
                            <li><FontAwesomeIcon icon={faCartShopping} /><Link to='/cart' className="link"> Cart </Link></li>
                            <li> <FontAwesomeIcon icon={faUser} /> {getname}</li>
                            <li style={{marginLeft:'30px'}}><FontAwesomeIcon icon={faRightFromBracket} /> LogOut</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    );
}

export default Navbar;
