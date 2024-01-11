import { React, useState } from "react";
import "./NavAndFoot.css";
import logo from '../image/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faCartShopping,faBars, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function Navbar() {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 850 });
    const getname = sessionStorage.getItem('name') .toUpperCase();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = (e) => {
        if (!e.target.matches('.dropbtn')) {
            setDropdownOpen(false);
        }
    };


    return (
        <div>

            {isDesktopOrLaptop ? (
                <nav>
                    <div className="nav">
                        <div className="logo" style={{ display: "flex", flexDirection: "row" }}>
                            <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "5px 10px 0px 5px", display: "inline", }}></img>
                            <h2 style={{ color: 'white',padding:'1px' }}>VR MALL</h2>
                        </div>

                        <div>
                            <ul className="list" style={{marginBottom:'0px'}}>
                                <li><FontAwesomeIcon icon={faHouse} /><Link to='/home' className="link"> Home </Link></li>
                                <li><FontAwesomeIcon icon={faMagnifyingGlass} /> <Link to='/about' className="link"> About </Link></li>
                                <li><FontAwesomeIcon icon={faCartShopping} /><Link to='/cart' className="link"> Cart </Link></li>
                                <li> <FontAwesomeIcon icon={faUser} /> {getname}</li>
                                <li style={{ marginLeft: '30px', backgroundColor:'black', color:'white',borderRadius:'10px' }}><FontAwesomeIcon icon={faRightFromBracket} /><Link to='/' className="link"> LogOut</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>

            ) : (
                <div className="navbar">

                    <div className="logo" style={{ display: "flex", flexDirection: "row", margin: "5px 0px 5px 5px" }}>
                        <img src={logo} className="rounded-pill" alt="logo" style={{ width: "35px", height: "35px", margin: "5px 0px 5px 5px", display: "inline", }}></img>
                        <h5 style={{ color: 'white', margin: "12px 0px 0px 5px" }}> VR MALL</h5>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown} ><FontAwesomeIcon icon={faBars} /></button>


                    </div>
                </div>

            )}


            <div className={dropdownOpen ? 'dropdown-show' : 'dropdown-content'} onClick={closeDropdown} >
                <ul>
                    <li><FontAwesomeIcon icon={faHouse} /><Link to='/home' className="link"> Home </Link></li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} /> <Link to='/about' className="link"> About </Link></li>
                    <li><FontAwesomeIcon icon={faCartShopping} /><Link to='/cart' className="link"> Cart </Link></li>
                    <li> <FontAwesomeIcon icon={faUser} /> {getname}</li>
                    <li style={{ marginTop: '20px', backgroundColor:'black', color:'white',padding:'10px', borderRadius:'10px' }}><FontAwesomeIcon icon={faRightFromBracket} /><Link to='/' className="link" style={{color:'white'}}> LogOut</Link></li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;
