import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Pay1() {
    const navigate = useNavigate();
    const getname = sessionStorage.getItem('name').toUpperCase();


    const Continue = () => {
        navigate('/home')
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>


            <div class="mt-5">
                <h4>Congratulations! {getname}. Your Payment Amount has been recived.</h4>
                <h4 style={{ textAlign: 'center', margin: "10px" }}>Thank you for shopping with VR MALL.</h4>
                <h5 style={{ textAlign: 'center', margin: "40px" }}>Continue With Shopping <button type='button' class="btn btn-primary" onClick={Continue} style={{ marginLeft: "30px" }}>Continue</button></h5>
            </div>


            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Pay1