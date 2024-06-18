import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BasinImage from '../../../../images/basin.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const Basin = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>BASIN</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={BasinImage} alt="Basin" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p> 
            A basin, also known as a sink or washbasin, is a bowl-shaped fixture typically found in bathrooms and kitchens for washing hands, dishes, or other items. It is usually made of ceramic, porcelain, stainless steel, or composite materials. Basins come in various shapes and sizes, including round, oval, rectangular, or square, to suit different preferences and space constraints. They can be mounted above the counter (vessel style), under the counter (undermount), or integrated into the counter (drop-in). Basins often include a drain and faucet for water supply and drainage, serving both functional and aesthetic purposes in home and commercial settings.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Basin;
