import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHandPointRight } from "react-icons/fa";

const BuildingMaterials = () => {
  return (
    <div id='food_products'>
      <div className="contact-banner">
        <div className="contact-heading">
          <h2>BUILDING MATERIALS</h2>
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
            <Link to="/products/laminated-sheets">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b> Laminated Sheets</b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
          <Link to="/products/wooden-door">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b>Wooden Doors</b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
          <Link to="/products/tiles">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b>Tiles</b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
          <Link to="/products/basin">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b>Basin</b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
          <Link to="/products/toilets">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b>Toilets </b></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12 col-md-6 mt-4">
          <Link to="/products/PVCDoors">
              <div className={'product-box d-flex align-items-center shadow rounded-3 py-1 px-3'} >
                <div className="text-center pe-3 mt-1">
                  <FaHandPointRight className='product-icon fs-4' />
                </div>
                <div className="product-box-content">
                  <p className='mt-4 fs-5'><b>PVC Doors</b></p>
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

export default BuildingMaterials