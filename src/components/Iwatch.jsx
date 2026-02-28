import React, { useEffect } from 'react'
import Nav2 from './Nav2'
import imone from '../assets/Watch/watch_01.svg'
import imtwo from '../assets/Watch/watch_02.svg'
import imthree from '../assets/Watch/watch_03.svg'
import imfour from '../assets/Watch/watch_04.svg'
import imfive from '../assets/Watch/watch_05.svg'
import imsix from '../assets/Watch/watch_06.svg'
import imseven from '../assets/Watch/watch_07.svg'
import imeight from '../assets/Watch/watch_08.svg'
import imos from '../assets/Watch/watch_09.svg'
import IntersectionViewer from './IntersectionViewer'
import ad from '../assets/Watch/xlarge_2x.mp4'
import GetToKnowSection from './GetToKnowSection'
import './css/watch.css'
import watchSeries9 from '../assets/Watch/watch_01.svg'
import watchUltra2 from '../assets/Watch/watch_01.svg'
import watchSE from '../assets/Watch/watch_01.svg'

function Iwatch() {
    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const watchElements = document.querySelectorAll('.watch-parallax');
            
            watchElements.forEach((element, index) => {
                const speed = 0.1 + (index * 0.05);
                element.style.transform = `translateY(${scrollY * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="watch-container">
            <Nav2 
                imone={imone} 
                imthree={imthree} 
                imfour={imfour} 
                imfive={imfive} 
                imsix={imsix} 
                imseven={imseven} 
                imeight={imeight} 
                imos={imos} 
                one="Apple Watch Series 9" 
                two="Apple Watch Ultra 2" 
                three="Apple Watch SE" 
                four="Apple Watch Nike" 
                five="Apple Watch Hermès" 
                six="Apple Watch Studio" 
                seven="Compare" 
                eight="Shop"
            />

            <div className="banner_bar">
                <h1>Apple Watch</h1>
                <p>A healthy leap ahead</p>
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

            <div className="watch-showcase">
                <div className="watch-product watch-parallax">
                    <div className="watch-image-container">
                        <img 
                            src={watchSeries9} 
                            alt="Apple Watch Series 9" 
                            className="watch-image"
                            style={{
                                transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05) rotate(5deg)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                        />
                    </div>
                    <div className="watch-details">
                        <h2>Apple Watch Series 9</h2>
                        <p className="watch-tagline">Smarter. Brighter. Mightier.</p>
                        <p className="watch-price">From ₹41900.00</p>
                        <div className="watch-colors">
                            <span className="color-dot silver"></span>
                            <span className="color-dot gold"></span>
                            <span className="color-dot graphite"></span>
                            <span className="color-dot midnight"></span>
                            <span className="color-dot starlight"></span>
                        </div>
                        <button className="watch-buy-button">Buy</button>
                        <p className="watch-learn-more">Learn more </p>
                    </div>
                </div>

                <div className="watch-product watch-parallax">
                    <div className="watch-image-container">
                        <img 
                            src={watchUltra2} 
                            alt="Apple Watch Ultra 2" 
                            className="watch-image"
                            style={{
                                transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05) rotate(-5deg)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                        />
                    </div>
                    <div className="watch-details">
                        <h2>Apple Watch Ultra 2</h2>
                        <p className="watch-tagline">Next level adventure.</p>
                        <p className="watch-price">From ₹89900.00</p>
                        <div className="watch-colors">
                            <span className="color-dot titanium"></span>
                        </div>
                        <button className="watch-buy-button">Buy</button>
                        <p className="watch-learn-more">Learn more</p>
                    </div>
                </div>

                <div className="watch-product watch-parallax">
                    <div className="watch-image-container">
                        <img 
                            src={watchSE} 
                            alt="Apple Watch SE" 
                            className="watch-image"
                            style={{
                                transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05) rotate(5deg)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                        />
                    </div>
                    <div className="watch-details">
                        <h2>Apple Watch SE</h2>
                        <p className="watch-tagline">A great deal to love.</p>
                        <p className="watch-price">From ₹29900.00</p>
                        <div className="watch-colors">
                            <span className="color-dot midnight"></span>
                            <span className="color-dot starlight"></span>
                            <span className="color-dot silver"></span>
                        </div>
                        <button className="watch-buy-button">Buy</button>
                        <p className="watch-learn-more">Learn more </p>
                    </div>
                </div>
            </div>

            <GetToKnowSection />
        </div>
    )
}

export default Iwatch
