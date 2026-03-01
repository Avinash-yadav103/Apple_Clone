import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';

function Footer() {
    return (
        <footer className="apple-footer">
            <div className="footer-content">
                <div className="footer-directory">
                    <div className="footer-column">
                        <h3 className="footer-column-title">Shop and Learn</h3>
                        <ul className="footer-column-list">
                            <li><Link to="/">Store</Link></li>
                            <li><Link to="/mac">Mac</Link></li>
                            <li><Link to="/ipad">iPad</Link></li>
                            <li><Link to="/iphone">iPhone</Link></li>
                            <li><Link to="/watch">Watch</Link></li>
                            <li><Link to="/air-pods">AirPods</Link></li>
                            <li><Link to="/tv">TV & Home</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-column-title">Services</h3>
                        <ul className="footer-column-list">
                            <li><Link to="/entertainment">Apple Music</Link></li>
                            <li><Link to="/tv">Apple TV+</Link></li>
                            <li><Link to="/entertainment">Apple Arcade</Link></li>
                            <li><Link to="/entertainment">iCloud</Link></li>
                            <li><Link to="/entertainment">Apple One</Link></li>
                            <li><a href="#">Apple Card</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-column-title">Apple Store</h3>
                        <ul className="footer-column-list">
                            <li><a href="#">Find a Store</a></li>
                            <li><a href="#">Genius Bar</a></li>
                            <li><a href="#">Today at Apple</a></li>
                            <li><a href="#">Apple Camp</a></li>
                            <li><a href="#">Financing</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><Link to="/accessories">Shopping Help</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-column-title">For Business</h3>
                        <ul className="footer-column-list">
                            <li><a href="#">Apple and Business</a></li>
                            <li><a href="#">Shop for Business</a></li>
                        </ul>
                        <h3 className="footer-column-title" style={{ marginTop: '1.5rem' }}>For Education</h3>
                        <ul className="footer-column-list">
                            <li><a href="#">Apple and Education</a></li>
                            <li><a href="#">Shop for Education</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-column-title">Apple Values</h3>
                        <ul className="footer-column-list">
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Environment</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Supply Chain</a></li>
                        </ul>
                        <h3 className="footer-column-title" style={{ marginTop: '1.5rem' }}>About Apple</h3>
                        <ul className="footer-column-list">
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">Apple Leadership</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Ethics & Compliance</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Contact Apple</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-shop-info">
                    <p>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 000800-040-1966.</p>
                </div>

                <div className="footer-legal">
                    <div className="footer-legal-links">
                        <span className="footer-copyright">Copyright © 2024 Apple Inc. All rights reserved.</span>
                        <div className="footer-legal-nav">
                            <a href="#">Privacy Policy</a>
                            <span className="footer-legal-separator">|</span>
                            <a href="#">Terms of Use</a>
                            <span className="footer-legal-separator">|</span>
                            <a href="#">Sales and Refunds</a>
                            <span className="footer-legal-separator">|</span>
                            <a href="#">Legal</a>
                            <span className="footer-legal-separator">|</span>
                            <a href="#">Site Map</a>
                        </div>
                    </div>
                    <div className="footer-locale">
                        <span>India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
