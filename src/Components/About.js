import React from 'react';
import Aboutphoto1 from '../image/about-one.png';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    return (
        <>
        <Navbar/>
            <div id="about">

                <h1 className="abouth1" >About Us</h1>
                <div className="AboutUs" >
                    <div className="AboutUs1">
                        <img src={Aboutphoto1}></img>
                    </div>

                    <div className="AboutUs1">
                        <h1 className="abouth2">About Us</h1>
                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.<br /><br />

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis egestas ante, sed viverra nunc tincidunt nec nteger nonsed condimntum elit, sit amet feugiat lorem. Proin tempus sagittis velit vitae scelerisque.<br /><br />

                            Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.<br /><br />

                            Business-to-business metrics analytics value proposition funding angel investor entrepreneur alpha ramen equity gamification. Social proof partner network research.<br /><br /></p>
                    </div>
                </div>

                <div className="History">
                    <div className="History-1">
                        <h2>Our History</h2>
                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                    </div>

                    <div className="History-1" >
                        <h2>Our Mission</h2>
                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                    </div>

                    <div className="History-1">
                        <h2>Who We Are</h2>
                        <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                    </div>
                </div>

                <div>
                    <h1 className="h1">Our Awesome Team</h1>
                    <p className="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>

                <div className="our-team">
                    <div className="our-team-1">
                        <h3>Josh Buttler</h3>
                        <h4>CEO & Founder</h4>
                        <p style={{ textAlign: "start" }}>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                    </div>

                    <div className="our-team-1">
                        <h3>Alex </h3>
                        <h4>Marketing Manager</h4>
                        <p style={{ textAlign: "start" }}>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                    </div>

                    <div className="our-team-1">
                        <h3>Janny Cotller</h3>
                        <h4>Sales Manager</h4>
                        <p style={{ textAlign: "start" }}>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>

                    <div className="our-team-1">
                        <h3>Jason statham</h3>
                        <h4>Mall Opperator</h4>
                        <p style={{ textAlign: "start" }}>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>


            </div>
            <Footer/>
        </>

    )
}

export default About;