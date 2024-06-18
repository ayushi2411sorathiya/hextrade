import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LaminatedSheetImage from '../../../../images/sheet.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const LaminatedSheets = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>LAMINATED SHEETS</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={LaminatedSheetImage} alt="Garlic Powder" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p> Laminated sheets are thin layers of material, typically paper, plastic, or metal, that have been bonded together with an adhesive or through heat and pressure. This process enhances the durability, strength, and appearance of the base material, making it resistant to moisture, chemicals, and physical wear. Commonly used for protecting documents, creating decorative surfaces, and in construction materials, laminated sheets can be clear or have printed designs. They offer excellent stability, are easy to clean, and can be used in various applications, including packaging, signage, and flooring. Their versatility and protective qualities make them an essential material in many industries.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LaminatedSheets;
