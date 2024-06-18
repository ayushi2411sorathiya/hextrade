import React from 'react';
import WhyChoose from '../../../images/why-choose.png';
import { Link } from 'react-router-dom';
import User1 from '../../../images/user_1.jpg';
import User2 from '../../../images/user_2.jpg';
import User3 from '../../../images/user_3.jpg';
import FeaturesIcon1 from '../../../images/features_icon_1.png';
import FeaturesIcon2 from '../../../images/features_icon_2.png';
import FeaturesIcon3 from '../../../images/features_icon_3.png';
import FeaturesIcon4 from '../../../images/features_icon_4.png';
import FeaturesIcon5 from '../../../images/features_icon_5.png';

// Certifications
import Certification1 from '../../../images/certification_1.jpg';
import Certification2 from '../../../images/certification_2.jpg';
import Certification3 from '../../../images/certification_3.jpg';
import Certification4 from '../../../images/certification_4.jpg';
import Certification5 from '../../../images/certification_5.jpg';
import Certification6 from '../../../images/certification_6.jpg';
import Certification7 from '../../../images/certification_7.jpg';
import Certification8 from '../../../images/certification_8.jpg';
import Certification9 from '../../../images/certification_9.jpg';
import Certification10 from '../../../images/certification_10.jpg';


const AboutUs = () => {

    // Array of certification logos
    const certificationLogos = [
        Certification1, Certification2, Certification3,
        Certification4, Certification5, Certification6,
        Certification7, Certification8, Certification9,
        Certification10
    ];

    return (
        <div id='about_us'>
            <div className="contact-banner">
                <div className="contact-heading">
                    <h2>ABOUT US</h2>
                    <p>KNOW WHO WE ARE</p>
                </div>
            </div>

            <section className="section why-choose mt-5">
                <div className="container">
                    <div className='bg'>
                        <div className="row">
                            <div className="col-md-12 col-lg-6 mb-4 mb-lg-0 align-self-center image-container">
                                <img src={WhyChoose} alt='Why Choose' className='why-choose-image' />
                            </div>
                            <div className="col-md-12 col-lg-6 align-self-center text pl-5">
                                <div className="sub-heading about-heading">
                                    <h2 className='mb-4'>HEXTRADE OVERSEAS PVT LTD</h2>
                                </div>
                                <p>
                                    Hextrade Overseas pvt.ltd imports and exports various the products in major locations of the world. As a merchandise agent Hextrade Overseas pvt.ltd is committed towards customer satisfaction and organizational growth. We consistently put our inputs for quality product required by our customers. We believe in timely supply, customer satisfaction and continuous improvement in our quality management system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='section review gb_vadadi'>
                <div className="container">
                    <div className='row mt-5'>
                        {/* <div className='col-sm-12 text-center mb-5'> */}
                        <div className="sub-heading about-heading">
                            <h2>ABOUT US</h2>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className='row mb-5'>
                        <div className='col-md-12 col-lg-4 mb-3'>
                            <div className='review_box'>
                                <div className="d-flex align-items-center mb-2">
                                    <div style={{ height: "100px", width: "100px" }} className="rounded-circle p-2 about-user-main" >
                                        <img src={User1} className="rounded-circle" alt="user" />
                                    </div>
                                    <div className="ml-2">
                                        <h5 className="mb-0">jake Tuner</h5>
                                    </div>
                                </div>

                                <div>
                                    <p>It’s not easy standing out in this trade, but Tap Review’s funky way of collecting reviews is a real winner. My clients just tap their phones, and bam! I’ve got reviews rolling in. It’s boosted my local rep, and I’m getting more calls than ever.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-4 mb-3'>
                            <div className='review_box'>
                                <div className="d-flex align-items-center mb-2">
                                    <div style={{ height: "100px", width: "100px" }} className="rounded-circle p-2 about-user-main">
                                        <img src={User2} className="rounded-circle" alt="user" />
                                    </div>
                                    <div className="ml-2">
                                        <h5 className="mb-0">Lily Thompson</h5>
                                    </div>
                                </div>

                                <div>
                                    <p>I’m all about the glam, and Tap Review knows the score! Being a beautician, my clients’ love is my lifeline. Tap Review’s nifty trick of tapping their phones for reviews is like a magic wand. Now I’ve got a flurry of fab reviews and new faces in my chairs.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 col-lg-4 mb-3'>
                            <div className='review_box'>
                                <div className="d-flex align-items-center mb-2" >
                                    <div style={{ height: "100px", width: "100px" }} className="rounded-circle p-2 about-user-main">
                                        <img src={User3} className="rounded-circle" alt="user" />
                                    </div>
                                    <div className="ml-2">
                                        <h5 className="mb-0">Mike Jenkins</h5>
                                    </div>
                                </div>

                                <div>
                                    <p>Tap Review has turbo-charged my garage hustle! Clients tapping their phones for reviews? It’s like greased lightning! Our street cred is revving high, and our garage is humming with activity. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================== */}
            <section className="section features">
                <div className="container">
                    <div className='row mb-5 mt-5'>
                        <div className='col-sm-12 text-center'>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-sm-12 col-md-6 col-lg-4 features_box">
                            <h2>Features Tailored for Hextrade Success</h2>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 features_box">
                            <img src={FeaturesIcon1} alt='' className='m-0' />
                            <h5>Best Quality</h5>
                            <p>We ensure the highest standards in every service we offer, from packaging to transportation.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 features_box">
                            <img src={FeaturesIcon3} alt='' className='m-0' />
                            <h5>Digital Storefront</h5>
                            <p>Showcase your products and services globally with our seamless online platform.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 features_box">
                            <img src={FeaturesIcon4} alt='' className='m-0' />
                            <h5>Effective Communication</h5>
                            <p>Keep track of your shipments and communicate with our support team through a dedicated portal.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 features_box">
                            <img src={FeaturesIcon5} alt='' className='m-0' />
                            <h5>Team Empowerment</h5>
                            <p>Equip your team with the tools and support they need to manage import/export operations efficiently.</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 features_box">
                            <img src={FeaturesIcon2} alt='' className='m-0' />
                            <h5>Best Rates</h5>
                            <p>Benefit from competitive pricing and flexible plans tailored to your business needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CERTIFICATION */}
            <section className="section certifications">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sub-heading about-heading">
                                <h2 className='mb-4'>AFFILIATIONS & CERTIFICATIONS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <marquee behavior="alternate" direction="left">
                                <div className="certification-container">
                                    {certificationLogos.map((logo, index) => (
                                        <img key={index} src={logo} alt={`Certification ${index + 1}`} />
                                    ))}
                                </div>
                            </marquee>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AboutUs