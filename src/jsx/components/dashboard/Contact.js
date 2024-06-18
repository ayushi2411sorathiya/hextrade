import { useFormik } from 'formik';
import React from 'react';
import { formSchema } from '../../schemas';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const initialValues = {
        name: '',
        phoneNumber: '',
        email: '',
        city: '',
        message: ''
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: formSchema,
        onSubmit: async (values, action) => {
            try {
                const response = await fetch('https://formspree.io/f/myyrlrkr', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    action.resetForm();
                } else {
                    console.error('Form submission error');
                }
            } catch (error) {
                console.error('Form submission error:', error);
            }
        }
    });

    return (
        <div id='contact'>
            <div className="contact-banner">
                <div className="contact-heading">
                    <h2>CONTACT US</h2>
                </div>
            </div>

            <div className="container">
                <div className="contact-section row">
                    <div className="contact-details col-12 col-md-6">
                        <div className="sub-heading about-heading">
                            <h2 className='fs-3'>Contact Details</h2>
                        </div>
                        <div className="location">
                            <h4>India</h4>
                            <br />
                            <p><b>HEXTRADE OVERSEAS PVT.LTD</b></p>
                            <p><FaMapMarkerAlt className="icon" />401,402,403-Bhramhans Plaza,Pasodra Patiya to Kholvad Road,Surat,Gujrat</p>
                            <p><FaPhoneAlt className="icon" /><a href="tel:8490017009" className='text-dark'>+91 8490017009</a></p>
                            <p><FaEnvelope className="icon" /> <a href="mailto:hextradeoversearspvtltd@gmail.com" className='text-dark'>hextradeoversearspvtltd@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="get-in-touch col-12 col-md-6">
                        <div className="sub-heading about-heading">
                            <h2 className='fs-3'>Get in Touch !</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Contact Person*"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? (<p className='error'>{errors.name}</p>) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Phone Number*"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phoneNumber && touched.phoneNumber ? (<p className='error'>{errors.phoneNumber}</p>) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-Mail Address*"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (<p className='error'>{errors.email}</p>) : null}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City*"
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.city && touched.city ? (<p className='error'>{errors.city}</p>) : null}
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.message && touched.message ? (<p className='error'>{errors.message}</p>) : null}
                            </div>
                            <button type="submit">Send E-mail</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="contact-map">
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76980.66847676387!2d72.90425009591833!3d21.283092348857576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be047f494f8dd99%3A0xf25a41461da9c711!2sBrahmhans%20Residency%20%26%20Plaza!5e0!3m2!1sen!2sin!4v1716862714377!5m2!1sen!2sin"  style={{ height: "50vh", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Contact;


// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import { formSchema } from '../../schemas';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegSmile } from 'react-icons/fa';


// const Contact = () => {

//     const initialValues = {
//         name: '',
//         phoneNumber: '',
//         email: '',
//         city: '',
//         message: ''
//     }

//     const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
//         initialValues: initialValues,
//         validationSchema: formSchema,
//         onSubmit: (values, action) => {
//             console.log(values);
//             action.resetForm();
//         }
//     });

//     return (
//         <div id='contact'>

//             <div className="contact-banner">
//                 <div className="contact-heading">
//                     <h2>CONTACT US</h2>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="contact-section row">
//                     <div className="contact-details col-12 col-md-6">
//                         <div className="sub-heading about-heading">
//                             <h2 className='fs-3'>Contact Details</h2>
//                         </div>
//                         <div className="location">
//                             <h4>India</h4>
//                             <br />
//                             <p><b>HEXTRADE OVERSEAS PVT.LTD</b></p>
//                             <p><FaMapMarkerAlt className="icon" />401,402,403-Bhramhans Plaza,Pasodra Patiya to Kholvad Road,Surat,Gujrat</p>
//                             <p><FaPhoneAlt className="icon" /><a href="tel:8490017009" className='text-dark'>+91 8490017009</a></p>
//                             <p><FaEnvelope className="icon" /> <a href="mailto:hextradeoversearspvtltd@gmail.com" className='text-dark'>hextradeoversearspvtltd@gmail.com</a></p>
//                         </div>
//                         <br />
//                         {/* <div className="location">
//                             <h4>Kenya</h4>
//                             <p><FaMapMarkerAlt className="icon" /> Vrundawan Kenya Ltd.</p>
//                             <p><FaPhoneAlt className="icon" /> +254755801551</p>
//                             <p><FaEnvelope className="icon" /> vrundawan@yahoo.com</p>
//                         </div> */}
//                     </div>
//                     <div className="get-in-touch col-12 col-md-6">
//                         <div className="sub-heading about-heading">
//                             <h2 className='fs-3'>Get in Touch !</h2>
//                         </div>
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-group">
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     placeholder="Contact Person*"
//                                     value={values.name}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 {
//                                     errors.name && touched.name ? (<p className='error'>{errors.name}</p>) : null
//                                 }
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="tel"
//                                     name="phoneNumber"
//                                     placeholder="Phone Number*"
//                                     value={values.phoneNumber}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 {
//                                     errors.phoneNumber && touched.phoneNumber ? (<p className='error'>{errors.phoneNumber}</p>) : null
//                                 }
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="E-Mail Address*"
//                                     value={values.email}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 {
//                                     errors.email && touched.email ? (<p className='error'>{errors.email}</p>) : null
//                                 }
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="text"
//                                     name="city"
//                                     placeholder="City*"
//                                     value={values.city}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 {
//                                     errors.city && touched.city ? (<p className='error'>{errors.city}</p>) : null
//                                 }
//                             </div>
//                             <div className="form-group">
//                                 <textarea
//                                     name="message"
//                                     placeholder="Message*"
//                                     value={values.message}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                 />
//                                 {
//                                     errors.message && touched.message ? (<p className='error'>{errors.message}</p>) : null
//                                 }
//                             </div>
//                             <button type="submit">Send E-mail</button>
//                         </form>
//                     </div>
//                 </div>

//             </div>
//             <br />
//             <br />
//             <br />

//             {/* Map */}

//             <div className="contact-map">
//                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.225124017416!2d72.86179982987328!3d21.245598798631185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714194497486!5m2!1sen!2sin" style={{ height: "50vh", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </div>


//         </div>
//     );
// };

// export default Contact;