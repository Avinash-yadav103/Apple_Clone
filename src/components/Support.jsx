import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/support.css';
import GetToKnowSection from './GetToKnowSection';

function Support() {
    const sections = useRef([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);

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

        return () => observer.disconnect();
    }, []);

    const products = [
        { emoji: '📱', name: 'iPhone', link: '/iphone' },
        { emoji: '💻', name: 'Mac', link: '/mac' },
        { emoji: '📱', name: 'iPad', link: '/ipad' },
        { emoji: '⌚', name: 'Watch', link: '/watch' },
        { emoji: '🎧', name: 'AirPods', link: '/air-pods' },
        { emoji: '🎵', name: 'Music', link: '/entertainment' },
        { emoji: '📺', name: 'TV', link: '/tv' },
    ];

    const topics = [
        { icon: '🔑', title: 'Apple ID & Password', desc: 'Update account settings, reset password, manage security.' },
        { icon: '🔄', title: 'Software Updates', desc: 'Get the latest features and security patches.' },
        { icon: '🛡️', title: 'Warranty & Repair', desc: 'Check coverage and service options for your device.' },
        { icon: '💳', title: 'Billing & Subscriptions', desc: 'Manage subscriptions, view purchase history.' },
        { icon: '☁️', title: 'iCloud', desc: 'Set up, manage storage, and get the most from iCloud.' },
        { icon: '🔒', title: 'Privacy & Security', desc: 'Keep your data safe with Apple privacy features.' },
    ];

    const quickLinks = [
        'Check your Apple warranty',
        'Reset your Apple ID password',
        'Update iOS on your iPhone',
        'Set up a new device',
        'Cancel a subscription',
        'Get AppleCare+',
    ];

    return (
        <div className="support-page">
            {/* Hero with search */}
            <section className="sup-hero" ref={el => sections.current[0] = el}>
                <div className="sup-hero-content">
                    <h1>Apple Support</h1>
                    <div className={`sup-search-container ${searchFocused ? 'sup-search-focused' : ''}`}>
                        <div className="sup-search-icon">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="#86868b">
                                <path d="M21 19.5L16.5 15C17.5 13.5 18 11.5 18 9.5C18 4.8 14.2 1 9.5 1C4.8 1 1 4.8 1 9.5C1 14.2 4.8 18 9.5 18C11.5 18 13.4 17.5 14.9 16.5L19.5 21L21 19.5ZM9.5 16C5.9 16 3 13.1 3 9.5C3 5.9 5.9 3 9.5 3C13.1 3 16 5.9 16 9.5C16 13.1 13.1 16 9.5 16Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for topics, products, and more"
                            className="sup-search-input"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                        />
                    </div>

                    {/* Quick links */}
                    <div className="sup-quick-links">
                        {quickLinks.map((link, i) => (
                            <span key={i} className="sup-quick-link" onClick={() => setSearchQuery(link)}>
                                {link}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Browse products */}
            <section className="sup-products" ref={el => sections.current[1] = el}>
                <h2 className="sup-section-title">Get support for your products</h2>
                <div className="sup-products-grid">
                    {products.map((p, i) => (
                        <Link to={p.link} key={p.name} className="sup-product-card">
                            <div className="sup-product-icon">
                                <span>{p.emoji}</span>
                            </div>
                            <h3>{p.name}</h3>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Popular topics */}
            <section className="sup-topics" ref={el => sections.current[2] = el}>
                <h2 className="sup-section-title">Popular Topics</h2>
                <div className="sup-topics-grid">
                    {topics.map((topic, i) => (
                        <div className="sup-topic-card" key={topic.title} ref={el => sections.current[4 + i] = el}>
                            <span className="sup-topic-icon">{topic.icon}</span>
                            <h3>{topic.title}</h3>
                            <p>{topic.desc}</p>
                            <span className="sup-topic-link">Learn more →</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact support */}
            <section className="sup-get-support" ref={el => sections.current[3] = el}>
                <div className="sup-support-content">
                    <h2>Get Support</h2>
                    <p className="sup-support-subtitle">Choose how you'd like to connect with us.</p>

                    <div className="sup-contact-options">
                        <div className="sup-contact-card">
                            <div className="sup-contact-icon-wrap">
                                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <h3>Call Apple Support</h3>
                            <p>Talk to an Apple Support Advisor by phone.</p>
                            <a href="tel:000800-040-1966" className="sup-btn">000800-040-1966</a>
                        </div>

                        <div className="sup-contact-card">
                            <div className="sup-contact-icon-wrap">
                                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round">
                                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                                </svg>
                            </div>
                            <h3>Chat with us</h3>
                            <p>Message with an Apple Support Advisor online.</p>
                            <button className="sup-btn">Start Chat</button>
                        </div>

                        <div className="sup-contact-card">
                            <div className="sup-contact-icon-wrap">
                                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3>Visit a Store</h3>
                            <p>Book a Genius Bar appointment at your nearest Apple Store.</p>
                            <button className="sup-btn">Find a Store</button>
                        </div>
                    </div>
                </div>
            </section>

            <GetToKnowSection />
        </div>
    );
}

export default Support;
