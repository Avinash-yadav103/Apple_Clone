import { useState } from 'react'
import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Ipad from './components/Ipad.jsx'
import Nav2 from './components/Nav2.jsx'
import { Router, Routes, Route } from 'react-router-dom';
// import Appp from './components/Appp.jsx'
import IpadAir from './components/IpadAir.jsx'
import "./components/css/ipad.css"
import Mac from './components/Mac.jsx'
import Iphone from './components/Iphone.jsx'
import Iwatch from './components/Iwatch.jsx'
import IAirPods from './components/IAirPods.jsx'
import Itv from './components/Itv.jsx'


function App() {

  return (
    <>
        <div className="whole">
          <Nav />

          
          <Routes>
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/ipadair" element={<IpadAir />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/watch" element={<Iwatch />} />
          <Route path="/air-pods" element={<IAirPods />} />
          <Route path="/tv" element={<Itv />} />


          </Routes>
        </div>

        


    </>
  )
}

export default App