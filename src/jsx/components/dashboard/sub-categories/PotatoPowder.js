import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import potatoImage from '../../../../images/potato_powder.jpeg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const PotatoPowder = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>POTATO POWDER</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={potatoImage} alt="Garlic Powder" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p> Dehydrated Potato is the dried potato slices or shreds that are dried in a dehydrator set at almost 125 degrees for about 8-10 hours until they turn dry and crisp. They can also be dried in the oven on a lined sheet pan.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default PotatoPowder;
