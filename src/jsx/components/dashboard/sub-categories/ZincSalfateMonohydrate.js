import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ZincImage from '../../../../images/zink_salfet_monohydrate.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const ZincSalfateMonohydrate = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>ZINC SULPHATE MONOHYDRATE</h2>
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
            <p>Zinc Sulphate Monohydrate (ZnSO₄·H₂O) is an inorganic compound commonly used as a dietary supplement, fertilizer, and in various industrial applications. It appears as a white, crystalline powder or granules, which are soluble in water but insoluble in alcohol. This compound provides a source of zinc, an essential trace element vital for numerous biological functions, including enzyme activity, protein synthesis, and immune system support. In agriculture, it corrects zinc deficiencies in crops, enhancing growth and yield. It also has applications in water treatment, manufacturing, and as a mordant in dyeing. Handling requires caution due to its potential to cause skin and eye irritation.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default ZincSalfateMonohydrate;
