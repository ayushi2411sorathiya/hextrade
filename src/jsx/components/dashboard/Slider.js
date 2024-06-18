// import React from 'react';
// import slider1 from '../../../images/slider1.jpg'

// const Slider = () => {
//     return (
//         <div>
//             <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
//                 <div className="carousel-indicators">
//                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"
//                         aria-current="true"></button>
//                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
//                     <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
//                 </div>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={slider1} height="300px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
//                             preserveAspectRatio="xMidYMid slice" focusable="false"/>
//                             {/* <rect width="100%" height="100%" fill="#777"></rect> */}

//                         <div className="container">
//                             <div className="carousel-caption text-end">
//                                 <h1>Automatic Photo Capture Camera.</h1>
//                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt dolores amet.</p>
//                                 <p><a className="btn btn-lg btn-primary" href="#">50% OFF</a></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={slider1} height="300px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
//                             preserveAspectRatio="xMidYMid slice" focusable="false"/>
//                             {/* <rect width="100%" height="100%" fill="#777"></rect> */}

//                         <div className="container">
//                             <div className="carousel-caption text-end">
//                                 <h1>One more for good measure.</h1>
//                                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque.</p>
//                                 <p><a className="btn btn-lg btn-primary" href="#">50% OFF</a></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={slider1} height="300px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
//                             preserveAspectRatio="xMidYMid slice" focusable="false"/>
//                             {/* <rect width="100%" height="100%" fill="#777"></rect> */}

//                         <div className="container">
//                             <div className="carousel-caption text-end">
//                                 <h1>Men's Wear.</h1>
//                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, fuga consectetur.</p>
//                                 <p><a className="btn btn-lg btn-primary" href="#">50% OFF</a></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Slider



// // Slider.js

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import videoSrc from '../../../images/bg-video.mp4';
// // import './Slider.css'; // Make sure to create a corresponding CSS file

// const images = [
//     require('../../../images/slider1.jpg'),
//     require('../../../images/slider1.jpg'),
//     require('../../../images/slider1.jpg'),


//     // Add as many images as you want
// ];

// const SliderSection = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         cssEase: 'linear',
//         arrows: false
//     };

//     return (
//         <div>
//        <video autoPlay loop muted className="background-video">
//         <source src={videoSrc} type="video/mp4" />
//         Your browser does not support the video tag.
//                 </video>

//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <div className="slider-container">
//                 <Slider {...settings}>
//                   {images.map((img, idx) => (
//                     <div key={idx} className='slider-img' >
//                       <img src={img} alt={`Slide ${idx + 1}`} />
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default SliderSection;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import videoSrc from '../../../images/bg-video.mp4';
import slider1 from '../../../images/slider1.jpg'
import slider2 from '../../../images/slider2.jpg'
import slider3 from '../../../images/slider3.jpg'
import slider4 from '../../../images/slider4.jpg'
import slider5 from '../../../images/slider5.jpg'
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: slider1,
    video: videoSrc, 
    content: {
      title: "Innovation in Trade and Logistics",
      description: "Pioneering new solutions for modern global trade.",
      buttonLabel: "Button Label",
      buttonLink: "#",
    },
  },
  {
    id: 2,
    image: slider2,
    content: {
      title: "Effortless Import/Export Solutions",
      description: "Delivering hassle-free services for all your import/export needs.",
      buttonLabel: "Button Label",
      buttonLink: "#",
    },
  },
  {
    id: 3,
    image: slider3,
    content: {
      title: "Connecting Markets Worldwide",
      description: "Bridging international markets for seamless transactions.",
      buttonLabel: "Button Label",
      buttonLink: "#",
    },
  },
  {
    id: 4,
    image: slider4,
    content: {
      title: "Global Reach, Local Expertise",
      description: "Comprehensive trade solutions with a personalized touch.",
      buttonLabel: "Button Label",
      buttonLink: "#",
    },
  },
  {
    id: 5,
    image: slider5,
    content: {
      title: "Streamlining International Trade",
      description: "Simplifying global trade processes for efficiency and growth.",
      buttonLabel: "Button Label",
      buttonLink: "#",
    },
  },
  // Add more slides as needed
];

const SliderComponent = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
    appendDots: dots => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="slider-container" style={{marginTop:"-20px"}}>
      <video autoPlay loop muted className="background-video">
        <source src={slides[0].video} type="video/mp4" />
      </video>
      <div className="container">
        <div className="slider-overlay">
          <Slider {...settings}>
            {slides.map(slide => (
              <div key={slide.id} className="slide">
                <div className="image-overlay"></div>
                <img src={slide.image} alt={`Slide ${slide.id}`} className="slider-image" />
                <div className="slide-content">
                  <div data-aos="zoom-in">
                  <h2>{slide.content.title}</h2>
                  <p>{slide.content.description}</p>
                  <Link to="/about"> <button className="slider-btn"><span> <a href={slide.content.buttonLink}></a>About us </span></button></Link>
                  {/* <a href={slide.content.buttonLink} className="button">{slide.content.buttonLabel}</a> */}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
