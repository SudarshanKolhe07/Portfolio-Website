import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "@fortawesome/fontawesome-free/css/all.min.css";
// import './App.css'
import Navbar from "./Components/Navbar"
import Hero from "./Pages/Hero"
import About from "./Pages/About"
import Skills from "./Pages/Skills"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
    </>
  )
}

export default App
