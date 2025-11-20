import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Artists from './components/Artists'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Artists />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
