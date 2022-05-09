import React from 'react';
import address from '../../img/google.gif';
import './About.css';

const About = () => {
    return (
        <div>
            <h4 className='mt-5 py-5 text-center fw-bold'>About US</h4>
            <div className='border rounded p-3 my-4 service-text'>
                <h6 className='fw-bold'>Our Services:</h6>
                <p>We are the best position in Bangladesh by our services. We are the one of most seller and trustable brand in Bangladesh. <br /> Never we dont compromise our products quality. so tht dont luoser our valuable clients.</p>
                <p>We are the best position in Bangladesh by our services. We are the one of most seller and trustable brand in Bangladesh. <br /> Never we dont compromise our products quality. so tht dont luoser our valuable clients.</p>
                <p>We are the best position in Bangladesh by our services. We are the one of most seller and trustable brand in Bangladesh. <br /> Never we dont compromise our products quality. so tht dont luoser our valuable clients.</p>
            </div>
            <div className='text-center address-container m-5'>
                <div className='text'>
                    <h6 className='fw-bold'>Our Address:</h6>
                    <p>A/4-CWA, Kamal Ataturk Avnew road gulshan-2, Dhaka-1212.</p>
                </div>
                <div>
                    <img width={450} src={address} alt="" />
                </div>

            </div>

        </div>
    );
};

export default About;