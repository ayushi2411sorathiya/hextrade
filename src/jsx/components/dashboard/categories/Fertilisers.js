import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHandPointRight } from "react-icons/fa";

const Fertilisers = () => {
  return (
    <div id='food_products'>
      <div className="contact-banner">
        <div className="contact-heading">
          <h2>FERTILISERS</h2>
        </div>
      </div>

      <div className="container my-5">

        <div className="row">
          <div className="sub-heading about-heading">
            <h2>Categories</h2>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
            <Link to="/products/zinc-sulphate">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b>Zinc Sulphate Monohydrate</b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
          <Link to="/products/zinc-heptahydrate">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b>Zinc Sulphate Heptahydrate</b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
          <Link to="/products/copper-sulphate">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b> Cooper Sulphate</b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
          <Link to="/products/cow-dung">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b> Cow Dung</b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
             </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Fertilisers