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

        return () => observer.disconnect();
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
                <h2 className="ent-services-title" ref={el => sections.current[1] = el}>
                    Explore all Apple services.
                </h2>

                <div className="ent-services-grid">
                    <div className="ent-service-card tv-card-ent" ref={el => sections.current[2] = el}>
                        <div className="ent-service-icon-wrap tv-icon">
                            <span className="ent-service-emoji">📺</span>
                        </div>
                        <div className="ent-service-info">
                            <h3>Apple TV+</h3>
                            <p>Get 3 months free when you buy an eligible Apple device.*</p>
                            <span className="ent-price">₹99/month after free trial</span>
                            <button className="ent-btn secondary">Try it free</button>
                            <span className="ent-learn">Learn more →</span>
                        </div>
                    </div>

                    <div className="ent-service-card music-card" ref={el => sections.current[3] = el}>
                        <div className="ent-service-icon-wrap music-icon">
                            <span className="ent-service-emoji">🎵</span>
                        </div>
                        <div className="ent-service-info">
                            <h3>Apple Music</h3>
                            <p>Over 100 million songs. Ad-free.</p>
                            <span className="ent-price">₹99/month</span>
                            <button className="ent-btn secondary">Try it free</button>
                            <span className="ent-learn">Learn more →</span>
                        </div>
                    </div>

                    <div className="ent-service-card arcade-card" ref={el => sections.current[4] = el}>
                        <div className="ent-service-icon-wrap arcade-icon">
                            <span className="ent-service-emoji">🎮</span>
                        </div>
                        <div className="ent-service-info">
                            <h3>Apple Arcade</h3>
                            <p>Unlimited access to 200+ incredibly fun games.</p>
                            <span className="ent-price">₹99/month</span>
                            <button className="ent-btn secondary">Try it free</button>
                            <span className="ent-learn">Learn more →</span>
                        </div>
                    </div>

                    <div className="ent-service-card fitness-card" ref={el => sections.current[5] = el}>
                        <div className="ent-service-icon-wrap fitness-icon">
                            <span className="ent-service-emoji">🏋️</span>
                        </div>
                        <div className="ent-service-info">
                            <h3>Apple Fitness+</h3>
                            <p>Fitness for everyone. Now all you need is iPhone.</p>
                            <span className="ent-price">₹999/month</span>
                            <button className="ent-btn secondary">Try it free</button>
                            <span className="ent-learn">Learn more →</span>
                        </div>
                    </div>

                    <div className="ent-service-card icloud-card" ref={el => sections.current[6] = el}>
                        <div className="ent-service-icon-wrap icloud-icon">
                            <span className="ent-service-emoji">☁️</span>
                        </div>
                        <div className="ent-service-info">
                            <h3>iCloud+</h3>
                            <p>All your photos, files, notes, and more — securely stored in one place.</p>
                            <span className="ent-price">50 GB free</span>
                            <button className="ent-btn secondary">Learn more</button>
                            <span className="ent-learn">Learn more →</span>
                        </div>
                    </div>

                    <div className="ent-service-card news-card" ref={el => sections.current[7] = el}>
                        <div className="ent-service-icon-wrap news-icon">
                            <span className="ent-service-emoji">📰</span>
                        </div>
                        <div className="ent-service-info">
                            <h3>Apple News+</h3>
                            <p>Hundreds of magazines and leading newspapers. All in one app.</p>
                            <span className="ent-price">₹99/month</span>
                            <button className="ent-btn secondary">Try it free</button>
                            <span className="ent-learn">Learn more →</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Apple One bundling */}
            <section className="ent-bundle-section" ref={el => sections.current[8] = el}>
                <div className="ent-bundle-card">
                    <div className="ent-bundle-icons">
                        <span>📺</span>
                        <span>🎵</span>
                        <span>🎮</span>
                        <span>🏋️</span>
                        <span>☁️</span>
                        <span>📰</span>
                    </div>
                    <h2>Apple One</h2>
                    <p>Bundle up to six Apple services. And enjoy more for less.</p>
                    <div className="ent-bundle-pricing">
                        <div className="ent-plan">
                            <h4>Individual</h4>
                            <p>₹195/mo.</p>
                        </div>
                        <div className="ent-plan featured">
                            <h4>Family</h4>
                            <p>₹365/mo.</p>
                        </div>
                        <div className="ent-plan">
                            <h4>Premier</h4>
                            <p>₹725/mo.</p>
                        </div>
                    </div>
                    <button className="ent-btn primary">Try Apple One free</button>
                </div>
            </section>

            <GetToKnowSection />
        </div>
    );
}

export default Entertainment;
