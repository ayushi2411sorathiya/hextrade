import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    FaWhatsapp,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaPinterest
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            mobileNumber: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            mobileNumber: Yup.string()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, 'Must be exactly 10 digits')
                .max(10, 'Must be exactly 10 digits')
                .required('Mobile Number is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required')
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await fetch('https://formspree.io/f/mnqeywjo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    resetForm();
                } else {
                    console.error('Form submission error');
                }
            } catch (error) {
                console.error('Form submission error:', error);
            }
        }
    });

    return (
        <div className='container-fluid footer'>
            <div className="container">
                <footer className="row">
                    <div className="footer-section col-12 col-md-6 col-lg-4">
                        <div className="sub-heading about-heading">
                            <h2 className='fs-4'>CONTACT ADDRESS</h2>
                        </div>
                        <p>401,402,403-Bhramhans Plaza,Pasodra Patiya to Kholvad Road,Surat,Gujrat, India</p>
                        <p><a href="tel:8490017009" className='text-light'>+91 8490017009</a></p>
                        <p><a href="mailto:hextradeoversearspvtltd@gmail.com" className='text-light'>hextradeoversearspvtltd@gmail.com</a></p>
                        <div className="social-icons">
                            {/* https://api.whatsapp.com/send/?phone=9265540856 */}
                            {/* <a href="https://wa.me/+918486030124" className="social-icon"> */}
                            <a href="https://wa.me/+918486030124" className="social-icon" target='_blank'>
                                <FaWhatsapp />
                            </a>
                            <a href="https://www.instagram.com" className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://www.twitter.com" className="social-icon">
                                <FaTwitter />
                            </a>
                            <a href="https://www.facebook.com" className="social-icon">
                                <FaFacebook />
                            </a>
                            <a href="https://www.pinterest.com" className="social-icon">
                                <FaPinterest />
                            </a>
                        </div>
                    </div>
                    <div className='col-1'></div>
                    <div className="footer-section col-12 col-md-6 col-lg-3">
                        <div className="sub-heading about-heading">
                            <h2 className='fs-4'>USEFUL LINKS</h2>
                        </div>
                        <ul>
                            <li className='mb-3'><Link to="/"><a href="#" className='footer-item'>Home</a></Link></li>
                            <li className='mb-3'><Link to="/about"><a href="#" className='footer-item'>About Us</a></Link></li>
                            <li className='mb-3'><Link to="/"><a href="#" className='footer-item'>Our Products</a></Link></li>
                            <li className='mb-3'><Link to="/service"><a href="#" className='footer-item'>Services</a></Link></li>
                            <li className='mb-3'><Link to="/gallery"><a href="#" className='footer-item'>Photo Gallery</a></Link></li>
                            <li className='mb-3'><Link to="/contact"><a href="#" className='footer-item'>Contact Us</a></Link></li>
                        </ul>
                    </div>
                    <div className="footer-section col-12 col-md-6 col-lg-4">
                        <div className="sub-heading about-heading">
                            <h2 className='fs-4'>ENQUIRY FORM</h2>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <p className='error'>{formik.errors.name}</p>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    placeholder="Mobile Number"
                                    value={formik.values.mobileNumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                                    <p className='error'>{formik.errors.mobileNumber}</p>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <p className='error'>{formik.errors.email}</p>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.message && formik.errors.message ? (
                                    <p className='error'>{formik.errors.message}</p>
                                ) : null}
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="footer-bottom">
                        <p className='text-center mb-0 my-2'>Copyright ©2024 Hextrade. All Rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default FooterSection




// import React from 'react';
// import {
//     FaWhatsapp,
//     FaInstagram,
//     FaTwitter,
//     FaFacebook,
//     FaPinterest
// } from 'react-icons/fa';

// const FooterSection = () => {
//     return (
//         <div className='container-fluid footer'>
//             <div className="container">
//                 <footer className=" row">
//                     <div className="footer-section col-12 col-md-6 col-lg-4">
//                         <div className="sub-heading about-heading">
//                             <h2 className='fs-4'>CONTACT ADDRESS</h2>
//                         </div>
//                         <p>401,402,403-Bhramhans Plaza,Pasodra Patiya to Kholvad Road,Surat,Gujrat, india  </p>
//                         <p><a href="tel:8490017009" className='text-light'>+91 8490017009</a></p>
//                         <p><a href="mailto:hextradeoversearspvtltd@gmail.com" className='text-light'>hextradeoversearspvtltd@gmail.com</a></p>
//                         <div className="social-icons">
//                             <a href="https://wa.me/+918486030124" className="social-icon">
//                                 <FaWhatsapp />
//                             </a>
//                             <a href="https://www.instagram.com" className="social-icon">
//                                 <FaInstagram />
//                             </a>
//                             <a href="https://www.twitter.com" className="social-icon">
//                                 <FaTwitter />
//                             </a>
//                             <a href="https://www.facebook.com" className="social-icon">
//                                 <FaFacebook />
//                             </a>
//                             <a href="https://www.pinterest.com" className="social-icon">
//                                 <FaPinterest />
//                             </a>
//                         </div>

//                     </div>
//                     <div className='col-1'></div>
//                     <div className="footer-section col-12 col-md-6 col-lg-3">
//                         <div className="sub-heading about-heading">
//                             <h2 className='fs-4'>USEFUL LINKS</h2>
//                         </div>
//                         <ul>
//                             <li className='mb-3'> <a href="" className='footer-item'>Home</a></li>
//                             <li className='mb-3'> <a href="" className='footer-item'>About Us</a></li>
//                             <li className='mb-3'> <a href="" className='footer-item'>Our Products </a> </li>
//                             <li className='mb-3'> <a href="" className='footer-item'>Services</a></li>
//                             <li className='mb-3'> <a href="" className='footer-item'>Photo Gallery </a> </li>
//                             <li className='mb-3'> <a href="" className='footer-item'>Contact Us</a> </li>
//                         </ul>
//                     </div>
//                     <div className="footer-section col-12 col-md-6 col-lg-4">
//                         <div className="sub-heading about-heading">
//                             <h2 className='fs-4'>ENQUIRY FORM</h2>
//                         </div>
//                         <form>
//                             <input type="text" placeholder="Name" />
//                             <input type="text" placeholder="Mobile Number" />
//                             <input type="email" placeholder="Enter email address" />
//                             <textarea placeholder="Message"></textarea>
//                             <button type="submit">Submit</button>
//                         </form>
//                     </div>
//                     <div className="footer-bottom">
//                         <p className='text-center mb-0 my-2'>Copyright ©2024 Hextrade. All Rights reserved.</p>
//                     </div>
//                 </footer>
//             </div>
//         </div>
//     )
// }

// export default FooterSection


// // =============== # Address redirect map # ===================

// // import React from 'react';

// // const AddressComponent = () => {
// //   const address = '401,402,403-Bhramhans Plaza,Pasodra Patiya to Kholvad Road,Surat,Gujrat';
// //   const encodedAddress = encodeURIComponent(address);
// //   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

// //   return (
// //     <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
// //       {address}
// //     </a>
// //   );
// // };

// // export default AddressComponent;
