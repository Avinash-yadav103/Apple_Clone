import React from 'react'
import one from '../assets/Ipad/1.svg'
import three from '../assets/Ipad/3.svg'
import four from '../assets/Ipad/4.svg'
import five from '../assets/Ipad/5.svg'
import six from '../assets/Ipad/6.svg'
import seven from '../assets/Ipad/7.svg'
import eight from '../assets/Ipad/8.svg'
import os from '../assets/Ipad/os.svg'


function Nav2(props) {
  return (
    <div>
      <div className="tabs">
                    <div className="small_tabs">
                        <img src={one} alt="" />
                        <p>{props.one}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={one} alt="" />
                        <p>{props.two}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={three} alt="" />
                        <p>{props.tnree}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={four} alt="" />
                        <p>{props.four}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={five} alt="" />
                        <p>{props.five}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={six} alt="" />
                        <p>{props.six}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={os} alt="" />
                        <p>{props.os}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={seven} alt="" />
                        <p>{props.seven}</p>
                    </div>
                    <div className="small_tabs">
                        <img src={eight} alt="" />
                        <p>{props.eight}</p>
                    </div>
                </div>
    </div>
  )
}

export default Nav2
