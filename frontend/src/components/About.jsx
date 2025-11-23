import React from 'react'
import Section from '../shared/ui/Section'
import Button from '../shared/ui/Button'

function About() {
  return (
    <Section id="about" className="bg-light" containerClassName="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-300 h-96 rounded-lg"></div>
        <div>
          <h2 className="font-serif text-4xl mb-6">О нас</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Мастер по созданию уникальных татуировок с многолетним опытом. 
            Специализируемся на индивидуальных эскизах и реализации самых смелых идей.
          </p>
          <Button size="sm">Записаться на консультацию</Button>
        </div>
    </Section>
  )
}

export default About
