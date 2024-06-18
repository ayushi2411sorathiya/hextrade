import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CowDungImage from '../../../../images/cow-dungs.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const CowDungs = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>COW DUNG</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={CowDungImage} alt="Cow dung" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p>Cow dung, also known as cow manure, is the waste product of bovine animals. It is composed of digested grass and grain, which pass through the cow's digestive system and are expelled as feces. This substance is rich in organic matter and nutrients such as nitrogen, phosphorus, and potassium, making it an excellent natural fertilizer for agricultural purposes. Cow dung is often used in composting, where it helps break down other organic materials. Additionally, it has traditional uses in some cultures for fuel, building material, and even as a disinfectant. Its use in biogas production is also notable, providing a renewable source of energy.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default CowDungs;
