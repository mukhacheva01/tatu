import React from 'react'
import Section from '../shared/ui/Section'

function Gallery() {
  return (
    <Section id="gallery" className="bg-light">
      <h2 className="font-serif text-4xl text-center mb-12">Галерея</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-300 aspect-square rounded-lg hover:scale-105 transition-transform cursor-pointer"></div>
          ))}
      </div>
    </Section>
  )
}

export default Gallery
