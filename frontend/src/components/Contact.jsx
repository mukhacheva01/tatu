import React, { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/contact', formData)
      alert('Сообщение отправлено!')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      alert('Ошибка отправки')
    }
  }

  return (
    <section className="py-20 px-4 bg-dark text-light">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-4xl mb-6">Контакты</h2>
          <div className="space-y-4 text-gray-300">
            <p>📍 Адрес салона</p>
            <p>📞 +7 (XXX) XXX-XX-XX</p>
            <p>📧 info@tattoo-salon.com</p>
            <p>🕐 Пн-Вс: 10:00 - 22:00</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Имя"
            className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-light"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-light"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-light"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <textarea
            placeholder="Сообщение"
            rows="4"
            className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-light"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
          <button type="submit" className="border-2 border-light px-8 py-3 hover:bg-light hover:text-dark transition-all">
            Отправить
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
