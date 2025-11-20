import React from 'react'

function Artists() {
  const artists = [
    { name: "Korn Dutra", specialty: "Custom designs" },
    { name: "Artist Name", specialty: "Realism" },
    { name: "Artist Name", specialty: "Traditional" }
  ]

  return (
    <section className="py-20 px-4 bg-dark text-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-12">Artists</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-gray-600 h-64 mb-4 rounded-lg"></div>
              <h3 className="font-serif text-2xl mb-2">{artist.name}</h3>
              <p className="text-gray-400 mb-4">{artist.specialty}</p>
              <button className="border border-light px-6 py-2 text-sm hover:bg-light hover:text-dark transition-all">
                View works
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Artists
