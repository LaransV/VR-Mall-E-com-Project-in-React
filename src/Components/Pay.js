import React, { useState , useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Pay() {
    const [payitem, setPayitem] = useState(Object.values(sessionStorage.getItem('cartdata')) || [])
    console.log(sessionStorage.getItem('cartdata'));

    useEffect(() => { 
        //setBtnindex(JSON.parse(sessionStorage.getItem('btn')))
       const data = [JSON.parse(sessionStorage.getItem('cartdata'))];
       setPayitem(Object.values(data[0]));
       console.log(data[0]);
       //console.log(cartData);
       // if (cartData && cartData.cartItems) {
       //     setItem(cartData.cartItems);
       // }
   }, []);
  return (
    <div>
        <Navbar/>


    <h1>Hii</h1>
    <div>
            {payitem.map((da, index) => (
                    <div class="cart-box">
                       <img src={da.image} alt={da.name} style={{width:'50px', height:'50px'}} class="cart-img"/> 
                       <div class="detail-box">
                            <div class="cart-fod-title">{da.name}</div>
                            <div class="price-box">
                                <div class="cart-price">{da.price}</div>
                               
                            </div>
                            <input type="number" value="1" class="cart-quantity"/>
                       </div>
                       <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    ))}
        </div>

        <Footer/>
    </div>
  )
}

export default Pay