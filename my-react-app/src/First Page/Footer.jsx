import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../Style/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-col brand-col">
                        <h2 className="footer-logo">Stay Soft</h2>
                        <p className="footer-desc">
                            Premium furniture for modern interiors. We provide high-quality, sustainable designs to elevate your living space.
                        </p>
                        <div className="social-links">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">SHOP</h4>
                        <ul className="footer-links">
                            <li><a href="#">Living Room</a></li>
                            <li><a href="#">Bedroom</a></li>
                            <li><a href="#">Kitchen</a></li>
                            <li><a href="#">Bathroom</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">COMPANY</h4>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Stay Updated */}
                    <div className="footer-col subscribe-col">
                        <h4 className="footer-heading">STAY UPDATED</h4>
                        <p className="footer-desc">Subscribe for latest design inspiration.</p>
                        <div className="subscribe-pill">
                            <input type="email" placeholder="Email address" className="subscribe-input" />
                            <button className="subscribe-btn">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="footer-bottom">
                    <p className="copyright">
                        © 2026 Cartzilla. Designed with <span className="heart">❤</span> by Yash Verma.
                    </p>
                    
                    {/* Updated Payment Icons with your SVG paths */}
                    <div className="payment-icons d-flex gap-3 align-items-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" height="12" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" height="15" alt="Mastercard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" height="15" alt="Paypal" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;