import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from '../image/logo.png';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();

    const [item, setItem] = useState(Object.values(sessionStorage.getItem('cartdata')) || []);
    const [buy, setBuy] = useState([]);

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('cartdata')) || [];
        setItem(Object.values(data));
    }, []);

    const Buy = (id) => {
        const selectedItem = item.find(product => product.id === id);
        setBuy([...buy, selectedItem]);
        sessionStorage.setItem('BuyProduct', JSON.stringify([...buy, selectedItem]));
        navigate('/pay');
    };

    return (
        <div>
            <Navbar />
            {item && item.length > 0 ? (
                <div id='list'>
                    {item.map((data, index) => (
                        <div className='products' key={index}>
                            <div className="logo1">
                                <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "15px 5px 10px 10px", display: "inline", marginTop: '15px' }} />
                                <h5 style={{ color: 'black', marginTop: '20px' }}>VR MALL</h5>
                            </div>
                            <hr />
                            <div className='product-img'>
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
                                    <button className="btn btn-primary" onClick={() => Buy(data.id)} >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h2 style={{ textAlign: 'center', margin: '130px auto' }}>Your Cart is Empty</h2>
            )}
            <Footer />
        </div>
    );
}

export default Cart;
