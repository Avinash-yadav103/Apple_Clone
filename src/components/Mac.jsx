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

function Mac(props) {
    return (
        <div>
            <Nav2 imone={imtwo} imthree={imthree} imfour={imfour} imfive={imfive} imsix={imsix} imseven={imseven} imeight={imeight} imos={imos} one="Macbook Air" two="Macbook Pro" three="Ipad" four="Mac Mini" five="compare" six="six" os="os" seven="iPad OS 18" eight="Shop" />

            <div className="banner_bar">
                <h1>Mac</h1>
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

export default Mac
