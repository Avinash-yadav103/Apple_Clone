import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/animations.css';
import './css/home.css';
import iphone from '../assets/Iphone/iphone.jpg';
import IpadPro from '../assets/Ipad/pt_ipad_pro__6bgrkek0jnm2_xlarge.png';
import mainipad from './main_ipad.png';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.85) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section - iPhone */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="fade-in">iPhone 16 Pro</h1>
          <h2 className="fade-in delay-200">Hello, Apple Intelligence.</h2>
          <div className="cta-buttons fade-in delay-400">
            <Link to="/iphone" className="learn-more">Learn more →</Link>
            <Link to="/iphone" className="buy-link">Buy →</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={iphone} alt="iPhone 16 Pro" />
        </div>
      </section>

      {/* Product Grid */}
      <section className="product-grid">
        <div className="grid-item ipad animate-on-scroll">
          <div className="content-wrapper">
            <h2>iPad Air</h2>
            <h3>Fresh Air.</h3>
            <div className="links">
              <Link to="/ipadair">Learn more →</Link>
              <Link to="/ipadair">Buy →</Link>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={mainipad} alt="iPad Air" />
          </div>
        </div>

        <div className="grid-item watch animate-on-scroll">
          <div className="content-wrapper">
            <h2>WATCH</h2>
            <h3>SERIES 9</h3>
            <p>Smarter. Brighter. Mightier.</p>
            <div className="links">
              <Link to="/watch">Learn more →</Link>
              <Link to="/watch">Buy →</Link>
            </div>
          </div>
        </div>

        <div className="grid-item mac animate-on-scroll">
          <div className="content-wrapper">
            <h2>MacBook Pro</h2>
            <h3>Mind-blowing. Head-turning.</h3>
            <div className="links">
              <Link to="/mac">Learn more →</Link>
              <Link to="/mac">Buy →</Link>
            </div>
          </div>
        </div>

        <div className="grid-item airpods animate-on-scroll">
          <div className="content-wrapper">
            <h2>AirPods Pro</h2>
            <h3>Adaptive Audio. Now playing.</h3>
            <div className="links">
              <Link to="/air-pods">Learn more →</Link>
              <Link to="/air-pods">Buy →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="promo-section">
        <div className="promo-banner dark animate-on-scroll">
          <div className="promo-content">
            <h2>iPad Pro</h2>
            <h3>Supercharged by M2.</h3>
            <div className="promo-links">
              <Link to="/ipad">Learn more →</Link>
              <Link to="/ipad">Buy →</Link>
            </div>
          </div>
          <div className="promo-image">
            <img src={IpadPro} alt="iPad Pro" />
          </div>
        </div>

        <div className="promo-banner light animate-on-scroll">
          <div className="promo-content">
            <h2>Apple TV+</h2>
            <h3>Get 3 months of Apple TV+ free when you buy an Apple device.</h3>
            <div className="promo-links">
              <Link to="/tv">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;