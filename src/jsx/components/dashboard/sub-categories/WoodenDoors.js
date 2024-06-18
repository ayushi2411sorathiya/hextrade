import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WoodenDoorImage from '../../../../images/wooden-door.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const WoodenDoors = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>WOODEN DOORS</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={WoodenDoorImage} alt="Garlic Powder" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p> 
            Wooden doors are crafted from natural timber, offering a timeless and classic appeal. Renowned for their durability and strength, they provide excellent insulation against sound and temperature variations. Available in a variety of wood types like oak, mahogany, and pine, they can be tailored to fit both traditional and modern decor. Wooden doors can be solid or paneled, and often feature intricate carvings or smooth finishes, allowing for customization in terms of color and style. They require regular maintenance to protect against moisture and pests but remain a popular choice for their aesthetic versatility and long-lasting quality.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default WoodenDoors;
