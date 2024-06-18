import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import garlicImage from '../../../../images/garlic_powder.jpeg';
import profitRatio1 from '../../../../images/profit_1.jpg';
import profitRatio2 from '../../../../images/profit_2.jpg';
import market from '../../../../images/market.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const GarlicPowder = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);  // This will navigate to the previous page
  };

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>GARLIC POWDER</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={garlicImage} alt="Garlic Powder" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p> Garlic Powder is a Spice derived from dehydrated Garlic 
and used in Cooking For flavour enhancement.
The process of Making Garlic Powder includes drying and 
dehydrating the vegetables, then powdering it.
Used in Season spices and Seasoning of 
Food
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default GarlicPowder;
