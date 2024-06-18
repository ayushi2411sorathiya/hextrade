import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toiletImage from '../../../../images/toilet.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const Toilets  = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>TOILETES</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={toiletImage} alt="Garlic Powder" className="img-fluid onion-img" style={{height:"500px"}} />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p> 
            Toilets are sanitary fixtures designed for the disposal of human waste. They typically consist of a bowl and a seat, connected to a plumbing system for flushing waste into a sewer or septic tank. Modern toilets come in various designs, including one-piece and two-piece models, wall-mounted units, and smart toilets with advanced features like bidets, heated seats, and automatic flushing. Toilets are usually made of ceramic or porcelain for durability and easy cleaning. They are essential fixtures in residential, commercial, and public restrooms, designed to provide hygiene and comfort while conserving water through efficient flush mechanisms.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Toilets;
