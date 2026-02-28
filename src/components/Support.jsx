import React, { useEffect, useRef } from 'react';
import './css/support.css';
import GetToKnowSection from './GetToKnowSection';

function Support() {
    const sections = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('sup-visible');
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
        <div className="support-page">
            <section className="sup-hero" ref={el => sections.current[0] = el}>
                <div className="sup-hero-content">
                    <h1>Apple Support</h1>
                    <div className="sup-search-container">
                        <input type="text" placeholder="Search for topics, products, and more" className="sup-search-input" />
                        <div className="sup-search-icon">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="#1d1d1f">
                                <path d="M21 19.5L16.5 15C17.5 13.5 18 11.5 18 9.5C18 4.8 14.2 1 9.5 1C4.8 1 1 4.8 1 9.5C1 14.2 4.8 18 9.5 18C11.5 18 13.4 17.5 14.9 16.5L19.5 21L21 19.5ZM9.5 16C5.9 16 3 13.1 3 9.5C3 5.9 5.9 3 9.5 3C13.1 3 16 5.9 16 9.5C16 13.1 13.1 16 9.5 16Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sup-products" ref={el => sections.current[1] = el}>
                <div className="sup-products-grid">

                    <div className="sup-product-card">
                        <div className="sup-product-icon">
                            <svg width="60" height="60" viewBox="0 0 100 100">
                                <rect x="30" y="10" width="40" height="80" rx="6" stroke="#1d1d1f" strokeWidth="3" fill="none" />
                                <circle cx="50" cy="50" r="10" fill="#1d1d1f" opacity="0.1" />
                            </svg>
                        </div>
                        <h3>iPhone</h3>
                    </div>

                    <div className="sup-product-card">
                        <div className="sup-product-icon">
                            <svg width="60" height="60" viewBox="0 0 100 100">
                                <rect x="15" y="25" width="70" height="50" rx="4" stroke="#1d1d1f" strokeWidth="3" fill="none" />
                                <rect x="25" y="80" width="50" height="5" rx="2" fill="#1d1d1f" />
                                <path d="M50 75 L 50 80" stroke="#1d1d1f" strokeWidth="3" />
                            </svg>
                        </div>
                        <h3>Mac</h3>
                    </div>

                    <div className="sup-product-card">
                        <div className="sup-product-icon">
                            <svg width="60" height="60" viewBox="0 0 100 100">
                                <rect x="20" y="15" width="60" height="70" rx="4" stroke="#1d1d1f" strokeWidth="3" fill="none" />
                            </svg>
                        </div>
                        <h3>iPad</h3>
                    </div>

                    <div className="sup-product-card">
                        <div className="sup-product-icon">
                            <svg width="60" height="60" viewBox="0 0 100 100">
                                <rect x="35" y="25" width="30" height="50" rx="8" stroke="#1d1d1f" strokeWidth="3" fill="none" />
                                <path d="M35 35 L 30 35 M 35 65 L 30 65" stroke="#1d1d1f" strokeWidth="3" />
                                <circle cx="68" cy="40" r="3" fill="#1d1d1f" />
                            </svg>
                        </div>
                        <h3>Watch</h3>
                    </div>

                    <div className="sup-product-card">
                        <div className="sup-product-icon">
                            <svg width="60" height="60" viewBox="0 0 100 100">
                                <circle cx="35" cy="45" r="8" stroke="#1d1d1f" strokeWidth="3" fill="none" />
                                <circle cx="65" cy="45" r="8" stroke="#1d1d1f" strokeWidth="3" fill="none" />
                                <path d="M35 53 L 35 70 M 65 53 L 65 70" stroke="#1d1d1f" strokeWidth="3" />
                            </svg>
                        </div>
                        <h3>AirPods</h3>
                    </div>

                    <div className="sup-product-card">
                        <div className="sup-product-icon">
                            <svg width="60" height="60" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="40" height="60" rx="5" stroke="#1d1d1f" strokeWidth="3" fill="none" />
                            </svg>
                        </div>
                        <h3>Music</h3>
                    </div>

                </div>
            </section>

            <section className="sup-get-support" ref={el => sections.current[2] = el}>
                <div className="sup-support-content">
                    <h2>Get Support</h2>
                    <p>Choose a product and we'll find you the best solution.</p>

                    <div className="sup-contact-options">
                        <div className="sup-contact-card">
                            <div className="sup-contact-icon">📱</div>
                            <h3>Call us</h3>
                            <p>Talk to an Apple Support Advisor.</p>
                            <button className="sup-btn">Get Started</button>
                        </div>

                        <div className="sup-contact-card">
                            <div className="sup-contact-icon">💬</div>
                            <h3>Chat with us</h3>
                            <p>Message with an Apple Support Advisor.</p>
                            <button className="sup-btn">Start Chat</button>
                        </div>

                        <div className="sup-contact-card">
                            <div className="sup-contact-icon">🏪</div>
                            <h3>Visit a store</h3>
                            <p>Make a reservation at an Apple Store.</p>
                            <button className="sup-btn">Find a store</button>
                        </div>
                    </div>
                </div>
            </section>

            <GetToKnowSection />
        </div>
    );
}

export default Support;
