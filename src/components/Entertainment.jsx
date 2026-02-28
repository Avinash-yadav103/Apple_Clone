import React, { useEffect, useRef } from 'react';
import './css/entertainment.css';
import GetToKnowSection from './GetToKnowSection';

function Entertainment() {
    const sections = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('ent-visible');
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
        <div className="entertainment-page">
            {/* Hero Section */}
            <section className="ent-hero" ref={el => sections.current[0] = el}>
                <div className="ent-hero-content">
                    <h1>Apple One</h1>
                    <h2>Bundle up to six Apple services.<br />And enjoy more for less.</h2>
                    <div className="ent-cta">
                        <button className="ent-btn primary">Try Apple One free*</button>
                        <p className="ent-link">Learn more &gt;</p>
                    </div>
                </div>
                <div className="ent-hero-bg">
                    <div className="gradient-sphere one"></div>
                    <div className="gradient-sphere two"></div>
                    <div className="gradient-sphere three"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="ent-services">
                <div className="ent-service-card tv" ref={el => sections.current[1] = el}>
                    <div className="ent-service-info">
                        <div className="ent-service-logo">
                            <svg width="40" height="40" viewBox="0 0 100 100">
                                <rect width="100" height="100" rx="20" fill="#000" />
                                <text x="50" y="55" fill="#fff" fontSize="24" fontWeight="bold" textAnchor="middle">tv+</text>
                            </svg>
                        </div>
                        <h3>Apple TV+</h3>
                        <p>Get 3 months free when you buy an eligible Apple device.*</p>
                        <button className="ent-btn secondary">Try it free</button>
                    </div>
                </div>

                <div className="ent-service-card music" ref={el => sections.current[2] = el}>
                    <div className="ent-service-info">
                        <div className="ent-service-logo">
                            <svg width="40" height="40" viewBox="0 0 100 100">
                                <rect width="100" height="100" rx="20" fill="#fa243c" />
                                <circle cx="50" cy="65" r="15" fill="#fff" />
                                <rect x="55" y="25" width="10" height="40" fill="#fff" />
                                <path d="M55 25 Q 75 15 85 25" fill="none" stroke="#fff" strokeWidth="8" />
                            </svg>
                        </div>
                        <h3>Apple Music</h3>
                        <p>Over 100 million songs. Ad-free.</p>
                        <button className="ent-btn secondary">Try it free</button>
                    </div>
                </div>

                <div className="ent-service-card arcade" ref={el => sections.current[3] = el}>
                    <div className="ent-service-info">
                        <div className="ent-service-logo">
                            <svg width="40" height="40" viewBox="0 0 100 100">
                                <rect width="100" height="100" rx="20" fill="#fff" />
                                <rect x="25" y="50" width="50" height="25" rx="12.5" fill="#e2221b" />
                                <circle cx="35" cy="40" r="10" fill="#facc2e" />
                                <circle cx="65" cy="40" r="10" fill="#4688f1" />
                            </svg>
                        </div>
                        <h3>Apple Arcade</h3>
                        <p>Unlimited access to 200+ incredibly fun games.</p>
                        <button className="ent-btn secondary">Try it free</button>
                    </div>
                </div>

                <div className="ent-service-card fitness" ref={el => sections.current[4] = el}>
                    <div className="ent-service-info">
                        <div className="ent-service-logo">
                            <svg width="40" height="40" viewBox="0 0 100 100">
                                <rect width="100" height="100" rx="20" fill="#000" />
                                <circle cx="50" cy="50" r="25" fill="none" stroke="#aaff00" strokeWidth="8" />
                                <circle cx="50" cy="50" r="15" fill="none" stroke="#10ff00" strokeWidth="8" />
                                <circle cx="50" cy="50" r="5" fill="#00ffb7" />
                            </svg>
                        </div>
                        <h3>Apple Fitness+</h3>
                        <p>Fitness for everyone. Now all you need is iPhone.</p>
                        <button className="ent-btn secondary">Try it free</button>
                    </div>
                </div>
            </section>

            <GetToKnowSection />
        </div>
    );
}

export default Entertainment;
