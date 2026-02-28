import React, { useEffect, useRef } from 'react'
import Nav2 from './Nav2'
import imtwo from '../assets/Iphone/iphone_16_01.svg'
import imthree from '../assets/Iphone/iphone_16_02.svg'
import imfour from '../assets/Iphone/iphone_15_03.svg'
import imfive from '../assets/Iphone/iphone_14_04.svg'
import imsix from '../assets/Iphone/iphone_se_05.svg'
import imseven from '../assets/Iphone/iphone_compare_06.svg'
import imeight from '../assets/Iphone/airpods_light__07.svg'
import imos from '../assets/Iphone/airtag_light__08.svg'
import IntersectionViewer from './IntersectionViewer'
import ad from '../assets/Iphone/xlarge_2x.mp4'
import GetToKnowSection from './GetToKnowSection'
import './css/iphone.css'
import iphone from '../assets/Iphone/iphone.jpg'

function Iphone() {
    const phoneModels = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            phoneModels.current.forEach((model, index) => {
                if (!model) return;

                const offset = model.offsetTop;
                const height = model.clientHeight;

                if (scrollPosition > offset - window.innerHeight &&
                    scrollPosition < offset + height) {
                    const parallaxValue = (scrollPosition - (offset - window.innerHeight)) * 0.1;
                    const rotateValue = index % 2 === 0 ? parallaxValue * 0.05 : -parallaxValue * 0.05;

                    const imgEl = model.querySelector('.iphone-image');
                    if (imgEl) {
                        imgEl.style.transform =
                            `translateY(${parallaxValue}px) rotate(${rotateValue}deg)`;
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

            <div className="iphone-models">
                <div className="iphone-model" ref={el => phoneModels.current[0] = el}>
                    <div className="iphone-details">
                        <div className="iphone-title">
                            <h2>iPhone 16 Pro</h2>
                            <p className="iphone-tagline">Hello, Apple Intelligence.</p>
                        </div>
                        <div className="iphone-pricing">
                            <p className="price">From ₹134900.00</p>
                        </div>
                        <div className="iphone-colors">
                            <span className="color-circle natural"></span>
                            <span className="color-circle blue"></span>
                            <span className="color-circle white"></span>
                            <span className="color-circle black"></span>
                        </div>
                        <div className="iphone-actions">
                            <button className="buy-button">Buy</button>
                            <p className="learn-more">Learn more →</p>
                        </div>
                    </div>
                    <div className="iphone-image-container">
                        <img
                            src={iphone}
                            alt="iPhone 16 Pro"
                            className="iphone-image"
                        />
                    </div>
                </div>

                <div className="iphone-model" ref={el => phoneModels.current[1] = el}>
                    <div className="iphone-image-container">
                        <img
                            src={iphone}
                            alt="iPhone 16"
                            className="iphone-image"
                        />
                    </div>
                    <div className="iphone-details">
                        <div className="iphone-title">
                            <h2>iPhone 16</h2>
                            <p className="iphone-tagline">A new satisfying way to interact.</p>
                        </div>
                        <div className="iphone-pricing">
                            <p className="price">From ₹79900.00</p>
                        </div>
                        <div className="iphone-colors">
                            <span className="color-circle pink"></span>
                            <span className="color-circle yellow"></span>
                            <span className="color-circle green"></span>
                            <span className="color-circle blue"></span>
                            <span className="color-circle black"></span>
                        </div>
                        <div className="iphone-actions">
                            <button className="buy-button">Buy</button>
                            <p className="learn-more">Learn more →</p>
                        </div>
                    </div>
                </div>

                <div className="iphone-model" ref={el => phoneModels.current[2] = el}>
                    <div className="iphone-details">
                        <div className="iphone-title">
                            <h2>iPhone 15</h2>
                            <p className="iphone-tagline">As an icon. In every way.</p>
                        </div>
                        <div className="iphone-pricing">
                            <p className="price">From ₹59900.00</p>
                        </div>
                        <div className="iphone-colors">
                            <span className="color-circle blue"></span>
                            <span className="color-circle purple"></span>
                            <span className="color-circle yellow"></span>
                            <span className="color-circle midnight"></span>
                            <span className="color-circle starlight"></span>
                        </div>
                        <div className="iphone-actions">
                            <button className="buy-button">Buy</button>
                            <p className="learn-more">Learn more →</p>
                        </div>
                    </div>
                    <div className="iphone-image-container">
                        <img
                            src={iphone}
                            alt="iPhone 15"
                            className="iphone-image"
                        />
                    </div>
                </div>

                <div className="iphone-model" ref={el => phoneModels.current[3] = el}>
                    <div className="iphone-image-container">
                        <img
                            src={iphone}
                            alt="iPhone SE"
                            className="iphone-image"
                        />
                    </div>
                    <div className="iphone-details">
                        <div className="iphone-title">
                            <h2>iPhone SE</h2>
                            <p className="iphone-tagline">Serious power. Serious value.</p>
                        </div>
                        <div className="iphone-pricing">
                            <p className="price">From ₹49900.00</p>
                        </div>
                        <div className="iphone-colors">
                            <span className="color-circle midnight"></span>
                            <span className="color-circle starlight"></span>
                            <span className="color-circle red"></span>
                        </div>
                        <div className="iphone-actions">
                            <button className="buy-button">Buy</button>
                            <p className="learn-more">Learn more →</p>
                        </div>
                    </div>
                </div>
            </div>

            <GetToKnowSection />
        </div>
    )
}

export default Iphone
