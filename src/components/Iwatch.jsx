import React, { useEffect, useRef } from 'react'
import Nav2 from './Nav2'
import IntersectionViewer from './IntersectionViewer'
import ad from '../assets/Watch/xlarge_2x.mp4'
import GetToKnowSection from './GetToKnowSection'
import './css/watch.css'

// Safe icon imports
let imone, imtwo, imthree, imfour, imfive, imsix, imseven, imeight, imos;
try { imone = new URL('../assets/Watch/watch_01.svg', import.meta.url).href } catch(e) { imone = '' }
try { imtwo = new URL('../assets/Watch/watch_02.svg', import.meta.url).href } catch(e) { imtwo = '' }
try { imthree = new URL('../assets/Watch/watch_03.svg', import.meta.url).href } catch(e) { imthree = '' }
try { imfour = new URL('../assets/Watch/watch_04.svg', import.meta.url).href } catch(e) { imfour = '' }
try { imfive = new URL('../assets/Watch/watch_05.svg', import.meta.url).href } catch(e) { imfive = '' }
try { imsix = new URL('../assets/Watch/watch_06.svg', import.meta.url).href } catch(e) { imsix = '' }
try { imseven = new URL('../assets/Watch/watch_07.svg', import.meta.url).href } catch(e) { imseven = '' }
try { imeight = new URL('../assets/Watch/watch_08.svg', import.meta.url).href } catch(e) { imeight = '' }
try { imos = new URL('../assets/Watch/watch_09.svg', import.meta.url).href } catch(e) { imos = '' }

function Iwatch() {
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('watch-visible');
                }
            });
        }, { threshold: 0.15 });

        sectionRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const watches = [
        {
            name: 'Apple Watch Series 10',
            tagline: 'Thinstant classic.',
            price: '₹46900.00',
            dark: true,
            colors: [
                { name: 'Jet Black', color: '#1d1d1f' },
                { name: 'Rose Gold', color: '#e8c4b8' },
                { name: 'Silver', color: '#e3e4e5' },
            ],
            features: ['Biggest display ever', 'Advanced health sensors', 'S10 SiP', 'Water resistant 50m'],
            watchColor: '#1d1d1f',
            bandColor: '#333',
            screenGradient: ['#ff6b6b', '#ee5a24'],
        },
        {
            name: 'Apple Watch Ultra 2',
            tagline: 'Next level adventure.',
            price: '₹89900.00',
            dark: false,
            colors: [
                { name: 'Natural Titanium', color: '#c4bfb6' },
                { name: 'Black Titanium', color: '#3c3b37' },
            ],
            features: ['49mm titanium case', '3000 nit display', 'Precision GPS', '36-hour battery'],
            watchColor: '#c4bfb6',
            bandColor: '#f97316',
            screenGradient: ['#f97316', '#ea580c'],
        },
        {
            name: 'Apple Watch SE',
            tagline: 'A great deal to love.',
            price: '₹29900.00',
            dark: false,
            colors: [
                { name: 'Midnight', color: '#2e2e30' },
                { name: 'Starlight', color: '#f3f0e8' },
                { name: 'Silver', color: '#e3e4e5' },
            ],
            features: ['Crash Detection', 'Heart rate alerts', 'Fitness tracking', 'swimproof'],
            watchColor: '#e3e4e5',
            bandColor: '#86868b',
            screenGradient: ['#34c759', '#30d158'],
        },
    ];

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
                one="Apple Watch Series 10" 
                two="Apple Watch Ultra 2" 
                three="Apple Watch SE" 
                four="Compare" 
                five="Apple Watch Nike" 
                six="Apple Watch Hermès" 
                seven="AirPods" 
                eight="Accessories"
            />

            <div className="banner_bar">
                <h1>Apple Watch</h1>
                <p>The ultimate device for a healthy life.</p>
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

            <div className="watch-explore-section">
                <div className="watch-explore-header">
                    <h2>Explore the lineup.</h2>
                </div>

                <div className="watch-lineup-grid">
                    {watches.map((watch, index) => (
                        <div
                            key={watch.name}
                            className={`watch-lineup-card ${watch.dark ? 'dark' : 'light'}`}
                            ref={el => sectionRefs.current[index] = el}
                        >
                            {/* CSS Watch illustration */}
                            <div className="watch-card-visual">
                                <div className="watch-illustration">
                                    <div className="watch-case" style={{ background: watch.watchColor }}>
                                        <div className="watch-crown"></div>
                                        <div className="watch-screen">
                                            <div className="watch-screen-content" style={{
                                                background: `linear-gradient(135deg, ${watch.screenGradient[0]}, ${watch.screenGradient[1]})`
                                            }}>
                                                <span className="watch-time">10:09</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="watch-band-top" style={{ background: watch.bandColor }}></div>
                                    <div className="watch-band-bottom" style={{ background: watch.bandColor }}></div>
                                </div>
                            </div>

                            <div className="watch-card-colors">
                                {watch.colors.map(c => (
                                    <span
                                        key={c.name}
                                        className="watch-color-dot"
                                        style={{ backgroundColor: c.color }}
                                        title={c.name}
                                    />
                                ))}
                            </div>

                            <div className="watch-card-info">
                                <h3>{watch.name}</h3>
                                <p className="watch-card-tagline">{watch.tagline}</p>
                                <p className="watch-card-price">From {watch.price}</p>
                            </div>

                            <div className="watch-card-features">
                                {watch.features.map(f => (
                                    <span key={f} className="watch-feature-tag">{f}</span>
                                ))}
                            </div>

                            <div className="watch-card-actions">
                                <button className="watch-buy-btn">Buy</button>
                                <span className="watch-learn-link">Learn more →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Health features section */}
            <div className="watch-health-section">
                <h2 className="watch-health-title" ref={el => sectionRefs.current[3] = el}>
                    Health is in your hands. <span>And on your wrist.</span>
                </h2>

                <div className="watch-health-grid">
                    {[
                        { icon: '❤️', title: 'Heart Rate', desc: 'Get notifications for unusual heart rhythms and measure your blood oxygen.' },
                        { icon: '🌡️', title: 'Temperature', desc: 'Track your wrist temperature for cycle tracking and sleep insights.' },
                        { icon: '🫁', title: 'Blood Oxygen', desc: 'Measure your blood oxygen level anytime with a powerful sensor.' },
                        { icon: '😴', title: 'Sleep Tracking', desc: 'Track your sleep stages and build a better bedtime routine.' },
                        { icon: '🏃', title: 'Fitness', desc: 'Close your Activity rings every day and celebrate achievements.' },
                        { icon: '🆘', title: 'Safety', desc: 'Fall Detection and Crash Detection get help when you need it.' },
                    ].map((feature, i) => (
                        <div
                            key={feature.title}
                            className="watch-health-card"
                            ref={el => sectionRefs.current[4 + i] = el}
                        >
                            <span className="watch-health-icon">{feature.icon}</span>
                            <h4>{feature.title}</h4>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <GetToKnowSection />
        </div>
    )
}

export default Iwatch
