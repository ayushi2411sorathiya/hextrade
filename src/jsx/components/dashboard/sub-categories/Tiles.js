import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TilesImage from '../../../../images/tiles.png';
import { useNavigate } from 'react-router-dom';

AOS.init();

const Tiles = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>TILES</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={TilesImage} alt="Garlic Powder" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p> 
            Wall tiles are flat, thin, and often rectangular pieces of ceramic, porcelain, glass, or stone used to cover walls for both functional and decorative purposes. They provide a durable, water-resistant surface, making them ideal for kitchens, bathrooms, and other high-moisture areas. Available in various sizes, colors, patterns, and textures, wall tiles can enhance the aesthetic appeal of a space. They are typically installed using adhesive and grout, offering easy maintenance and cleaning. Wall tiles can be used to create stunning backsplashes, accent walls, or full wall coverings, adding elegance and style to any interior design.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Tiles;
