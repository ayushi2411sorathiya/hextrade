import React from 'react'

const Topbar = () => {
    return (
        <div id='home'>
            {/* <section className="bg-gray"> */}
            <div className="container" id='topbar'>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <p className='m-0'>Hi guest! Welcome to imports and exports world</p>
                    </div>
                    <div className="col-12 col-md-6 topbar-right">
                        <div className="d-flex justify-content-between" style={{ flexWrap: "wrap" }}>
                            <div className='me-2'>
                                <label>Contact us: </label>
                                <a href="tel:8490017009"> +91 8490017009</a>
                            </div>
                            <div>
                                <p className='m-0'><a href="mailto:hextradeoversearspvtltd@gmail.com">hextradeoversearspvtltd@gmail.com</a></p>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-12 col-md-6">
                                <label>Contact us: </label>
                                <a href="tel:+919265540856"> +9192655 76899</a>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className='m-0'><a href="mailto:ayushisorathiya11@gmail.com">admin@gmail.com</a></p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* </section> */}
        </div>
    )
}

export default Topbar