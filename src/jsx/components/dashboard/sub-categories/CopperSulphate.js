import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CopperImage from '../../../../images/copper_sulphate.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const CopperSulphate = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>COPPER SULPHATE</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={CopperImage} alt="Copper Sulphate" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p>Copper sulphate, also known as copper(II) sulfate, is an inorganic compound with the chemical formula CuSO₄. It typically appears as a bright blue crystalline solid when hydrated (CuSO₄·5H₂O) and as a white to gray powder when anhydrous. It is highly soluble in water and forms a blue solution. Copper sulphate is widely used in agriculture as a fungicide, herbicide, and pesticide. In industry, it serves in applications such as electroplating, dyeing, and as a reagent in laboratories. It is also utilized in education for various chemical experiments. Handling copper sulphate requires care due to its toxicity and potential environmental hazards.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default CopperSulphate;
