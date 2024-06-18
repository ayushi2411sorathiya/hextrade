import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ZincImage from '../../../../images/zinc_sulphate_heptahydrate.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const ZincSulphateHeptahydrate = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>ZINC SULPHATE HEPTAHYDRATE</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={ZincImage} alt="Zinc Sulphate" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p>Zinc Sulphate Heptahydrate (ZnSO₄·7H₂O) is a colorless crystalline compound that readily dissolves in water. It is widely used in various industries, including agriculture, medicine, and manufacturing. In agriculture, it serves as a vital micronutrient for plant growth, addressing zinc deficiencies in soils. Medically, it is utilized as a dietary supplement to prevent and treat zinc deficiency, essential for immune function and enzyme activity. Additionally, it is used in the production of rayon, as a mordant in dyeing, and in water purification processes. Zinc Sulphate Heptahydrate is stable under normal conditions but should be stored in a cool, dry place to prevent it from losing its water of crystallization.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ZincSulphateHeptahydrate;
