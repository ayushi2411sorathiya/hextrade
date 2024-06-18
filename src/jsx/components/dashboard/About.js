import React from 'react';
import aboutImage from '../../../images/about.png'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-main">
            <section id="about" className="about py-5">
                <div className="container">
                    <div className="row about-main align-items-center">
                        <div className="col-12 col-lg-6 " data-aos="flip-left" data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div className="about-image" style={{ backgroundImage: `url(${aboutImage})` }}></div>
                        </div>
                        <div className="col-12 col-lg-6" data-aos="zoom-in-up" data-aos-easing="linear"
                            data-aos-duration="1500" >
                            <div className="sub-heading about-heading">
                               <h2>ABOUT US</h2>
                            </div>
                            <div className="about-content">
                                <p>
                                    Hextrade imports and exports various the products in major locations of the world. As a merchandise agent, Hextrade is committed towards customer satisfaction and organizational growth. We consistently put our inputs for quality product required by our customers. We believe in timely supply, customer satisfaction and continuous improvement in our quality management system. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About