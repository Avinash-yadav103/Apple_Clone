import React, { useEffect, useRef } from 'react';
import './css/animations.css';
import './css/iairpods.css';

const IAirPods = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach(ref => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isInViewport = rect.top <= window.innerHeight * 0.8;

          if (isInViewport) {
            ref.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="airpods-container">
      <section className="airpods-hero">
        <div className="airpods-hero-overlay"></div>
        <div className="hero-content" ref={el => sectionRefs.current[0] = el}>
          <h1>AirPods Pro</h1>
          <h2>Adaptive Audio. Now playing.</h2>
          <div className="cta-buttons">
            <button className="apple-button">Buy</button>
            <a href="#learn-more">Learn more →</a>
          </div>
        </div>
      </section>

      <section id="learn-more" className="airpods-sound-section" ref={el => sectionRefs.current[1] = el}>
        <div className="sound-content">
          <h2>Immersive sound experience</h2>
          <p>Active Noise Cancellation and Transparency mode let you control how much of the world you hear.</p>
        </div>
        <div className="sound-visual">
          <div className="sound-wave">
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>
        </div>
      </section>

      <section className="airpods-features">
        <div className="feature" ref={el => sectionRefs.current[2] = el}>
          <div className="feature-content">
            <div className="feature-badge">New</div>
            <h2>Adaptive Audio</h2>
            <p>Automatically tailors noise control to your environment, seamlessly blending Active Noise Cancellation and Transparency mode.</p>
          </div>
          <div className="feature-graphic">
            <div className="feature-circle-graphic">
              <div className="circle-inner">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="28" stroke="#0071e3" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="30" cy="30" r="18" fill="#0071e3" fillOpacity="0.1" />
                  <path d="M25 22L38 30L25 38V22Z" fill="#0071e3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="feature reverse" ref={el => sectionRefs.current[3] = el}>
          <div className="feature-content">
            <h2>Personalized Spatial Audio</h2>
            <p>Sound comes from all around you, creating an immersive experience that's tuned just for your ears.</p>
          </div>
          <div className="feature-graphic">
            <div className="feature-circle-graphic">
              <div className="circle-inner">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="10" fill="#0071e3" />
                  <circle cx="30" cy="30" r="18" stroke="#0071e3" strokeWidth="1.5" fill="none" opacity="0.5" />
                  <circle cx="30" cy="30" r="26" stroke="#0071e3" strokeWidth="1" fill="none" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="feature" ref={el => sectionRefs.current[4] = el}>
          <div className="feature-content">
            <h2>Conversation Awareness</h2>
            <p>AirPods Pro lower media volume and enhance voices when you're speaking to someone nearby.</p>
          </div>
          <div className="feature-graphic">
            <div className="feature-circle-graphic">
              <div className="circle-inner">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <rect x="15" y="20" width="30" height="20" rx="10" fill="#0071e3" fillOpacity="0.15" />
                  <circle cx="25" cy="30" r="6" fill="#0071e3" />
                  <circle cx="38" cy="30" r="4" fill="#0071e3" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="airpods-comparison" ref={el => sectionRefs.current[5] = el}>
        <h2>Which AirPods are right for you?</h2>
        <div className="comparison-table">
          <div className="comparison-item">
            <div className="comparison-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="35" fill="#f5f5f7" />
                <path d="M30 30C30 30 35 25 40 25C45 25 50 30 50 30L50 50C50 50 45 55 40 55C35 55 30 50 30 50Z" fill="#1d1d1f" />
              </svg>
            </div>
            <h3>AirPods</h3>
            <p className="generation">3rd generation</p>
            <p className="comparison-price">₹19900</p>
            <button className="apple-button small">Buy</button>
            <ul className="features-list">
              <li>Up to 6 hours of listening time</li>
              <li>Spatial Audio</li>
              <li>Sweat and water resistant</li>
              <li>MagSafe Charging Case</li>
            </ul>
          </div>

          <div className="comparison-item featured">
            <div className="featured-badge">Most Popular</div>
            <div className="comparison-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="35" fill="#f5f5f7" />
                <path d="M28 28C28 28 34 22 40 22C46 22 52 28 52 28L52 52C52 52 46 58 40 58C34 58 28 52 28 52Z" fill="#1d1d1f" />
                <circle cx="40" cy="40" r="5" fill="#0071e3" />
              </svg>
            </div>
            <h3>AirPods Pro</h3>
            <p className="generation">2nd generation</p>
            <p className="comparison-price">₹24900</p>
            <button className="apple-button small">Buy</button>
            <ul className="features-list">
              <li>Up to 6 hours of listening time</li>
              <li>Active Noise Cancellation</li>
              <li>Adaptive Audio</li>
              <li>Personalized Spatial Audio</li>
              <li>Conversation Awareness</li>
              <li>USB-C Charging</li>
            </ul>
          </div>

          <div className="comparison-item">
            <div className="comparison-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="35" fill="#f5f5f7" />
                <rect x="25" y="22" width="30" height="36" rx="15" fill="#1d1d1f" />
                <rect x="30" y="27" width="20" height="4" rx="2" fill="#f5f5f7" />
              </svg>
            </div>
            <h3>AirPods Max</h3>
            <p className="comparison-price">₹59900</p>
            <button className="apple-button small">Buy</button>
            <ul className="features-list">
              <li>Up to 20 hours of listening time</li>
              <li>High-fidelity audio</li>
              <li>Active Noise Cancellation</li>
              <li>Personalized Spatial Audio</li>
              <li>Digital Crown control</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="airpods-cta" ref={el => sectionRefs.current[6] = el}>
        <h2>AirPods Pro</h2>
        <p className="cta-price">₹24900.00 or ₹4150.00/mo. for 6 mo.</p>
        <button className="apple-button">Buy</button>
      </section>
    </div>
  );
};

export default IAirPods;
