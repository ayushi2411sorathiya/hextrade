import React from 'react';
import Gallery1 from '../../../images/gallery_1.jpg';
import Gallery2 from '../../../images/gallery_2.jpg';
import Gallery3 from '../../../images/gallery_3.jpg';
import Gallery4 from '../../../images/gallery_4.jpg';
import Gallery5 from '../../../images/gallery_5.jpg';
import Gallery6 from '../../../images/gallery_6.jpg';
import Gallery7 from '../../../images/gallery_7.jpg';
import Gallery8 from '../../../images/gallery_8.jpg';
import Gallery9 from '../../../images/gallery_9.jpg';
import Gallery10 from '../../../images/gallery_10.jpg';
import Gallery11 from '../../../images/gallery_11.jpg';
import Gallery12 from '../../../images/gallery_12.jpg';

const Gallery = () => {

    const images = [
        { id: 1, src: Gallery1, alt: 'Image 1' },
        { id: 2, src: Gallery2, alt: 'Image 2' },
        { id: 3, src: Gallery3, alt: 'Image 3' },
        { id: 4, src: Gallery4, alt: 'Image 4' },
        { id: 5, src: Gallery5, alt: 'Image 5' },
        { id: 6, src: Gallery6, alt: 'Image 6' },
        { id: 7, src: Gallery7, alt: 'Image 7' },
        { id: 8, src: Gallery8, alt: 'Image 8' },
        { id: 9, src: Gallery9, alt: 'Image 9' },
        { id: 10, src: Gallery10, alt: 'Image 10' },
        { id: 11, src: Gallery11, alt: 'Image 11' },
        { id: 12, src: Gallery12, alt: 'Image 12' },
   
      ];


    return (
        <div id='gallery' className='mb-5'>
        <div className="contact-banner">
                <div className="contact-heading">
                    <h2>GALLERY</h2>
                </div>
            </div>

          <div className="container">
            <div className="row">
              {/* Map through the images array and render each image */}
              {images.map(image => (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-4" key={image.id}>
                  <div className="image-container">
                    <img src={image.src} alt={image.alt} className="img-fluid" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Gallery;
