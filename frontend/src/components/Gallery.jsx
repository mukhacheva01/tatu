import React from 'react'

function Gallery() {
  return (
    <section className="py-20 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-gray-300 aspect-square rounded-lg hover:scale-105 transition-transform cursor-pointer"></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
