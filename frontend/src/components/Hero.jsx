import React from 'react'

function Hero() {
  return (
    <section className="relative h-screen bg-dark text-light flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl mb-4">Custom Concepts Tattoo</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">by Korn Dutra</p>
        <button className="border-2 border-light px-8 py-3 hover:bg-light hover:text-dark transition-all duration-300">
          Booking / consultation
        </button>
      </div>
    </section>
  )
}

export default Hero
