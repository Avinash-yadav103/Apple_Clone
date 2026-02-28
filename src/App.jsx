import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Ipad from './components/Ipad.jsx'
import Nav2 from './components/Nav2.jsx'
import { Routes, Route } from 'react-router-dom';
import IpadAir from './components/IpadAir.jsx'
import "./components/css/ipad.css"
import Mac from './components/Mac.jsx'
import Iphone from './components/Iphone.jsx'
import Iwatch from './components/Iwatch.jsx'
import IAirPods from './components/IAirPods.jsx'
import Itv from './components/Itv.jsx'
import Entertainment from './components/Entertainment.jsx'
import Accessories from './components/Accessories.jsx'
import Support from './components/Support.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className="whole">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/ipadair" element={<IpadAir />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watch" element={<Iwatch />} />
          <Route path="/air-pods" element={<IAirPods />} />
          <Route path="/tv" element={<Itv />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/support" element={<Support />} />
        </Routes>


        <Footer />
      </div>
    </>
  )
}

export default App