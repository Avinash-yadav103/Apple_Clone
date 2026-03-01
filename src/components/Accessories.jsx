import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

        return () => observer.disconnect();
    }, []);

    const categories = [
        { emoji: '📱', title: 'Cases & Protection', desc: 'Protect in style.', link: '/accessories' },
        { emoji: '🎧', title: 'Headphones & Speakers', desc: 'Immersive sound.', link: '/air-pods' },
        { emoji: '🔌', title: 'Power & Cables', desc: 'Charge at full speed.', link: '/accessories' },
        { emoji: '⌚', title: 'Watch Bands', desc: 'Wear it your way.', link: '/watch' },
        { emoji: '⌨️', title: 'Keyboards & Mice', desc: 'Type with precision.', link: '/mac' },
        { emoji: '🎒', title: 'Bags & Sleeves', desc: 'Carry with care.', link: '/accessories' },
    ];

    const products = [
        {
            badge: 'New',
            emoji: '📱',
            color: 'Product Red',
            name: 'iPhone 16 Pro Silicone Case with MagSafe',
            price: '₹4900.00',
            bgColor: '#fef2f2',
        },
        {
            badge: null,
            emoji: '⌚',
            color: 'Midnight',
            name: '45mm Midnight Sport Band - S/M',
            price: '₹4500.00',
            bgColor: '#f0f0f5',
        },
        {
            badge: 'Popular',
            emoji: '🔋',
            color: 'White',
            name: 'MagSafe Charger',
            price: '₹4500.00',
            bgColor: '#f5f5f7',
        },
        {
            badge: null,
            emoji: '📍',
            color: 'Silver',
            name: 'AirTag',
            price: '₹3490.00',
            bgColor: '#f5f5f7',
        },
        {
            badge: 'New',
            emoji: '🎧',
            color: 'Midnight',
            name: 'AirPods Pro (2nd generation)',
            price: '₹24900.00',
            bgColor: '#f0f0f5',
        },
        {
            badge: null,
            emoji: '🔌',
            color: 'White',
            name: 'USB-C to Lightning Cable (1 m)',
            price: '₹1900.00',
            bgColor: '#f5f5f7',
        },
    ];

    return (
        <div className="accessories-page">
            <div className="banner_bar">
                <h1>Accessories</h1>
                <p>Mix. Match. MagSafe.</p>
            </div>

            {/* Shop by category */}
            <section className="acc-categories" ref={el => sections.current[0] = el}>
                <h2 className="acc-section-title">Shop by Category</h2>
                <div className="acc-category-grid">
                    {categories.map((cat, i) => (
                        <Link to={cat.link} key={cat.title} className="acc-cat-card">
                            <span className="acc-cat-emoji">{cat.emoji}</span>
                            <h3>{cat.title}</h3>
                            <p>{cat.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured products */}
            <section className="acc-featured" ref={el => sections.current[1] = el}>
                <h2 className="acc-section-title">Featured Accessories</h2>
                <div className="acc-featured-grid">
                    {products.map((product, i) => (
                        <div className="acc-product-card" key={product.name} ref={el => sections.current[2 + i] = el}>
                            {product.badge && <div className="acc-product-badge">{product.badge}</div>}
                            <div className="acc-product-visual" style={{ background: product.bgColor }}>
                                <span className="acc-product-emoji">{product.emoji}</span>
                            </div>
                            <div className="acc-product-info">
                                <span className="acc-color">{product.color}</span>
                                <h3 className="acc-name">{product.name}</h3>
                                <p className="acc-price">{product.price}</p>
                                <button className="acc-buy">Add to Bag</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trade-in banner */}
            <section className="acc-trade-in" ref={el => sections.current[8] = el}>
                <div className="acc-trade-card">
                    <h2>Apple Trade In</h2>
                    <p>Get credit towards your next Apple accessory when you trade in an eligible device.</p>
                    <span className="acc-trade-link">Find your trade-in value →</span>
                </div>
            </section>

            <GetToKnowSection />
        </div>
    );
}

export default Accessories;
