import { useState } from 'react'
import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ipad from './components/Ipad.jsx'
import { Router, Routes, Route } from 'react-router-dom';
// import Appp from './components/Appp.jsx'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="whole">
          <Nav />
          <Hero price="From ₹59900.00*" />

        </div>

        <Routes>
          <Route path="/ipad" element={<Ipad />} />
        </Routes>


    </>
  )
}

export default App