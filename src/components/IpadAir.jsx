import React from 'react'
import Nav2 from './Nav2'
import './css/ipad.css'
import './css/ipadair.css'
import imone from '../assets/Ipad/1.svg'
import imthree from '../assets/Ipad/3.svg'
import imfour from '../assets/Ipad/4.svg'
import imfive from '../assets/Ipad/5.svg'
import imsix from '../assets/Ipad/6.svg'
import imseven from '../assets/Ipad/7.svg'
import imeight from '../assets/Ipad/8.svg'
import imos from '../assets/Ipad/os.svg'
import logo from './ipadairlogo.png'
import mainipad from './main_ipad.png'
import GetToKnowSection from './GetToKnowSection'

function IpadAir() {
  return (
    <div className="ipadair-page">
      <Nav2
        imone={imone}
        imthree={imthree}
        imfour={imfour}
        imfive={imfive}
        imsix={imsix}
        imseven={imseven}
        imeight={imeight}
        imos={imos}
        one="iPad Pro"
        two="iPad Air"
        three="iPad"
        four="iPad Mini"
        five="Compare"
        six="Apple Pencil"
        os="iPadOS"
        seven="Accessories"
        eight="Shop"
      />

      <div className="banner_bar">
        <h1>iPad Air</h1>
        <p>Fresh Air.<br />Thin Air. Light Air.</p>
      </div>

      {/* Hero Section */}
      <div className="ipadair-hero-section">
        <div className="ipadair-logo-container">
          <img src={logo} alt="iPad Air Logo" className="ipadair-logo" />
        </div>
        <div className="ipadair-title-container">
          <p className="ipadair-title-text">Fresh Air</p>
        </div>
        <div className="ipadair-image-container">
          <img src={mainipad} alt="iPad Air" className="ipadair-main-image" />
        </div>
        <div className="ipadair-cta">
          <button className="ipadair-buy-btn">Buy</button>
          <p className="ipadair-learn-more">Learn more →</p>
        </div>
        <p className="ipadair-price">From ₹59900.00*</p>
      </div>

      {/* Features Section */}
      <div className="ipadair-features">
        <div className="ipadair-feature-grid">
          <div className="ipadair-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="#0071e3" fillOpacity="0.1" />
                <path d="M24 14L30 20H26V28H22V20H18L24 14Z" fill="#0071e3" />
                <path d="M16 30H32V34H16V30Z" fill="#0071e3" />
              </svg>
            </div>
            <h3>M2 Chip</h3>
            <p>Supercharged by the Apple M2 chip. Faster performance and all-day battery life.</p>
          </div>
          <div className="ipadair-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="#0071e3" fillOpacity="0.1" />
                <rect x="12" y="16" width="24" height="16" rx="2" stroke="#0071e3" strokeWidth="2" fill="none" />
                <circle cx="24" cy="24" r="4" fill="#0071e3" />
              </svg>
            </div>
            <h3>10.9" Liquid Retina</h3>
            <p>Stunning Liquid Retina display with True Tone and P3 wide colour.</p>
          </div>
          <div className="ipadair-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="#0071e3" fillOpacity="0.1" />
                <path d="M24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34C29.52 34 34 29.52 34 24" stroke="#0071e3" strokeWidth="2" fill="none" />
                <path d="M30 18L34 14L38 18" stroke="#0071e3" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <h3>5G Connectivity</h3>
            <p>Ultrafast wireless connectivity so you can stay connected everywhere.</p>
          </div>
          <div className="ipadair-feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="#0071e3" fillOpacity="0.1" />
                <path d="M20 16L32 24L20 32V16Z" fill="#0071e3" />
              </svg>
            </div>
            <h3>Apple Pencil</h3>
            <p>Compatible with Apple Pencil for drawing, note-taking and more.</p>
          </div>
        </div>
      </div>

      {/* Color Options */}
      <div className="ipadair-colors-section">
        <h2>Choose your finish.</h2>
        <div className="ipadair-color-options">
          <div className="ipadair-color-swatch" style={{ backgroundColor: '#E5E0D8' }}>
            <span>Starlight</span>
          </div>
          <div className="ipadair-color-swatch" style={{ backgroundColor: '#D7E5E6' }}>
            <span>Blue</span>
          </div>
          <div className="ipadair-color-swatch" style={{ backgroundColor: '#F5F5F7' }}>
            <span>Silver</span>
          </div>
          <div className="ipadair-color-swatch" style={{ backgroundColor: '#6B696E' }}>
            <span>Space Grey</span>
          </div>
        </div>
      </div>

      <GetToKnowSection />
    </div>
  )
}

export default IpadAir
