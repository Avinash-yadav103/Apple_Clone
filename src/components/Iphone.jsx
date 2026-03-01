import React, { useEffect, useRef } from 'react'
import Nav2 from './Nav2'
import IntersectionViewer from './IntersectionViewer'
import ad from '../assets/Iphone/xlarge_2x.mp4'
import GetToKnowSection from './GetToKnowSection'
import './css/iphone.css'
import iphone from '../assets/Iphone/iphone.jpg'

// Try importing Nav2 icons, fallback gracefully
let imtwo, imthree, imfour, imfive, imsix, imseven, imeight, imos;
try { imtwo = new URL('../assets/Iphone/iphone_16_01.svg', import.meta.url).href } catch(e) { imtwo = '' }
try { imthree = new URL('../assets/Iphone/iphone_16_02.svg', import.meta.url).href } catch(e) { imthree = '' }
try { imfour = new URL('../assets/Iphone/iphone_15_03.svg', import.meta.url).href } catch(e) { imfour = '' }
try { imfive = new URL('../assets/Iphone/iphone_14_04.svg', import.meta.url).href } catch(e) { imfive = '' }
try { imsix = new URL('../assets/Iphone/iphone_se_05.svg', import.meta.url).href } catch(e) { imsix = '' }
try { imseven = new URL('../assets/Iphone/iphone_compare_06.svg', import.meta.url).href } catch(e) { imseven = '' }
try { imeight = new URL('../assets/Iphone/airpods_light__07.svg', import.meta.url).href } catch(e) { imeight = '' }
try { imos = new URL('../assets/Iphone/airtag_light__08.svg', import.meta.url).href } catch(e) { imos = '' }

