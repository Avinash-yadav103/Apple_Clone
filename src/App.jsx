import { useState } from 'react'
import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="whole">
        <Nav />
        {/* <p>Hello there</p> */}
        <Hero price="From ₹59900.00*" />
      </div>
    </>
  )
}

export default App