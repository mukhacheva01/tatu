import React from 'react'

function About() {
  return (
    <section className="py-20 px-4 bg-light">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-300 h-96 rounded-lg"></div>
        <div>
          <h2 className="font-serif text-4xl mb-6">About us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Мастер по созданию уникальных татуировок с многолетним опытом. 
            Специализируемся на индивидуальных эскизах и реализации самых смелых идей.
          </p>
          <button className="border-2 border-dark px-6 py-2 hover:bg-dark hover:text-light transition-all duration-300">
            Booking / consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
