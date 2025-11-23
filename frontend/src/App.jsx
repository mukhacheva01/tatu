import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Artists from './components/Artists'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Artists />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
