import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import logo from '../image/logo.png'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();

  const[item, setItem] = useState(Object.values(sessionStorage.getItem('cartdata')) || []);
  const[firstdata, setFirstdata] = useState([])
  //const [btnindex , setBtnindex] = useState('')
  
  //console.log(btnindex);

  useEffect(() => { 
     //setBtnindex(JSON.parse(sessionStorage.getItem('btn')))
    const data = [JSON.parse(sessionStorage.getItem('cartdata'))];
    setItem(Object.values(data[0]));
    //console.log(cartData);
    // if (cartData && cartData.cartItems) {
    //     setItem(cartData.cartItems);
    // }
}, []);

const Navi = () =>{
    navigate('/pay')
}
  return (
    <div>
            <Navbar/>

            <h1>Cart Page</h1>
            <div id='list'>
                {item.map((data, index) => (
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
                       <button className="btn btn-primary" onClick={Navi}>
                               Buy Now
                           </button>
                       </div>
                   </div>
               </div>
                ))}
            </div>
            <Footer/>
    </div>
  )
}

export default Cart