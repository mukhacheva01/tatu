import React from 'react'
import Section from '../shared/ui/Section'
import Button from '../shared/ui/Button'

function Artists() {
  const artists = [
    { name: "Korn Dutra", specialty: "Custom designs" },
    { name: "Artist Name", specialty: "Realism" },
    { name: "Artist Name", specialty: "Traditional" }
  ]

  return (
    <Section id="artists" className="bg-dark text-light">
      <h2 className="font-serif text-4xl text-center mb-12">Мастера</h2>
      <div className="grid md:grid-cols-3 gap-8">
          {artists.map((artist, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-gray-600 h-64 mb-4 rounded-lg"></div>
              <h3 className="font-serif text-2xl mb-2">{artist.name}</h3>
              <p className="text-gray-400 mb-4">{artist.specialty}</p>
              <Button size="sm">Смотреть работы</Button>
            </div>
          ))}
      </div>
    </Section>
  )
}

export default Artists
