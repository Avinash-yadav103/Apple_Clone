import React from 'react'
import Nav2 from './Nav2'
import imone from '../assets/mac_accessories_light.svg'
import imtwo from '../assets/macbookair_light.svg'
import imthree from '../assets/macbook_pro_light.svg'
import imfour from '../assets/mac_studio_light.svg'
import imfive from '../assets/mac_shop_light.svg'
import imsix from '../assets/mac_os_light.svg'
import imseven from '../assets/mac_mini_light.svg'
import imeight from '../assets/mac_compare_light.svg'
import imos from '../assets/imac_light.svg'
import IntersectionViewer from './IntersectionViewer'
import ad from '../assets/xlarge_2x.mp4'
import GetToKnowSection from './GetToKnowSection'
import './css/mac.css'

function Mac(props) {
    return (
        <div className="mac-container">
            <Nav2 imone={imtwo} imthree={imthree} imfour={imfour} imfive={imfive} imsix={imsix} imseven={imseven} imeight={imeight} imos={imos} one="MacBook Air" two="MacBook Pro" three="iMac" four="Mac Mini" five="Mac Studio" six="Mac Pro" os="macOS" seven="Compare" eight="Shop" />

            <div className="banner_bar">
                <h1>Mac</h1>
                <p>If you can dream it, <br />Mac can do it.</p>
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
                            <video autoPlay muted style={{
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

            {/* Mac Products Grid */}
            <div className="mac-products-section">
                <h2 className="mac-section-title">Explore the lineup.</h2>
                <div className="mac-products-grid">
                    <div className="mac-product-card">
                        <div className="mac-product-icon">
                            <img src={imtwo} alt="MacBook Air" />
                        </div>
                        <h3>MacBook Air</h3>
                        <p className="mac-product-tagline">Strikingly thin and fast.</p>
                        <p className="mac-product-price">From ₹114900.00</p>
                        <button className="mac-buy-btn">Buy</button>
                    </div>
                    <div className="mac-product-card">
                        <div className="mac-product-icon">
                            <img src={imthree} alt="MacBook Pro" />
                        </div>
                        <h3>MacBook Pro</h3>
                        <p className="mac-product-tagline">Mind-blowing. Head-turning.</p>
                        <p className="mac-product-price">From ₹169900.00</p>
                        <button className="mac-buy-btn">Buy</button>
                    </div>
                    <div className="mac-product-card">
                        <div className="mac-product-icon">
                            <img src={imos} alt="iMac" />
                        </div>
                        <h3>iMac</h3>
                        <p className="mac-product-tagline">All-in-one. For all.</p>
                        <p className="mac-product-price">From ₹134900.00</p>
                        <button className="mac-buy-btn">Buy</button>
                    </div>
                    <div className="mac-product-card">
                        <div className="mac-product-icon">
                            <img src={imseven} alt="Mac Mini" />
                        </div>
                        <h3>Mac mini</h3>
                        <p className="mac-product-tagline">More muscle. More hustle.</p>
                        <p className="mac-product-price">From ₹59900.00</p>
                        <button className="mac-buy-btn">Buy</button>
                    </div>
                </div>
            </div>

            <GetToKnowSection />
        </div>
    )
}

export default Mac
