import React from 'react';
import './Footer.css';
import logo from '../../img/logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container bg-success text-white p-3">
                <div className="footer-services">
                    <img src={logo} alt="" />
                    <h5>Welcome To Our Perfume World</h5>
                    <p><small>Perfume is pession of the deffirent.</small></p>
                </div>
                <div className="footer-services">
                    <h4>Store Location:</h4>
                    <p>Address: Gulshan-2, Dhaka-1212</p>
                    <p>Email: perfumeworld@gmail.com</p>
                    <p>Phone: +880131300321</p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;