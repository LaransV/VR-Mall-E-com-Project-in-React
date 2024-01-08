import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Common.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import vegposter from '../../image/Home/vegitable-poster.jpg';
import fruitposter from '../../image/Home/fruit-poster.jpg';
import logo from '../../image/logo.png';


function Vegetable() {
    const [vegetables, setVegetables] = useState([]);
    const [fruits, setFruits] = useState([]);
    const [cartBtns, setCartBtns] = useState(JSON.parse(sessionStorage.getItem('btn')) || []);
    const [cartitem , setCartitem] = useState(JSON.parse(sessionStorage.getItem('cartdata')) || []);
    // console.log(vegetables.indexOf(index));
    // console.log(cartitem);
    
    sessionStorage.setItem('cartdata', JSON.stringify(cartitem));
    sessionStorage.setItem('btn', JSON.stringify(cartBtns))

    useEffect(() => {
        const storedData = JSON.parse(sessionStorage.getItem('jsonData')) || [];
        setVegetables(storedData[1]?.vegetable || []);
        setFruits(storedData[2]?.fruits || []);

        
    }, []);

    const toggleCartBtn = (productindex, data) => {
        
        setCartBtns(prevState => ({
            ...prevState,
            [productindex]: !prevState[productindex]
        }));
    // console.log(productindex);
    // console.log(Object.keys(cartitem));
    // console.log(cartBtns);
    if (!cartBtns[productindex]) {
        const cart = Object.values(cartitem)
        const updatedCart = cart.filter(item => item !== productindex);
        console.log(updatedCart)
        setCartitem(updatedCart);
        sessionStorage.setItem('cartdata', JSON.stringify(updatedCart));
    }
        // const updatedCart = {
        //     ...cartitem,
        //     [productindex]: data
        // };

        setCartitem(prevstate => ({ ...prevstate ,[productindex] : productindex ? data : data }))
         //console.log(cartitem);
        // setCartitem(updatedCart);
        
       
    };

   
    

    return (
        <div>
            <Navbar />

            <img src={vegposter} alt='veg-poster' style={{width:"100%"}} ></img>
            <div id='list'>
                {vegetables.map((data, index) => (
                   <div className='products' key={index}>
                   <div className="logo1">
                       <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "15px 5px 10px 10px", display: "inline", marginTop: '15px' }}></img>
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
                       <button className= {cartBtns[index] ? 'btn btn-success' : ' btn btn-primary' } 
                        onClick={() => toggleCartBtn(index,data)} >
                            {/* {console.log(data)} */}
                               <FontAwesomeIcon icon={faCartShopping} /> {cartBtns[index] ? "Remove from Cart" : "Add to Cart"}
                           </button>
                       </div>
                   </div>
               </div>
                ))}
            </div>


            {/* <img src={fruitposter} alt='fruit-poster' style={{width:"100%"}} ></img>
            <div id='list'>
                {fruits.map((data, index) => (
                   <div className='products' key={index}>
                   <div className="logo1">
                       <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "15px 15px 10px 10px", display: "inline", marginTop: '15px' }}></img>
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
                           <button className="btn btn-primary"> <FontAwesomeIcon icon={faCartShopping} /> Add to Cart</button>
                       </div>
                   </div>
               </div>
                ))}
            </div> */}

            <Footer />
        </div>
    );
}

export default Vegetable;







