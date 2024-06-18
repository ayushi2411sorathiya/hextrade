// import React from 'react';
// import { FaTram } from "react-icons/fa";
// import { IoMdAirplane } from "react-icons/io";
// import { IoMdBoat } from "react-icons/io";
// import { IoCalendarClearSharp, IoPersonAddSharp } from 'react-icons/io5';
// import { MdHome } from 'react-icons/md';

// const Services = () => {
//     return (
//         <div id='services'>
//             <div className="contact-banner">
//                 <div className="contact-heading">
//                     <h2>SERVICES</h2>
//                 </div>
//             </div>

//             <div className="container">

//                 <div className="row">
//                     <div className="col-12">
//                         <div className="sub-heading about-heading">
//                             <h2>SERVICES WE PROVIDE</h2>
//                             <p>Hextrade overseas pvt.ltd provides integrated, flexible logistics solutions that address the unique, diverse needs of our customers.</p>
//                             <p>Our end-to-end supply chain management capabilities include seafreight, airfreight, rail, road, custom clearance and door to door courier.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row mb-5">
//                     <div className="col-12 col-md-6 col-lg-4 mt-4">
//                         <div className="services-box shadow rounded-3 py-5 px-5">
//                             <div className=" text-center">
//                                 <FaTram className='service-icon' />
//                             </div>
//                             <div className="services-box-content">
//                                 <p className='text-center mt-4 fs-6'><b>TOTAL LOGISTIC SOLUTION</b></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12 col-md-6 col-lg-4 mt-4">
//                         <div className="services-box shadow rounded-3 py-5 px-5">
//                             <div className=" text-center">
//                                 <IoMdAirplane  className='service-icon' />
//                             </div>
//                             <div className="services-box-content">
//                                 <p className='text-center mt-4 fs-6'><b>AIR DELIVERY</b></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12 col-md-6 col-lg-4 mt-4">
//                         <div className="services-box shadow rounded-3 py-5 px-5">
//                             <div className=" text-center">
//                                 <IoMdBoat className='service-icon' />
//                             </div>
//                             <div className="services-box-content">
//                                 <p className='text-center mt-4 fs-6'><b>SEA DELIVERY</b></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12 col-md-6 col-lg-4 mt-4">
//                         <div className="services-box shadow rounded-3 py-5 px-5">
//                             <div className=" text-center">
//                                 <IoCalendarClearSharp className='service-icon' />
//                             </div>
//                             <div className="services-box-content">
//                                 <p className='text-center mt-4 fs-6'><b>CLEARING AND FORWARDING</b></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12 col-md-6 col-lg-4 mt-4">
//                         <div className="services-box shadow rounded-3 py-5 px-5">
//                             <div className=" text-center">
//                                 <IoPersonAddSharp className='service-icon' />
//                             </div>
//                             <div className="services-box-content">
//                                 <p className='text-center mt-4 fs-6'><b>EXPORT-IMPORT CONSULTANT</b></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12 col-md-6 col-lg-4 mt-4">
//                         <div className="services-box shadow rounded-3 py-5 px-5">
//                             <div className=" text-center">
//                                 <MdHome className='service-icon' />
//                             </div>
//                             <div className="services-box-content">
//                                 <p className='text-center mt-4 fs-6'><b>DOOR TO DOOR COURIER</b></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Services