function Iphone() {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('iphone-visible');
                }
            });
        }, { threshold: 0.15 });

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const models = [
        {
            name: 'iPhone 16 Pro',
            tagline: 'Hello, Apple Intelligence.',
            chip: 'A18 Pro chip',
            price: '₹134900.00',
            colors: [
                { name: 'Desert Titanium', color: '#c4a882' },
                { name: 'Natural Titanium', color: '#c2beb6' },
                { name: 'White Titanium', color: '#f2f1ed' },
                { name: 'Black Titanium', color: '#3c3b37' },
            ],
            features: ['48MP Fusion camera', '5x Telephoto', 'Titanium design', 'Action button'],
            badge: 'Pro',
            dark: true,
        },
        {
            name: 'iPhone 16',
            tagline: 'A total powerhouse.',
            chip: 'A18 chip',
            price: '₹79900.00',
            colors: [
                { name: 'Ultramarine', color: '#4654c4' },
                { name: 'Teal', color: '#3f8e8e' },
                { name: 'Pink', color: '#e8a0b4' },
                { name: 'White', color: '#f2f1ec' },
                { name: 'Black', color: '#3b3b3d' },
            ],
            features: ['48MP Fusion camera', 'Camera Control', 'All-day battery', 'Apple Intelligence'],
            badge: null,
            dark: false,
        },
        {
            name: 'iPhone 15',
            tagline: 'As iconic as ever.',
            chip: 'A16 Bionic chip',
            price: '₹59900.00',
            colors: [
                { name: 'Blue', color: '#d4e1ef' },
                { name: 'Pink', color: '#f6d1cf' },
                { name: 'Yellow', color: '#f6e6a3' },
                { name: 'Green', color: '#d3e6d1' },
                { name: 'Black', color: '#3b3b3d' },
            ],
            features: ['48MP Main camera', 'Dynamic Island', 'USB-C', 'Superfast 5G'],
            badge: null,
            dark: false,
        },
        {
            name: 'iPhone SE',
            tagline: 'Serious power. Serious value.',
            chip: 'A15 Bionic chip',
            price: '₹49900.00',
            colors: [
                { name: 'Midnight', color: '#2e2e30' },
                { name: 'Starlight', color: '#f3f0e8' },
                { name: 'Red', color: '#c13d3a' },
            ],
            features: ['12MP camera', 'Touch ID', '4.7-inch display', '5G capable'],
            badge: null,
            dark: false,
        },
    ];

    return (
        <div className="iphone-container">
            <Nav2
                imone={imtwo}
                imthree={imthree}
                imfour={imfour}
                imfive={imfive}
                imsix={imsix}
                imseven={imseven}
                imeight={imeight}
                imos={imos}
                one="iPhone 16 Pro"
                two="iPhone 16"
                three="iPhone 15"
                four="iPhone SE"
                five="Compare"
                six="Apple Intelligence"
                seven="AirPods"
                eight="Accessories"
            />

            <div className="banner_bar">
                <h1>iPhone</h1>
                <p>Designed to be loved.</p>
            </div>

            <div className="ad_video">
                <IntersectionViewer
                    onIntersect={() => {}}
                    options={{ rootMargin: '0px', threshold: 0.5 }}
                >
                    {(isInView) => (
                        <div className='vido_tag_in'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'all 1s ease',
                            }}
                        >
                            <video autoPlay muted loop style={{
                                width: isInView ? '95%' : '100%',
                                borderRadius: isInView ? '40px' : '0px',
                                transition: 'all 0.7s ease-in-out',
                            }}>
                                <source src={ad} type="video/mp4" />
                            </video>
                        </div>
                    )}
                </IntersectionViewer>
            </div>

            {/* iPhone model showcase cards */}
            <div className="iphone-explore-section">
                <div className="iphone-explore-header">
                    <h2>Explore the lineup.</h2>
                </div>

                <div className="iphone-lineup-grid">
                    {models.map((model, index) => (
                        <div
                            key={model.name}
                            className={`iphone-lineup-card ${model.dark ? 'dark' : 'light'}`}
                            ref={el => sectionRefs.current[index] = el}
                        >
                            {model.badge && <span className="iphone-card-badge">{model.badge}</span>}

                            <div className="iphone-card-visual">
                                <img src={iphone} alt={model.name} className="iphone-card-img" />
                            </div>

                            <div className="iphone-card-colors">
                                {model.colors.map(c => (
                                    <span
                                        key={c.name}
                                        className="iphone-color-dot"
                                        style={{ backgroundColor: c.color }}
                                        title={c.name}
                                    />
                                ))}
                            </div>

                            <div className="iphone-card-info">
                                <h3>{model.name}</h3>
                                <p className="iphone-card-tagline">{model.tagline}</p>
                                <p className="iphone-card-chip">{model.chip}</p>
                                <p className="iphone-card-price">From {model.price}</p>
                            </div>

                            <div className="iphone-card-features">
                                {model.features.map(f => (
                                    <span key={f} className="iphone-feature-tag">{f}</span>
                                ))}
                            </div>

                            <div className="iphone-card-actions">
                                <button className="iphone-buy-btn">Buy</button>
                                <span className="iphone-learn-link">Learn more →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Feature highlight sections */}
            <div className="iphone-features-section">
                <div className="iphone-feature-block" ref={el => sectionRefs.current[4] = el}>
                    <div className="iphone-feature-text">
                        <span className="feature-label">Camera</span>
                        <h2>48MP Fusion camera.</h2>
                        <p>Our most advanced dual‑camera system ever. The 48MP Fusion camera shoots in super‑high resolution — so it's easy to crop a great photo out of a great photo.</p>
                    </div>
                    <div className="iphone-feature-visual camera-visual">
                        <div className="camera-lens-ring">
                            <div className="camera-lens-inner">
                                <div className="camera-lens-core"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="iphone-feature-block reverse" ref={el => sectionRefs.current[5] = el}>
                    <div className="iphone-feature-text">
                        <span className="feature-label">Performance</span>
                        <h2>A18 Pro chip. Game changer.</h2>
                        <p>The A18 Pro chip delivers groundbreaking performance for the most demanding workflows and the most immersive AAA games.</p>
                    </div>
                    <div className="iphone-feature-visual chip-visual">
                        <div className="chip-graphic">
                            <div className="chip-die">
                                <div className="chip-grid">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="chip-cell" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                    ))}
                                </div>
                                <span className="chip-label">A18 Pro</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="iphone-feature-block" ref={el => sectionRefs.current[6] = el}>
                    <div className="iphone-feature-text">
                        <span className="feature-label">Battery</span>
                        <h2>The longest battery life ever on iPhone.</h2>
                        <p>iPhone 16 Pro gives you up to 33 hours of video playback — the best battery life ever on iPhone.</p>
                    </div>
                    <div className="iphone-feature-visual battery-visual">
                        <div className="battery-graphic">
                            <div className="battery-body">
                                <div className="battery-fill"></div>
                            </div>
                            <div className="battery-cap"></div>
                            <span className="battery-text">33hr</span>
                        </div>
                    </div>
                </div>
            </div>

            <GetToKnowSection />
        </div>
    )
}

export default Iphone
