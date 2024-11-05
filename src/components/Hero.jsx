import React from 'react'
import logo from './ipadairlogo.png'
import mainipad from './main_ipad.png'
import './css/ipad.css'



function Hero(props) {
  return (
    <div className='hero'>
      <div className="ipadair">
        <div className="image_logo">
            <img src={logo} alt="" />
        </div>
        <div className="freshair">
            <p>Fresh Air</p>
            <img src={mainipad} alt="" />
        </div>
        <div className="buy_button">
            <button>Buy</button>
        </div>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default Hero
