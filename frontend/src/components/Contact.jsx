import React, { useState } from 'react'

function ContactCard({ icon, title, children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl p-6 hover:border-pink-500 transition-all hover:shadow-lg hover:shadow-pink-500/30 group overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Розовое свечение следует за курсором */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none transition-opacity duration-200"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-48 h-48 bg-pink-500/50 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Дополнительное свечение по краям при hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/40 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/40 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-pink-500 text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-pink-500 font-bold text-sm uppercase tracking-wide mb-2">{title}</h3>
        <div className="text-gray-300 text-sm">
          {children}
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Розовое свечение фона */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 mb-4">
            Pink Ink Love
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto"></div>
        </div>

        {/* Контактные карточки */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Адрес */}
          <ContactCard 
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            } 
            title="Адрес"
          >
            <p>Спб, ул. Мира, 3</p>
            <p>(БЦ «Троицкий»)</p>
            <p className="text-gray-400 text-xs mt-1">ст.м. «Горьковская»</p>
          </ContactCard>

          {/* Телефон */}
          <ContactCard 
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            } 
            title="Телефон"
          >
            <a href="tel:+79679676496" className="hover:text-pink-400 transition">
              +7 (967) 967-64-96
            </a>
          </ContactCard>

          {/* Email */}
          <ContactCard 
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            } 
            title="Email"
          >
            <a href="mailto:info@pinkinklove.ru" className="hover:text-pink-400 transition break-all">
              info@pinkinklove.ru
            </a>
          </ContactCard>

          {/* Время работы */}
          <ContactCard 
            icon={
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            } 
            title="Режим работы"
          >
            <p>Пн-Вс</p>
            <p>10:00 - 22:00</p>
          </ContactCard>
        </div>

        {/* Социальные сети */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Telegram */}
          <a 
            href="https://t.me/plo_hishka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-[length:200%_100%] animate-shimmer text-black font-bold px-8 py-4 rounded-xl overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            <span className="text-lg uppercase tracking-wider">Telegram</span>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/79679676496" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-[length:200%_100%] animate-shimmer text-black font-bold px-8 py-4 rounded-xl overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="text-lg uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* Instagram */}
          <a 
            href="https://www.instagram.com/plo_hishka?igsh=NXMza2gwZXg1cmxl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-[length:200%_100%] animate-shimmer text-black font-bold px-8 py-4 rounded-xl overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-lg uppercase tracking-wider">Instagram</span>
          </a>

          {/* VK */}
          <a 
            href="https://vk.com/plo_hishka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-[length:200%_100%] animate-shimmer text-black font-bold px-8 py-4 rounded-xl overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.391 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
            </svg>
            <span className="text-lg uppercase tracking-wider">VK</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
