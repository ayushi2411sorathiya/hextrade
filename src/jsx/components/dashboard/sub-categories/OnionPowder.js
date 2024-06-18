import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import onionImage from '../../../../images/onion_powder.avif';
import profitRatio1 from '../../../../images/profit_1.jpg';
import profitRatio2 from '../../../../images/profit_2.jpg';
import market from '../../../../images/market.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const OnionPowder = () => {
  const [visibleItems, setVisibleItems] = useState(9);
  const [exportItems, setExportItems] = useState(9);
  const demandList = [
    { country: 'Germany', shipments: 9493 },
    { country: 'USA', shipments: 9102 },
    { country: 'Netherlands', shipments: 8450 },
    { country: 'France', shipments: 5523 },
    { country: 'Belgium', shipments: 5521 },
    { country: 'Poland', shipments: 5223 },
    { country: 'UK', shipments: 5197 },
    { country: 'Spain', shipments: 4674 },
    { country: 'Czech Republic', shipments: 4334 },
    { country: 'Sweden', shipments: 4298 },
    { country: 'Hungary', shipments: 4096 },
    { country: 'Denmark', shipments: 4082 },
    { country: 'Romania', shipments: 4028 },
    { country: 'Italy', shipments: 3807 },
    { country: 'Austria', shipments: 3489 },
    { country: 'Greece', shipments: 3401 },
    { country: 'Indonesia', shipments: 3275 },
    { country: 'Estonia', shipments: 3193 },
    { country: 'Slovakia', shipments: 3066 },
    { country: 'Croatia', shipments: 2936 },
    { country: 'Ireland', shipments: 2935 },
    { country: 'Slovenia', shipments: 2923 },
    { country: 'Finland', shipments: 2830 },
    { country: 'Lithuania', shipments: 2666 },
    { country: 'Latvia', shipments: 2631 },
    { country: 'Bulgaria', shipments: 2442 },
    { country: 'Portugal', shipments: 2392 },
    { country: 'Brazil', shipments: 2147 },
    { country: 'South Africa', shipments: 1838 },
    { country: 'Luxembourg', shipments: 1835 },
    { country: 'Cyprus', shipments: 1511 },
    { country: 'Japan', shipments: 1506 },
    { country: 'Philippines', shipments: 1442 },
    { country: 'Canada', shipments: 1423 },
    { country: 'Switzerland', shipments: 1360 },
    { country: 'Malta', shipments: 1285 },
    { country: 'Norway', shipments: 1274 },
    { country: 'Russia', shipments: 1204 },
    { country: 'Vietnam', shipments: 1193 },
    { country: 'UAE', shipments: 1095 },
    { country: 'Turkey', shipments: 1034 },
    { country: 'Singapore', shipments: 972 },
    { country: 'Ukraine', shipments: 864 },
    { country: 'Australia', shipments: 856 },
    { country: 'Israel', shipments: 794 },
    { country: 'Serbia and Montenegro', shipments: 740 },
    { country: 'Iceland', shipments: 716 },
    { country: 'Mexico', shipments: 665 },
    { country: 'Peru', shipments: 608 },
    { country: 'Bangladesh', shipments: 581 },
    { country: 'Malaysia', shipments: 579 },
    { country: 'India', shipments: 536 },
    { country: 'Bosnia and Herzegovina', shipments: 523 },
    { country: 'Nigeria', shipments: 514 },
    { country: 'Saudi Arabia', shipments: 500 },
    { country: 'Guatemala', shipments: 491 }
  ];

  const exportList = [
    { country: 'India', shipments: 25824 },
    { country: 'Germany', shipments: 13445 },
    { country: 'Netherlands', shipments: 10401 },
    { country: 'France', shipments: 8894 },
    { country: 'Spain', shipments: 8201 },
    { country: 'Poland', shipments: 7705 },
    { country: 'China', shipments: 7136 },
    { country: 'Austria', shipments: 6613 },
    { country: 'USA', shipments: 6433 },
    { country: 'Italy', shipments: 5494 },
    { country: 'Belgium', shipments: 4905 },
    { country: 'Hungary', shipments: 4674 },
    { country: 'Denmark', shipments: 4463 },
    { country: 'UK', shipments: 3746 },
    { country: 'Romania', shipments: 3271 },
    { country: 'Czech Republic', shipments: 3116 },
    { country: 'Sweden', shipments: 2891 },
    { country: 'Latvia', shipments: 2426 },
    { country: 'Egypt', shipments: 2356 },
    { country: 'Estonia', shipments: 1957 },
    { country: 'Bulgaria', shipments: 1753 },
    { country: 'Greece', shipments: 1737 },
    { country: 'Portugal', shipments: 1688 },
    { country: 'Slovakia', shipments: 1607 },
    { country: 'Turkey', shipments: 1513 },
    { country: 'Lithuania', shipments: 1409 },
    { country: 'Croatia', shipments: 1379 },
    { country: 'Slovenia', shipments: 1107 },
    { country: 'South Korea', shipments: 1000 },
    { country: 'Luxembourg', shipments: 996 },
    { country: 'Vietnam', shipments: 907 },
    { country: 'Finland', shipments: 890 },
    { country: 'Ireland', shipments: 872 },
    { country: 'Thailand', shipments: 860 },
    { country: 'Japan', shipments: 605 },
    { country: 'Serbia and Montenegro', shipments: 550 },
    { country: 'Switzerland', shipments: 502 },
    { country: 'Iran', shipments: 451 },
    { country: 'Syria', shipments: 431 },
    { country: 'Singapore', shipments: 368 },
    { country: 'Nigeria', shipments: 362 },
    { country: 'Malaysia', shipments: 354 },
    { country: 'Lebanon', shipments: 312 },
    { country: 'Pakistan', shipments: 306 },
    { country: 'Indonesia', shipments: 278 },
    { country: 'Peru', shipments: 270 },
    { country: 'Mexico', shipments: 262 },
    { country: 'Morocco', shipments: 252 },
    { country: 'Uzbekistan', shipments: 235 },
    { country: 'Russia', shipments: 212 },
    { country: 'Hong Kong', shipments: 205 },
    { country: 'Norway', shipments: 202 },
    { country: 'Israel', shipments: 194 }
  ];
  

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 9);
  };
  const handleExportShowMore = () => {
    setExportItems(prevVisibleItems => prevVisibleItems + 9);
  };

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);  // This will navigate to the previous page
  };

  return (
    <div className="container onion-powder-section py-5">
      <div className="row mb-4">
        <div className="sub-heading about-heading">
          <h2>ONION POWDER</h2>
        </div>
      </div>

      <section className="product-info-section mb-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={onionImage} alt="Onion Powder" className="img-fluid onion-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Product Information</h2>
            </div>
            <p>Onion powder is dehydrated, ground onion that is commonly used as a seasoning. It is a common ingredient in seasoned salt and spice mixes. Onion is dried and converted into powder form, used in season spices and seasoning of food.</p>
            <button onClick={handleBackClick} className="back-btn mt-3">Back</button>
          </div>
        </div>
      </section>

      {/* <section className="profit-ratio-section pb-5">
        <div className="row align-items-center">

          <div className="col-md-6" data-aos="fade-left">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Profit Ratio</h2>
            </div>
            <p>Buying Price: ₹80 – 120 per KG<br />
              Selling Price: ₹140 – 150 per KG<br />
              1 Container is filled with 25 Ton of Onion Powder or ₹30 lakh of Buying Price + ₹1 lakh of Packing.<br />
              1 Container is sold at ₹35 lakh.
            </p>
          </div>

          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={profitRatio1} alt="Profit Ratio" className="img-fluid profit-img" />
          </div>
        </div>
      </section>

      <section className="market-docs-section mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
            data-aos-duration="1500">
            <img src={market} alt="Market" className="img-fluid market-img" />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>World Market and Documents</h2>
            </div>
            <p>World Market of Onion Powder is $650 Million in the Year 2023. Total shipments exported last year globally is 163436.</p>
            <ul>
              <li>RCMC</li>
              <li>Commercial Invoice cum Packing List</li>
              <li>IEC Certificate</li>
              <li>GST Certificate</li>
              <li>AD Port</li>
              <li>Packing List</li>
              <li>MSD Certificate</li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* <section className="packaging-section mt-5" data-aos="fade-up">
        <div className="row align-items-center">
    
          <div className="col-md-6">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Packaging</h2>
            </div>
            <p>Exported by multiple ways like:</p>
            <ul>
              <li>By making sachets</li>
              <li>By packing it in plastic sealed bag</li>
              <li>By packing it in box</li>
              <li>By packing it in jar</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="demand-section my-5" data-aos="fade-up">
        <div className="row">
          <div className="col">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Demand</h2>
            </div>
            <p>Major importing countries and shipment numbers:</p>
            <ul className="countries-list">
              {demandList.slice(0, visibleItems).map((item, index) => (
                <li key={index}>{item.country}: {item.shipments}</li>
              ))}
              {visibleItems < demandList.length && (
                <li className='fw-bold' style={{ color: "#663399", cursor: "pointer" }} onClick={handleShowMore}>Show More ➡️</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="demand-section my-5" data-aos="fade-up">
        <div className="row">
          <div className="col">
            <div className="sub-heading about-heading">
              <h2 className='fs-3'>Exporters</h2>
            </div>
            <p>Major exporting countries and shipment numbers:</p>
            <ul className="countries-list">
              {exportList.slice(0, exportItems).map((item, index) => (
                <li key={index}>{item.country}: {item.shipments}</li>
              ))}
              {exportItems < exportList.length && (
                <li className='fw-bold' style={{ color: "#663399", cursor: "pointer" }} onClick={handleExportShowMore}>Show More ➡️</li>
              )}
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default OnionPowder;
