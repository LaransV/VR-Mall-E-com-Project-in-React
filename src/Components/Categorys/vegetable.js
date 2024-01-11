import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import jsonData from '../../JsonFiles/home.json';
import './Common.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import vegposter from '../../image/Home/vegitable-poster.jpg';
import fruitposter from '../../image/Home/fruit-poster.jpg';
import logo from '../../image/logo.png';


function Vegetable() {
    const [vegetables, setVegetables] = useState([]);
    const [fruits, setFruits] = useState([]);
    const [cartBtnsId, setCartBtnsId] = useState(JSON.parse(sessionStorage.getItem('btn')) || []);
    const [cartitem, setCartitem] = useState(JSON.parse(sessionStorage.getItem('cartdata')) || []);
    console.log(cartBtnsId);
    console.log(cartitem);

    sessionStorage.setItem('cartdata', JSON.stringify(cartitem));
    sessionStorage.setItem('btn', JSON.stringify(cartBtnsId))

    useEffect(() => {
        const storedData = jsonData || [];
        setVegetables(storedData[1]?.vegetable || []);
        setFruits(storedData[2]?.fruits || []);


    }, []);

    const AddCart = (id) => {

        setCartBtnsId(prevState => ({
            ...prevState,
            [id]: true
        }));

        setCartitem(prevState => ({
            ...prevState,
            [id]: vegetables.find(item => item.id === id) || fruits.find(item => item.id === id)
        }));

    };


    const RemoveCart = (id) => {
        setCartBtnsId(prevState => ({
            ...prevState,
            [id]: false
        }));

        setCartitem(prevState => {
            const updatedCart = { ...prevState };
            delete updatedCart[id];
            return updatedCart;
        });

        sessionStorage.setItem('cartdata', JSON.stringify(cartitem));
        sessionStorage.setItem('btn', JSON.stringify(cartBtnsId))
    };



    return (
        <div>
            <Navbar />


            <img src={vegposter} alt='veg-poster' style={{ width: "100%" }} ></img>
            <div id='list'>
                {vegetables.map((data, index) => (
                    <div className='products' key={index}>
                        <div className="logo1">
                            <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "15px 5px 10px 10px", display: "inline", marginTop: '15px' }}></img>
                            <h5 style={{ color: 'black', marginTop: '20px' }}>VR MALL</h5>
                        </div>
                        <hr />
                        <div className='product-img' >
                            <img src={data.image} alt={data.name} />
                        </div>
                        <hr />
                        <div className='body'>
                            <div className='product-body'>
                                <h5>{data.name}</h5>
                                <p>Price : ₹ {data.price}</p>
                            </div>
                            <hr />
                            <div className='product-btn'>
                                {cartBtnsId[data.id] ? (
                                    <button className='btn btn-danger'
                                        onClick={() => RemoveCart(data.id)}>
                                        <FontAwesomeIcon icon={faCartShopping} /> Remove from Cart
                                    </button>
                                ) : (
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => AddCart(data.id)} // Use a function reference here
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                                    </button>
                                )}


                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <img src={fruitposter} alt='fruit-poster' style={{ width: "100%" }} ></img>
            <div id='list'>
                {fruits.map((data, index) => (
                    <div className='products' key={index}>
                        <div className="logo1">
                            <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "15px 5px 10px 10px", display: "inline", marginTop: '15px' }}></img>
                            <h5 style={{ color: 'black', marginTop: '20px' }}>VR MALL</h5>
                        </div>
                        <hr />
                        <div className='product-img' >
                            <img src={data.image} alt={data.name} />
                        </div>
                        <hr />
                        <div className='body'>
                            <div className='product-body'>
                                <h5>{data.name}</h5>
                                <p>Price : ₹ {data.price}</p>
                            </div>
                            <hr />
                            <div className='product-btn'>
                                {cartBtnsId[data.id] ? (
                                    <button className='btn btn-danger'
                                        onClick={() => RemoveCart(data.id)}>
                                        <FontAwesomeIcon icon={faCartShopping} /> Remove from Cart
                                    </button>
                                ) : (
                                    <button
                                        className='btn btn-primary'
                                        onClick={() => AddCart(data.id)} // Use a function reference here
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                                    </button>
                                )}


                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}
export default Vegetable;






