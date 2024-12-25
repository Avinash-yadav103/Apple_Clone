import React from 'react'
// import imone from '../assets/Ipad/1.svg'
// import imthree from '../assets/Ipad/3.svg'
// import imfour from '../assets/Ipad/4.svg'
// import imfive from '../assets/Ipad/5.svg'
// import imsix from '../assets/Ipad/6.svg'
// import imseven from '../assets/Ipad/7.svg'
// import imeight from '../assets/Ipad/8.svg'
// import imos from '../assets/Ipad/os.svg'


function Nav2(props) {
  return (
    <div>
      <div className="tabs">
                    <div className="small_tabs">
                        <img src={props.imone} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={props.imone} alt="" />
                        <p>{props.two}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={props.imthree} alt="" />
                        <p>{props.three}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={props.imfour} alt="" />
                        <p>{props.four}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={props.imfive} alt="" />
                        <p>{props.five}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={props.imsix} alt="" />
                        <p>{props.six}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={props.imos} alt="" />
                        <p>{props.os}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={props.imseven} alt="" />
                        <p>{props.seven}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={props.imeight} alt="" />
                        <p>{props.eight}</p>
                    </div>
                </div>
    </div>
  )
}

export default Nav2
