import React, { useEffect } from 'react';
import Navbar from './Navbar';
import ph1 from '../image/Home/add1.webp';
import ph2 from '../image/Home/add2.webp';
import ph4 from '../image/Home/add3.webp';
import ph5 from '../image/Home/add4.webp';
import Footer from './Footer';
import { useState } from 'react';
import jsonData from '../JsonFiles/home.json'
import { Link } from 'react-router-dom';
import '../Components/Categorys/Common.css';

function Home() {

    //sessionStorage.setItem('jsonData', JSON.stringify(datajson));

    const [categorys, setCategorys] = useState([]);

    useEffect(() => {

        const storedData = jsonData || [];
        setCategorys(storedData[0]?.category || []);

    }, []);

    return (
        <div>
            <div>
                <Navbar />
            </div>


            <div>

                <div id="demo" class="carousel slide" data-bs-ride="carousel">


                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    </div>


                    <div class="carousel-inner" >
                        <div class="carousel-item active">
                            <img src={ph5} alt="Los Angeles" class="d-block w-100" style={{ height: '300px' }} />
                        </div>
                        <div class="carousel-item">
                            <img src={ph2} alt="Chicago" class="d-block w-100" style={{ height: '300px' }} />
                        </div>
                        <div class="carousel-item">
                            <img src={ph1} alt="New York" class="d-block w-100" style={{ height: '300px' }} />
                        </div>
                        <div class="carousel-item">
                            <img src={ph4} alt="York" class="d-block w-100" style={{ height: '300px' }} />
                        </div>

                    </div>


                    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>



            <h2 style={{ margin: '20px auto 10px auto', textAlign: 'center' }}>Shop by Category</h2>
            <div id='Home'>
                {categorys.map((productData, index) => (
                    <div className="homeproduct" key={index}>

                        <Link to={productData.pathname} style={{ color: "white", textDecoration: "none" }}> <img style={{ width: "250px", height: "400" }} src={productData.image} alt={productData.name} /></Link>
                    </div>
                ))}
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;


