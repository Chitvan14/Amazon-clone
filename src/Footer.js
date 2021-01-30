import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    function scrollToTop(){
        window.scrollTo({
            top:0
        })
    }
    return (
        <div>
            <div className="backToTop" onClick={scrollToTop}>
                <h5>Back to top</h5>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        {/* c1  */}
                        <div className="col">
                            <h4>Get to Know Us</h4>
                            <ul className="list__unstyled">
                                <li>About Us
                    </li>
                                <li>Careers</li>
                                <li>Press Releases</li>
                                <li>Amazon Cares</li>
                                <li>Gift a Smile</li>
                            </ul>
                        </div>
                        {/* c2  */}
                        <div className="col">
                            <h4>Connect with Us</h4>
                            <ul className="list__unstyled">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>

                            </ul>
                        </div>

                        {/* c3  */}
                        <div className="col">
                            <h4>Make Money with Us</h4>
                            <ul className="list__unstyled">
                                <li>Sell on Amazon</li>
                                <li>Sell under Amazon Accelerator</li>
                                <li>Become an Affiliate</li>
                                <li>Fulfilment by Amazon</li>
                                <li>Advertise Your Products</li>
                                <li>Amazon Pay on Merchants</li>
                            </ul>
                        </div>
                        {/* c4  */}
                        <div className="col">
                            <h4>Let Us Help You</h4>
                            <ul className="list__unstyled">
                                <li>COVID-19 and Amazon</li>
                                <li>Your Account</li>
                                <li>Returns Centre</li>
                                <li>100% Purchase Protection</li>
                                <li>Amazon App Download</li>
                                <li>Amazon Assistant Download</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr></hr>

                <div className="footer__section2">
                    {/* img  */}
                    <Link to="/">

                        <img className="footer__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                    </Link>
                    {/* button  */}
                    <button className="footer__button">
                        English
</button>
                </div>
            </div>
        </div>

    )
}

export default Footer
