import React, { useEffect, useRef } from 'react';
import './css/accessories.css';
import GetToKnowSection from './GetToKnowSection';

function Accessories() {
    const sections = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('acc-visible');
                }
            });
        }, { threshold: 0.1 });

        sections.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="accessories-page">
            <div className="banner_bar">
                <h1>Accessories</h1>
                <p>Mix. Match. MagSafe.</p>
            </div>

            <section className="acc-categories" ref={el => sections.current[0] = el}>
                <div className="acc-category-grid">
                    <div className="acc-cat-card">
                        <div className="acc-icon-container">
                            <svg width="80" height="80" viewBox="0 0 100 100">
                                <rect x="25" y="10" width="50" height="80" rx="10" stroke="#1d1d1f" strokeWidth="4" fill="none" />
                                <circle cx="50" cy="50" r="15" stroke="#1d1d1f" strokeWidth="4" fill="none" />
                                <rect x="45" y="80" width="10" height="4" fill="#1d1d1f" />
                            </svg>
                        </div>
                        <h3>Cases & Protection</h3>
                        <p>Protect your iPhone, iPad, and Mac.</p>
                    </div>
                    <div className="acc-cat-card">
                        <div className="acc-icon-container">
                            <svg width="80" height="80" viewBox="0 0 100 100">
                                <circle cx="35" cy="50" r="10" stroke="#1d1d1f" strokeWidth="4" fill="none" />
                                <circle cx="65" cy="50" r="10" stroke="#1d1d1f" strokeWidth="4" fill="none" />
                                <path d="M45 50 Q 50 60 55 50" fill="none" stroke="#1d1d1f" strokeWidth="4" />
                                <path d="M35 60 L 35 70 M 65 60 L 65 70" stroke="#1d1d1f" strokeWidth="4" />
                            </svg>
                        </div>
                        <h3>Headphones & Speakers</h3>
                        <p>Immersive sound around you.</p>
                    </div>
                    <div className="acc-cat-card">
                        <div className="acc-icon-container">
                            <svg width="80" height="80" viewBox="0 0 100 100">
                                <rect x="30" y="30" width="40" height="40" rx="20" stroke="#1d1d1f" strokeWidth="4" fill="none" />
                                <circle cx="50" cy="50" r="5" fill="#1d1d1f" />
                                <path d="M50 20 L 50 10 M 50 90 L 50 80 M 20 50 L 10 50 M 90 50 L 80 50" stroke="#1d1d1f" strokeWidth="4" />
                            </svg>
                        </div>
                        <h3>Power & Cables</h3>
                        <p>Charge at full speed.</p>
                    </div>
                    <div className="acc-cat-card">
                        <div className="acc-icon-container">
                            <svg width="80" height="80" viewBox="0 0 100 100">
                                <rect x="30" y="10" width="40" height="80" rx="5" stroke="#1d1d1f" strokeWidth="4" fill="none" />
                                <rect x="40" y="20" width="20" height="60" rx="2" fill="#1d1d1f" opacity="0.1" />
                            </svg>
                        </div>
                        <h3>Bands</h3>
                        <p>Wear it your way.</p>
                    </div>
                </div>
            </section>

            <section className="acc-featured" ref={el => sections.current[1] = el}>
                <h2>Featured Accessories</h2>
                <div className="acc-featured-grid">

                    <div className="acc-product-card">
                        <div className="acc-product-badge">New</div>
                        <div className="acc-product-img">
                            <svg width="150" height="150" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="70" fill="#f5f5f7" />
                                <rect x="70" y="50" width="60" height="100" rx="15" fill="#e2221b" />
                                <circle cx="100" cy="100" r="20" fill="#fff" opacity="0.3" />
                            </svg>
                        </div>
                        <div className="acc-product-info">
                            <h4 className="acc-color">Red</h4>
                            <h3 className="acc-name">iPhone 16 Pro FineWoven Case with MagSafe</h3>
                            <p className="acc-price">₹5900.00</p>
                            <button className="acc-buy">Add to Bag</button>
                        </div>
                    </div>

                    <div className="acc-product-card">
                        <div className="acc-product-img">
                            <svg width="150" height="150" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="70" fill="#f5f5f7" />
                                <rect x="85" y="40" width="30" height="120" rx="5" fill="#e8e8ed" />
                                <rect x="85" y="40" width="30" height="30" rx="5" fill="#1d1d1f" />
                                <rect x="85" y="130" width="30" height="30" rx="5" fill="#1d1d1f" />
                            </svg>
                        </div>
                        <div className="acc-product-info">
                            <h4 className="acc-color">Midnight</h4>
                            <h3 className="acc-name">45mm Midnight Sport Band</h3>
                            <p className="acc-price">₹4500.00</p>
                            <button className="acc-buy">Add to Bag</button>
                        </div>
                    </div>

                    <div className="acc-product-card">
                        <div className="acc-product-img">
                            <svg width="150" height="150" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="70" fill="#f5f5f7" />
                                <circle cx="100" cy="100" r="40" fill="#fff" stroke="#d2d2d7" strokeWidth="2" />
                                <path d="M100 140 L 100 180" stroke="#d2d2d7" strokeWidth="4" />
                                <circle cx="100" cy="100" r="10" fill="none" stroke="#d2d2d7" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="acc-product-info">
                            <h4 className="acc-color">White</h4>
                            <h3 className="acc-name">MagSafe Charger</h3>
                            <p className="acc-price">₹4500.00</p>
                            <button className="acc-buy">Add to Bag</button>
                        </div>
                    </div>

                    <div className="acc-product-card">
                        <div className="acc-product-badge">AirTag</div>
                        <div className="acc-product-img">
                            <svg width="150" height="150" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" r="70" fill="#f5f5f7" />
                                <circle cx="100" cy="100" r="30" fill="#fff" stroke="#d2d2d7" strokeWidth="2" />
                                <path d="M95 105 L 105 105 M 100 100 L 100 110" stroke="#d2d2d7" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="acc-product-info">
                            <h4 className="acc-color">Silver</h4>
                            <h3 className="acc-name">AirTag</h3>
                            <p className="acc-price">₹3490.00</p>
                            <button className="acc-buy">Add to Bag</button>
                        </div>
                    </div>

                </div>
            </section>

            <GetToKnowSection />
        </div>
    );
}

export default Accessories;
