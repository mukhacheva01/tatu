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
              className="relative font-manrope uppercase tracking-wider bg-black text-pink-500 px-5 py-2.5 rounded-lg border-2 border-pink-500 hover:bg-pink-500 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] font-bold overflow-hidden group"
            >
              <span className="relative z-10">Записаться</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button 
              onClick={onCertificateClick}
              className="relative font-manrope uppercase tracking-wider bg-gradient-to-r from-pink-600 to-pink-500 text-white px-5 py-2.5 rounded-lg border-2 border-pink-400 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] font-bold overflow-hidden group"
            >
              <span className="relative z-10">Купить сертификат</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
