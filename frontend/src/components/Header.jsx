import React from 'react'

function Header({ onBookingClick, onCertificateClick }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm text-light">
      <div className="w-full flex items-center justify-between px-2 md:px-4 py-5">
        <a href="#" className="font-display uppercase tracking-wide text-xl md:text-2xl pl-2 md:pl-4">Pink Ink Love</a>
        <div className="hidden md:flex items-center gap-6 text-sm pr-2 md:pr-4">
          <nav className="flex gap-6">
            <a href="#artists" className="hover:text-accent transition">Мастер</a>
            <a href="#gallery" className="hover:text-accent transition">Галерея</a>
            <a href="#contact" className="hover:text-accent transition">Контакты</a>
          </nav>
          <div className="flex gap-3 ml-6">
            <button 
              onClick={onBookingClick}
              className="font-manrope uppercase tracking-wide bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-[length:200%_100%] animate-shimmer text-white px-4 py-2 rounded hover:opacity-90 transition hover:scale-105"
            >
              Записаться
            </button>
            <button 
              onClick={onCertificateClick}
              className="font-manrope uppercase tracking-wide bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-[length:200%_100%] animate-shimmer text-white px-4 py-2 rounded hover:opacity-90 transition hover:scale-105"
            >
              Купить сертификат
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
