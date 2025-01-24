import React from 'react'
import Nav2 from './Nav2'
// import imone from '../assets/mac_accessories_light.svg'
import imtwo from '../assets/Watch/watch_01.svg'
import imthree from '../assets/Watch/watch_02.svg'
import imfour from '../assets/Watch/watch_03.svg'
import imfive from '../assets/Watch/watch_04.svg'
import imsix from '../assets/Watch/watch_05.svg'
import imseven from '../assets/Watch/watch_06.svg'
import imeight from '../assets/Watch/watch_07.svg'
import imos from '../assets/Watch/watch_08.svg'
import IntersectionViewer from './IntersectionViewer'
import ad from '../assets/Watch/xlarge_2x.mp4'
import GetToKnowSection from './GetToKnowSection'

function Iwatch(props) {
    return (
        <div>
            <Nav2 imone={imtwo} imthree={imthree} imfour={imfour} imfive={imfive} imsix={imsix} imseven={imseven} imeight={imeight} imos={imos} one="Macbook Air" two="Macbook Pro" three="Ipad" four="Mac Mini" five="compare" six="six" os="os" seven="iPad OS 18" eight="Shop" />

            <div className="banner_bar">
                <h1>iWatch</h1>
                <p>If you can dream it <br />mac can do it</p>
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
                                // alignItems: 'center',
                                // height: '300px',
                                // width: isInView ? '95%' : '100%',
                                // borderRadius: isInView ? '10px' : '0px',
                                transition: 'all 1s ease',
                            }}
                        >
                            <video autoPlay muted style={{
                                width: isInView ? '95%' : '100%',
                                borderRadius: isInView ? '40px' : '0px',
                                transition: 'all 0.7s ease-in-out',
                            }}>
                                <source src={ad} type="video/mp4" style={{
                                // width: isInView ? '95%' : '100%',
                                borderRadius: isInView ? '10px' : '0px',
                                transition: 'background-color 0.3s ease-in-out',
                            }} />
                                {/* Your browser does not support the video tag. */}
                            </video>
                           
                        </div>
                    )}
                </IntersectionViewer>

            </div>
                
            <GetToKnowSection />

        </div>
    )
}

export default Iwatch
