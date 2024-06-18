import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import eggImage from '../../../../images/egg_powder.jpeg';
import profitRatio1 from '../../../../images/profit_1.jpg';
import profitRatio2 from '../../../../images/profit_2.jpg';
import market from '../../../../images/market.jpg';
import { useNavigate } from 'react-router-dom';

AOS.init();

const EggPowder = () => {
    const [visibleItems, setVisibleItems] = useState(9);
    const [exportItems, setExportItems] = useState(9);
    const demandList = [
        { country: 'Netherlands', shipments: 5254 },
        { country: 'Vietnam', shipments: 5029 },
        { country: 'Japan', shipments: 3129 },
        { country: 'Germany', shipments: 2774 },
        { country: 'Indonesia', shipments: 2460 },
        { country: 'France', shipments: 2376 },
        { country: 'Italy', shipments: 2072 },
        { country: 'UK', shipments: 1883 },
        { country: 'Czech Republic', shipments: 1785 },
        { country: 'Spain', shipments: 1717 },
        { country: 'Australia', shipments: 1699 },
        { country: 'Belgium', shipments: 1421 },
        { country: 'Philippines', shipments: 1399 },
        { country: 'Slovakia', shipments: 1304 },
        { country: 'Romania', shipments: 1259 },
        { country: 'Ireland', shipments: 1174 },
        { country: 'Poland', shipments: 1112 },
        { country: 'Greece', shipments: 1111 },
        { country: 'USA', shipments: 1062 },
        { country: 'Sweden', shipments: 1062 },
        { country: 'Luxembourg', shipments: 1000 },
        { country: 'Hungary', shipments: 972 },
        { country: 'Portugal', shipments: 957 },
        { country: 'Thailand', shipments: 906 },
        { country: 'Croatia', shipments: 865 },
        { country: 'Slovenia', shipments: 849 },
        { country: 'Switzerland', shipments: 835 },
        { country: 'Russia', shipments: 829 },
        { country: 'Denmark', shipments: 817 },
        { country: 'Estonia', shipments: 767 },
        { country: 'Lithuania', shipments: 739 },
        { country: 'UAE', shipments: 711 },
        { country: 'Latvia', shipments: 655 },
        { country: 'Finland', shipments: 652 },
        { country: 'Malaysia', shipments: 616 },
        { country: 'Saudi Arabia', shipments: 598 },
        { country: 'Cyprus', shipments: 526 },
        { country: 'South Korea', shipments: 522 },
        { country: 'Bulgaria', shipments: 518 },
        { country: 'Taiwan', shipments: 495 },
        { country: 'Malta', shipments: 415 },
        { country: 'Australia', shipments: 411 },
        { country: 'Turkey', shipments: 411 },
        { country: 'Norway', shipments: 337 },
        { country: 'Singapore', shipments: 299 },
        { country: 'Ukraine', shipments: 298 },
        { country: 'Pakistan', shipments: 286 },
        { country: 'Nigeria', shipments: 272 },
        { country: 'Israel', shipments: 266 },
        { country: 'Sri Lanka', shipments: 239 },
        { country: 'India', shipments: 235 },
        { country: 'Hong Kong', shipments: 191 },
        { country: 'China', shipments: 186 },
        { country: 'New Zealand', shipments: 174 },
        { country: 'South Africa', shipments: 153 }
      ];
      

      const exportList = [
        { country: 'India', shipments: 13214 },
        { country: 'Netherlands', shipments: 6833 },
        { country: 'Italy', shipments: 6131 },
        { country: 'Germany', shipments: 5917 },
        { country: 'France', shipments: 4721 },
        { country: 'Belgium', shipments: 3922 },
        { country: 'Poland', shipments: 2598 },
        { country: 'Denmark', shipments: 2333 },
        { country: 'Austria', shipments: 1772 },
        { country: 'Spain', shipments: 1696 },
        { country: 'Latvia', shipments: 1318 },
        { country: 'Sweden', shipments: 1284 },
        { country: 'UK', shipments: 1173 },
        { country: 'Vietnam', shipments: 982 },
        { country: 'USA', shipments: 799 },
        { country: 'Hungary', shipments: 696 },
        { country: 'China', shipments: 598 },
        { country: 'Lithuania', shipments: 598 },
        { country: 'Portugal', shipments: 578 },
        { country: 'Slovakia', shipments: 507 },
        { country: 'Estonia', shipments: 453 },
        { country: 'Czech Republic', shipments: 438 },
        { country: 'Luxembourg', shipments: 364 },
        { country: 'Ireland', shipments: 341 },
        { country: 'Greece', shipments: 338 },
        { country: 'Japan', shipments: 309 },
        { country: 'Taiwan', shipments: 306 },
        { country: 'Finland', shipments: 301 },
        { country: 'Turkey', shipments: 265 },
        { country: 'Croatia', shipments: 257 },
        { country: 'Ukraine', shipments: 242 },
        { country: 'Argentina', shipments: 231 },
        { country: 'Romania', shipments: 198 },
        { country: 'Thailand', shipments: 192 },
        { country: 'Slovenia', shipments: 182 },
        { country: 'Brazil', shipments: 178 },
        { country: 'Bulgaria', shipments: 169 },
        { country: 'Switzerland', shipments: 153 },
        { country: 'Malaysia', shipments: 149 },
        { country: 'Indonesia', shipments: 148 },
        { country: 'Singapore', shipments: 121 },
        { country: 'European Union', shipments: 100 },
        { country: 'Philippines', shipments: 82 },
        { country: 'South Korea', shipments: 80 },
        { country: 'Norway', shipments: 76 },
        { country: 'Cyprus', shipments: 70 },
        { country: 'Malta', shipments: 70 },
        { country: 'New Zealand', shipments: 55 },
        { country: 'Sri Lanka', shipments: 40 },
        { country: 'Canada', shipments: 30 },
        { country: 'UAE', shipments: 29 },
        { country: 'South Africa', shipments: 20 },
        { country: 'Australia', shipments: 15 }
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
                    <h2>EGG POWDER</h2>
                </div>
            </div>

            <section className="product-info-section mb-4">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0" data-aos="zoom-in-up" data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={eggImage} alt="Onion Powder" className="img-fluid onion-img" />
                    </div>
                    <div className="col-md-6" data-aos="fade-right">
                        <div className="sub-heading about-heading">
                            <h2 className='fs-3'>Product Information</h2>
                        </div>
                        <p>Egg Powder is a fully dehydrated egg. Most Powdered Eggs are made using spray drying in the same way powdered milk is made. Used in confectionery, bakery companies
                            and meat products processors.</p>
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
                        <h5>Price :</h5>
                        <p>Buying Price: 400 – 600 per KG<br />
                            Selling Price: 700 – 800 per KG<br />
                            Profit: 100 – 400 per KG<br />
                        </p>
                        <h5>Government Incentives :</h5>
                        <p>DBK: 0.15 %<br />
                            IES: 0.3 %<br />
                            RODTEP: 0.5 %<br />
                            GST: 0.5 %<br />
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
                        <p>WWorld Market of Onion Powder is $ 1.95 Billion in the Year
                            2023.
                            Total Shipments Exported last year Globally is 64212.</p>
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

export default EggPowder;