import React, { useState } from 'react';
import { FaTram } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { IoMdBoat } from "react-icons/io";
import { IoCalendarClearSharp, IoPersonAddSharp } from 'react-icons/io5';
import { MdHome } from 'react-icons/md';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleClick = (serviceName) => {
        setSelectedService(serviceName === selectedService ? null : serviceName);
    };

    const getServiceDescription = (serviceName) => {
        switch (serviceName) {
            case 'TOTAL LOGISTIC SOLUTION':
                return 'We believe in going the extra mile. Tie-ups with local vehicle partners smoothen the process of transporting goods across cities.';
            case 'AIR DELIVERY':
                return 'We provide affordable solutions for express, consolidated and regular cargo, We provide our clients with time-saving economical solutions.';
            case 'SEA DELIVERY':
                return 'With a well-connected network, we are always ready to attend to your Sea freight requirements with our customized solutions.';
            case 'CLEARING AND FORWARDING':
                return 'Our experience supported by our teams attention to detail ensures that customs and clearance is a hassle-free process for our clients.';
            case 'EXPORT-IMPORT CONSULTANT':
                return 'Be it goods coming into the country or going out of the country, you can always rely on our solutions.';
          
            default:
                return '';
        }
    };

    return (
        <div id='services'>
            <div className="contact-banner">
                <div className="contact-heading">
                    <h2>SERVICES</h2>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sub-heading about-heading">
                            <h2>SERVICES WE PROVIDE</h2>
                            <p>Hextrade overseas pvt.ltd provides integrated, flexible logistics solutions that address the unique, diverse needs of our customers.</p>
                            <p>Our end-to-end supply chain management capabilities include seafreight, airfreight, rail, road, custom clearance and door to door courier.</p>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-md-6 col-lg-4 mt-4">
                        <div className={`services-box shadow rounded-3 py-5 px-5 ${selectedService === 'TOTAL LOGISTIC SOLUTION' ? 'active' : ''}`} onClick={() => handleClick('TOTAL LOGISTIC SOLUTION')}>
                            {selectedService === 'TOTAL LOGISTIC SOLUTION' ? (
                                <div className="services-box-content">
                                    <p className='text-center mt-4 fs-6'><b>{getServiceDescription('TOTAL LOGISTIC SOLUTION')}</b></p>
                                </div>
                            ) : (
                                <>
                                    <div className=" text-center">
                                        <FaTram className='service-icon' />
                                    </div>
                                    <div className="services-box-content">
                                        <p className='text-center mt-4 fs-6'><b>TOTAL LOGISTIC SOLUTION</b></p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4">
                        <div className={`services-box shadow rounded-3 py-5 px-5 ${selectedService === 'AIR DELIVERY' ? 'active' : ''}`} onClick={() => handleClick('AIR DELIVERY')}>
                            {selectedService === 'AIR DELIVERY' ? (
                                <div className="services-box-content">
                                    <p className='text-center mt-4 fs-6'><b>{getServiceDescription('AIR DELIVERY')}</b></p>
                                </div>
                            ) : (
                                <>
                                    <div className=" text-center">
                                        <IoMdAirplane className='service-icon' />
                                    </div>
                                    <div className="services-box-content">
                                        <p className='text-center mt-4 fs-6'><b>AIR DELIVERY</b></p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4">
                        <div className={`services-box shadow rounded-3 py-5 px-5 ${selectedService === 'SEA DELIVERY' ? 'active' : ''}`} onClick={() => handleClick('SEA DELIVERY')}>
                            {selectedService === 'SEA DELIVERY' ? (
                                <div className="services-box-content">
                                    <p className='text-center mt-4 fs-6'><b>{getServiceDescription('SEA DELIVERY')}</b></p>
                                </div>
                            ) : (
                                <>
                                    <div className=" text-center">
                                        <IoMdBoat className='service-icon' />
                                    </div>
                                    <div className="services-box-content">
                                        <p className='text-center mt-4 fs-6'><b>SEA DELIVERY</b></p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4">
                        <div className={`services-box shadow rounded-3 py-5 px-5 ${selectedService === 'CLEARING AND FORWARDING' ? 'active' : ''}`} onClick={() => handleClick('CLEARING AND FORWARDING')}>
                            {selectedService === 'CLEARING AND FORWARDING' ? (
                                <div className="services-box-content">
                                    <p className='text-center mt-4 fs-6'><b>{getServiceDescription('CLEARING AND FORWARDING')}</b></p>
                                </div>
                            ) : (
                                <>
                                    <div className=" text-center">
                                        <IoCalendarClearSharp className='service-icon' />
                                    </div>
                                    <div className="services-box-content">
                                        <p className='text-center mt-4 fs-6'><b>CLEARING AND FORWARDING</b></p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mt-4">
                        <div className={`services-box shadow rounded-3 py-5 px-5 ${selectedService === 'EXPORT-IMPORT CONSULTANT' ? 'active' : ''}`} onClick={() => handleClick('EXPORT-IMPORT CONSULTANT')}>
                            {selectedService === 'EXPORT-IMPORT CONSULTANT' ? (
                                <div className="services-box-content">
                                    <p className='text-center mt-4 fs-6'><b>{getServiceDescription('EXPORT-IMPORT CONSULTANT')}</b></p>
                                </div>
                            ) : (
                                <>
                                    <div className=" text-center">
                                        <IoPersonAddSharp className='service-icon' />
                                    </div>
                                    <div className="services-box-content">
                                        <p className='text-center mt-4 fs-6'><b>EXPORT-IMPORT CONSULTANT</b></p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                  
                    {/* Repeat the similar structure for other service boxes */}
                </div>
            </div>
        </div>
    )
}

export default Services;
