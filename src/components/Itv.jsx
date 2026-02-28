import React, { useEffect, useRef } from 'react'
import Nav2 from './Nav2'
import IntersectionViewer from './IntersectionViewer'
import GetToKnowSection from './GetToKnowSection'
import './css/tv.css'

// Use existing Mac video as placeholder since TV assets are not available
import ad from '../assets/xlarge_2x.mp4'

// Use existing SVG icons as fallback nav icons
import imone from '../assets/mac_accessories_light.svg'
import imthree from '../assets/mac_compare_light.svg'
import imfour from '../assets/mac_shop_light.svg'
import imfive from '../assets/mac_mini_light.svg'
import imsix from '../assets/mac_studio_light.svg'
import imseven from '../assets/mac_os_light.svg'
import imeight from '../assets/imac_light.svg'
import imos from '../assets/displays.svg'

function Itv() {
    const videoTiles = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('video-tile-visible');
                }
            });
        }, { threshold: 0.3 });

        videoTiles.current.forEach(tile => {
            if (tile) observer.observe(tile);
        });

        return () => {
            videoTiles.current.forEach(tile => {
                if (tile) observer.unobserve(tile);
            });
        };
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
                three="Apple Music"
                four="AirPlay"
                five="HomeKit"
                six="HomePod"
                seven="Accessories"
                eight="Shop"
            />

            <div className="banner_bar">
                <h1>Apple TV</h1>
                <p>The Apple experience. <br />Cinematic in every sense.</p>
            </div>

            <div className="ad_video">
                <IntersectionViewer
                    onIntersect={() => console.log('Element is in view!')}
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

            <div className="tv-product-section">
                <div className="tv-product" ref={el => videoTiles.current[0] = el}>
                    <div className="tv-product-image">
                        <div className="tv-product-placeholder">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <rect x="10" y="20" width="100" height="65" rx="8" stroke="#1d1d1f" strokeWidth="3" fill="none" />
                                <rect x="40" y="90" width="40" height="5" rx="2" fill="#1d1d1f" />
                                <circle cx="60" cy="52" r="15" fill="#0071e3" fillOpacity="0.2" />
                                <path d="M55 45L70 52.5L55 60V45Z" fill="#0071e3" />
                            </svg>
                        </div>
                    </div>
                    <div className="tv-product-info">
                        <h2>Apple TV 4K</h2>
                        <p>The Apple experience. Cinematic in every sense.</p>
                        <p className="tv-price">From ₹14900.00</p>
                        <button className="tv-buy-button">Buy</button>
                        <p className="tv-learn-more">Learn more →</p>
                    </div>
                </div>

                <div className="tv-product" ref={el => videoTiles.current[1] = el}>
                    <div className="tv-product-image">
                        <div className="tv-product-placeholder">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <rect x="10" y="10" width="100" height="100" rx="20" fill="#000" />
                                <text x="60" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="600">tv+</text>
                                <text x="60" y="75" textAnchor="middle" fill="#86868b" fontSize="10">Original Stories</text>
                            </svg>
                        </div>
                    </div>
                    <div className="tv-product-info">
                        <h2>Apple TV+</h2>
                        <p>Original stories from the most creative minds in TV and film.</p>
                        <p className="tv-price">₹99.00/month after free trial</p>
                        <button className="tv-buy-button">Try it free</button>
                        <p className="tv-learn-more">Learn more →</p>
                    </div>
                </div>

                <div className="tv-product" ref={el => videoTiles.current[2] = el}>
                    <div className="tv-product-image">
                        <div className="tv-product-placeholder">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                                <rect x="35" y="10" width="50" height="100" rx="12" fill="#1d1d1f" />
                                <circle cx="60" cy="35" r="8" fill="#333" />
                                <rect x="50" y="55" width="20" height="3" rx="1.5" fill="#555" />
                                <rect x="50" y="62" width="20" height="3" rx="1.5" fill="#555" />
                                <rect x="50" y="69" width="20" height="3" rx="1.5" fill="#555" />
                                <circle cx="60" cy="90" r="6" stroke="#555" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                    </div>
                    <div className="tv-product-info">
                        <h2>Siri Remote</h2>
                        <p>A touch of brilliance.</p>
                        <p className="tv-price">₹5900.00</p>
                        <button className="tv-buy-button">Buy</button>
                        <p className="tv-learn-more">Learn more →</p>
                    </div>
                </div>
            </div>

            <GetToKnowSection />
        </div>
    )
}

export default Itv
