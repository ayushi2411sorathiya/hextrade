import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import doorsImage from '../../../../images/pvc_doors.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const PVCDoors  = () => {

    const navigate = useNavigate
    ();

    const handleBackClick = () => {
      navigate(-1);  // This will navigate to the previous page
    };
  

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>PVC DOORS</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={doorsImage} alt="Garlic Powder" className="img-fluid onion-img" style={{height:"500px"}} />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p> 
            PVC doors, made from polyvinyl chloride, are durable, lightweight, and cost-effective alternatives to traditional wooden or metal doors. They offer excellent resistance to moisture, making them ideal for bathrooms, kitchens, and other areas prone to humidity. PVC doors come in various styles, colors, and finishes, including wood grain patterns, to complement different interior designs. They are easy to maintain, requiring minimal cleaning and upkeep, and provide good insulation against noise and temperature changes. Additionally, PVC doors are termite-resistant and do not warp or crack, ensuring long-lasting performance in both residential and commercial settings.
            </p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>


    </div>
  );
};

export default PVCDoors;
