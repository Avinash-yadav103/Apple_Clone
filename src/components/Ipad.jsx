import React from 'react'
import Nav from './Nav.jsx'
import './css/ipad.css'
import one from '../assets/Ipad/1.svg'
import three from '../assets/Ipad/3.svg'
import four from '../assets/Ipad/4.svg'
import five from '../assets/Ipad/5.svg'
import six from '../assets/Ipad/6.svg'
import seven from '../assets/Ipad/7.svg'
import eight from '../assets/Ipad/8.svg'
import os from '../assets/Ipad/os.svg'
import ad from '../assets/Ipad/videoplayback.mp4'
import IpadPro from '../assets/Ipad/pt_ipad_pro__6bgrkek0jnm2_xlarge.png'
import IpadAir from '../assets/Ipad/pt_ipad_air__cr381zljqdiu_xlarge.png'
import IpadImg from '../assets/Ipad/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge.png'
import IpadMini from '../assets/Ipad/pt_ipad_mini__f3iy3qb50gia_xlarge.png'
import IntersectionViewer from './IntersectionViewer';

function Ipad(props) {
    return (
        <>
            <div className="ipad_nav">
                <Nav />
                <div className="tabs">
                    <div className="small_tabs">
                        <img src={one} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={one} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={three} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={four} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={five} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={six} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={os} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={seven} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={eight} alt="" />
                        <p>{props.one}</p>
                    </div>
                </div>
            </div>

            <div className="banner_bar">
                <h1>iPad</h1>
                <p>Touch, draw and type <br />on one magical device</p>
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

            <div className="explore">
                <div className="explore_head">
                    <h1>Explore the line-up</h1>
                    <a href=""><p>Compare the models  </p></a>
                </div>

                <div className="products">
                    <div className="product-tile-header">
                        <img src={IpadPro} alt="" />
                    </div>
                    <div className="product-tile-header">
                        <img src={IpadAir} alt="" />
                    </div>
                    <div className="product-tile-header">
                        <img src={IpadImg} alt="" />
                    </div>
                    <div className="product-tile-header">
                        <img src={IpadMini} alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Ipad
