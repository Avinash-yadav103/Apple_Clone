import { useState } from 'react'
import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ipad from './components/Ipad.jsx'
// import Appp from './components/Appp.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="whole">
        <Nav />
        {/* <p>Hello there</p> */}
        <Hero price="From ₹59900.00*" />
      
      </div>
      <Ipad one="iPad Pro" />
      {/* <Appp /> */}
    </>
  )
}

export default App