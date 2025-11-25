import React from 'react'
import Section from '../shared/ui/Section'

function Contact() {
  return (
    <Section id="contact" className="bg-dark text-light" containerClassName="max-w-2xl mx-auto text-center">
      <h2 className="font-serif text-4xl mb-8">Контакты</h2>
      <div className="space-y-6 text-gray-300 text-lg">
        <p className="font-bold text-pink-500 text-2xl">Pink Ink Love</p>
        <p>📍 Спб, ул. Мира, 3 (БЦ «Троицкий»)<br/>
           <span className="text-base opacity-80">ст.м. «Горьковская»</span>
        </p>
        <p>📞 +7 (967) 967-64-96</p>
        <p>📧 info@pinkinklove.ru</p>
        <p>🕐 Пн-Вс: 10:00 - 22:00</p>
      </div>
    </Section>
  )
}

export default Contact
