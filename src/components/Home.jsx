import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/animations.css';
import './css/home.css';

let iphone = '';
try { iphone = new URL('../assets/Iphone/iphone.jpg', import.meta.url).href; } catch(e) {}
let IpadPro = '';
try { IpadPro = new URL('../assets/Ipad/pt_ipad_pro__6bgrkek0jnm2_xlarge.png', import.meta.url).href; } catch(e) {}
let mainipad = '';
try { mainipad = new URL('./main_ipad.png', import.meta.url).href; } catch(e) {}

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section - iPhone */}
      <section className="hero-section">
        {iphone && (
          <div className="hero-image">
            <img src={iphone} alt="iPhone 16 Pro" />
          </div>
        )}
        <div className="hero-content">
          <h1 className="fade-in">iPhone 16 Pro</h1>
          <h2 className="fade-in delay-200">Hello, Apple Intelligence.</h2>
          <div className="cta-buttons fade-in delay-400">
            <Link to="/iphone" className="learn-more-btn">Learn more</Link>
            <Link to="/iphone" className="buy-btn">Buy</Link>
          </div>
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
          {mainipad && (
            <div className="image-wrapper">
              <img src={mainipad} alt="iPad Air" />
            </div>
          )}
          {!mainipad && (
            <div className="image-wrapper">
              <div className="home-css-ipad">
                <div className="home-ipad-screen"></div>
              </div>
            </div>
          )}
        </div>

        <div className="grid-item watch animate-on-scroll">
          <div className="content-wrapper">
            <h2>Apple Watch</h2>
            <h3>Series 10</h3>
            <p>Thinnest ever. Biggest display.</p>
            <div className="links">
              <Link to="/watch">Learn more →</Link>
              <Link to="/watch">Buy →</Link>
            </div>
          </div>
          <div className="image-wrapper">
            <div className="home-css-watch">
              <div className="home-watch-body">
                <div className="home-watch-screen"></div>
              </div>
              <div className="home-watch-crown"></div>
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
          <div className="image-wrapper">
            <div className="home-css-macbook">
              <div className="home-mac-screen">
                <div className="home-mac-notch"></div>
              </div>
              <div className="home-mac-base"></div>
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
          <div className="image-wrapper">
            <div className="home-css-airpods">
              <div className="home-airpod-left">
                <div className="home-airpod-stem"></div>
              </div>
              <div className="home-airpod-right">
                <div className="home-airpod-stem"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="promo-section">
        <div className="promo-banner dark animate-on-scroll">
          <div className="promo-content">
            <h2>iPad Pro</h2>
            <h3>Supercharged by M4.</h3>
            <div className="promo-links">
              <Link to="/ipad">Learn more →</Link>
              <Link to="/ipad">Buy →</Link>
            </div>
          </div>
          {IpadPro && (
            <div className="promo-image">
              <img src={IpadPro} alt="iPad Pro" />
            </div>
          )}
        </div>

        <div className="promo-banner light animate-on-scroll">
          <div className="promo-content">
            <span className="promo-tag">Apple TV+</span>
            <h2>Get 3 months free</h2>
            <h3>when you buy an Apple device.</h3>
            <div className="promo-links">
              <Link to="/tv">Try it free →</Link>
            </div>
          </div>
        </div>

        <div className="promo-banner services-banner animate-on-scroll">
          <div className="promo-content">
            <h2>Apple One</h2>
            <h3>Bundle up to six Apple services. And enjoy more for less.</h3>
            <div className="promo-links">
              <Link to="/entertainment">Try it free →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop CTA */}
      <section className="home-shop-cta animate-on-scroll">
        <h2>Shop the latest.</h2>
        <div className="home-shop-links">
          <Link to="/iphone" className="home-shop-pill">
            <span className="home-shop-emoji">📱</span>
            <span>iPhone</span>
          </Link>
          <Link to="/mac" className="home-shop-pill">
            <span className="home-shop-emoji">💻</span>
            <span>Mac</span>
          </Link>
          <Link to="/ipad" className="home-shop-pill">
            <span className="home-shop-emoji">📱</span>
            <span>iPad</span>
          </Link>
          <Link to="/watch" className="home-shop-pill">
            <span className="home-shop-emoji">⌚</span>
            <span>Watch</span>
          </Link>
          <Link to="/air-pods" className="home-shop-pill">
            <span className="home-shop-emoji">🎧</span>
            <span>AirPods</span>
          </Link>
          <Link to="/accessories" className="home-shop-pill">
            <span className="home-shop-emoji">🔌</span>
            <span>Accessories</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;