import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { MDBDataTable } from 'mdbreact';
import './Categorys/Common.css';
import logo from '../image/logo.png';
import { useNavigate } from 'react-router-dom';

function Pay() {
  const navigate = useNavigate();
  const [payitem, setPayitem] = useState(Object.values(sessionStorage.getItem('BuyProduct')) || []);
  const [data, setData] = useState({ columns: [], rows: [] });
  const [value1, setValue1] = useState(null);
  console.log(value1);

  const getname = sessionStorage.getItem('name').toUpperCase();

  useEffect(() => {
    const storedCartData = JSON.parse(sessionStorage.getItem('BuyProduct'));
    if (storedCartData) {
      setPayitem(Object.values(storedCartData)); // Corrected function name here
    }
  }, []);


  useEffect(() => {
    const columns = [
      { label: 'Product Image', field: 'image', sort: 'asc', width: 30 },
      { label: 'Product Name', field: 'name', sort: 'asc', width: 30 },
      { label: 'Product Price', field: 'price', sort: 'asc', width: 30 },
      { label: 'Product Quantity', field: 'quantity', sort: 'asc', width: 30 },
      { label: 'Total Price', field: 'total_price', sort: 'asc', width: 30 },
      { label: 'Buy Now', field: 'buy_now', sort: 'asc', width: 30 }
    ];

    const rows = payitem.map(item => ({
      image: <img src={item.image} alt={item.name} style={{ width: '50px', height: 'auto' }} />,
      name: item.name,
      price: ` Price : ₹ ${item.price}`,
      quantity: <input style={{ width: "100px" }} type='number' value={value1}
        onChange={(e) => {
          const val = e.target.value;
          if (!isNaN(val) && val >= 0) {
            setValue1(val);
          }
        }} />,
      total_price: `Total Price : ₹ ${(item.price * (item.quantity || value1)).toFixed(2)}`,
      buy_now: <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Buy Now</button>
      // Assuming item.id is available for handling buy now action
    }));

    setData({ columns, rows });
  }, [payitem, value1]);



  let amt = 0;
  if (value1 && payitem.length > 0) {
    amt = value1 * payitem[0].price;
  }

  const PayAmount = () => {
    navigate('/pay1')
  }
  return (

    <>

      <div>
        <Navbar />
        <h1>Checkout</h1>


        <div>


          <MDBDataTable
            className="customTableStyle"
            striped
            bordered
            hover
            data={data} />

          <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-md">
              <div class="modal-content">


                <div class="modal-header">
                  <div className="logo1">
                    <img src={logo} className="rounded-pill" alt="logo" style={{ width: "45px", height: "37px", margin: "15px 5px 10px 10px", display: "inline", marginTop: '15px' }}></img>
                    <h5 style={{ color: 'black', marginTop: '20px' }}>VR MALL</h5>
                  </div>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>


                <div class="modal-body">
                  <h6>Hi Our Customer {getname} ,Your Purchase Total Amount is ₹ {amt}.</h6>
                  <button type="button" class="btn btn-primary mt-3" data-bs-dismiss="modal" onClick={PayAmount}>Pay Now</button>
                </div>


                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>


    </>
  );
}

export default Pay;
