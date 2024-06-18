import React from 'react';
// import './InfoSection.css';
import info1 from '../../../images/info1.png'
import info2 from '../../../images/info2.png'
import info3 from '../../../images/info3.png'

const InfoSection = () => {
    return (
        <div className="info-section container">
            {/* <h2 >WHY HEXTRADE INTERNATIONAL</h2> */}
            <div className="sub-heading about-heading">
                <h2>WHY HEXTRADE</h2>
            </div>
            <div className="info-cards row ">
                {infoData.map((data, index) => (
                    <div key={index} className=" col-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-easing="linear"
                        data-aos-duration="1500" >
                        <div className='card'>
                            <div style={{height:"70px"}}>
                                <img src={data.icon} alt={data.title} />
                            </div>
                            <br />
                            <h3>{data.title}</h3>
                            <p>{data.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br />
      <br />
      <br />
        </div>
    );
};

const infoData = [
    {
        icon: info1,
        title: 'Vision',
        text: 'To become a globally recognized company which puts quality, service, and value as priority to satisfy the needs of our customers and employees.'
    },
    {
        icon: info2,
        title: 'Mission',
        text: 'To offer our customers products with superior quality and value. To create peaceful and enjoyable work environment for our employees. To contribute to the growth of society as we grow the company’s business.'
    },
    {
        icon: info3,
        title: 'Quality Assurance',
        text: 'We will be keeping track of your cargo with personal care and attention till it reaches the port of destination.'
    }
];

export default InfoSection;
