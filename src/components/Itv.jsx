import React, { useEffect, useRef } from 'react'
import Nav2 from './Nav2'
import IntersectionViewer from './IntersectionViewer'
import GetToKnowSection from './GetToKnowSection'
import './css/tv.css'

// Use existing Mac video as placeholder since TV assets are not available
import ad from '../assets/xlarge_2x.mp4'

// Safe icon imports
let imone, imthree, imfour, imfive, imsix, imseven, imeight, imos;
try { imone = new URL('../assets/mac_accessories_light.svg', import.meta.url).href } catch(e) { imone = '' }
try { imthree = new URL('../assets/mac_compare_light.svg', import.meta.url).href } catch(e) { imthree = '' }
try { imfour = new URL('../assets/mac_shop_light.svg', import.meta.url).href } catch(e) { imfour = '' }
try { imfive = new URL('../assets/mac_mini_light.svg', import.meta.url).href } catch(e) { imfive = '' }
try { imsix = new URL('../assets/mac_studio_light.svg', import.meta.url).href } catch(e) { imsix = '' }
try { imseven = new URL('../assets/mac_os_light.svg', import.meta.url).href } catch(e) { imseven = '' }
try { imeight = new URL('../assets/imac_light.svg', import.meta.url).href } catch(e) { imeight = '' }
try { imos = new URL('../assets/displays.svg', import.meta.url).href } catch(e) { imos = '' }

function Itv() {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('tv-visible');
                }
            });
        }, { threshold: 0.15 });

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="tv-container">
            <Nav2
                imone={imone}
                imthree={imthree}
                imfour={imfour}
                imfive={imfive}
                imsix={imsix}
                imseven={imseven}
                imeight={imeight}
                imos={imos}
                one="Apple TV 4K"
                two="Apple TV+"
                three="AirPlay"
                four="HomePod"
                five="HomePod mini"
                six="Siri Remote"
                seven="Accessories"
                eight="Shop"
            />

            <div className="banner_bar">
                <h1>Apple TV</h1>
                <p>The Apple experience. Cinematic in every sense.</p>
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

            {/* Product Cards */}
            <div className="tv-explore-section">
                <h2 className="tv-explore-title">Explore TV & Home.</h2>

                <div className="tv-product-grid">
                    {/* Apple TV 4K */}
                    <div className="tv-card dark" ref={el => sectionRefs.current[0] = el}>
                        <div className="tv-card-visual">
                            <div className="tv-box-illustration">
                                <div className="tv-box-body">
                                    <div className="tv-box-top"></div>
                                    <div className="tv-box-logo">tv</div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card-info">
                            <h3>Apple TV 4K</h3>
                            <p className="tv-card-tagline">The Apple experience. Cinematic in every sense.</p>
                            <p className="tv-card-price">From ₹14900.00</p>
                        </div>
                        <div className="tv-card-features">
                            <span className="tv-feature-tag">A15 Bionic chip</span>
                            <span className="tv-feature-tag">Dolby Vision</span>
                            <span className="tv-feature-tag">Dolby Atmos</span>
                            <span className="tv-feature-tag">HDR10+</span>
                        </div>
                        <div className="tv-card-actions">
                            <button className="tv-buy-btn">Buy</button>
                            <span className="tv-learn-link">Learn more →</span>
                        </div>
                    </div>

                    {/* Apple TV+ */}
                    <div className="tv-card" ref={el => sectionRefs.current[1] = el}>
                        <div className="tv-card-visual">
                            <div className="tvplus-illustration">
                                <div className="tvplus-screen">
                                    <div className="tvplus-shimmer"></div>
                                    <div className="tvplus-logo">tv+</div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card-info">
                            <h3>Apple TV+</h3>
                            <p className="tv-card-tagline">Original stories from the most creative minds.</p>
                            <p className="tv-card-price">₹99/month after free trial</p>
                        </div>
                        <div className="tv-card-features">
                            <span className="tv-feature-tag">Award-winning originals</span>
                            <span className="tv-feature-tag">4K HDR</span>
                            <span className="tv-feature-tag">Family sharing</span>
                        </div>
                        <div className="tv-card-actions">
                            <button className="tv-buy-btn">Try it free</button>
                            <span className="tv-learn-link">Learn more →</span>
                        </div>
                    </div>

                    {/* HomePod */}
                    <div className="tv-card" ref={el => sectionRefs.current[2] = el}>
                        <div className="tv-card-visual">
                            <div className="homepod-illustration">
                                <div className="homepod-body">
                                    <div className="homepod-mesh"></div>
                                    <div className="homepod-top">
                                        <div className="homepod-display">
                                            <div className="homepod-orb"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tv-card-info">
                            <h3>HomePod</h3>
                            <p className="tv-card-tagline">Profound sound. Intelligent home.</p>
                            <p className="tv-card-price">From ₹32900.00</p>
                        </div>
                        <div className="tv-card-features">
                            <span className="tv-feature-tag">Spatial Audio</span>
                            <span className="tv-feature-tag">Siri</span>
                            <span className="tv-feature-tag">Smart home hub</span>
                        </div>
                        <div className="tv-card-actions">
                            <button className="tv-buy-btn">Buy</button>
                            <span className="tv-learn-link">Learn more →</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Streaming section */}
            <div className="tv-streaming-section" ref={el => sectionRefs.current[3] = el}>
                <div className="tv-streaming-header">
                    <h2>All your entertainment. One centre stage.</h2>
                    <p>Enjoy premium shows, movies, and live sports on the Apple TV app — available across all your devices.</p>
                </div>
                <div className="tv-streaming-grid">
                    {[
                        { name: 'Apple TV+', desc: 'Originals', color: '#000', textColor: '#fff', icon: 'tv+' },
                        { name: 'MLS Season Pass', desc: 'Live football', color: '#1d1d1f', textColor: '#fff', icon: '⚽' },
                        { name: 'Apple Music', desc: '100M+ songs', color: '#fa233b', textColor: '#fff', icon: '♪' },
                        { name: 'Fitness+', desc: 'Workouts', color: '#000', textColor: '#aaff00', icon: '●' },
                    ].map((service, i) => (
                        <div key={service.name} className="tv-stream-card" style={{ background: service.color }}>
                            <span className="tv-stream-icon" style={{ color: service.textColor }}>{service.icon}</span>
                            <h4 style={{ color: service.textColor }}>{service.name}</h4>
                            <p style={{ color: service.textColor, opacity: 0.7 }}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <GetToKnowSection />
        </div>
    )
}

export default Itv
