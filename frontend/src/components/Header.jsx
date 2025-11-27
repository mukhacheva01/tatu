import React, { useState } from 'react'

function Header({ onBookingClick, onCertificateClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm text-light animate-slideUp">
      <div className="w-full flex items-center justify-between px-4 md:px-8 py-4 md:py-5">
        <a href="#" className="font-horror uppercase tracking-wider text-xl md:text-3xl py-1">Pink Ink Love</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <nav className="flex gap-6">
            <a href="#artists" className="hover:text-accent transition">Мастер</a>
            <a href="#gallery" className="hover:text-accent transition">Галерея</a>
            <a href="#contact" className="hover:text-accent transition">Контакты</a>
          </nav>
          <div className="flex gap-3 ml-6">
            <button 
              onClick={onBookingClick}
              className="relative font-oranienbaum uppercase tracking-wider bg-black text-pink-500 px-5 py-2.5 rounded-lg border-2 border-pink-500 hover:bg-pink-500 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] font-bold overflow-hidden group"
            >
              <span className="relative z-10">Записаться</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
            <button 
              onClick={onCertificateClick}
              className="relative font-oranienbaum uppercase tracking-wider bg-gradient-to-r from-pink-600 to-pink-500 text-white px-5 py-2.5 rounded-lg border-2 border-pink-400 hover:from-pink-500 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.8)] font-bold overflow-hidden group"
            >
              <span className="relative z-10">Купить сертификат</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-pink-500 text-3xl"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-pink-500/30">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#artists" className="text-white hover:text-pink-500 transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Мастер</a>
            <a href="#gallery" className="text-white hover:text-pink-500 transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Галерея</a>
            <a href="#contact" className="text-white hover:text-pink-500 transition py-2" onClick={() => setIsMobileMenuOpen(false)}>Контакты</a>
            <button 
              onClick={() => { onBookingClick(); setIsMobileMenuOpen(false); }}
              className="font-oranienbaum bg-black text-pink-500 px-5 py-3 rounded-lg border-2 border-pink-500 font-bold uppercase tracking-wider"
            >
              Записаться
            </button>
            <button 
              onClick={() => { onCertificateClick(); setIsMobileMenuOpen(false); }}
              className="font-oranienbaum bg-gradient-to-r from-pink-600 to-pink-500 text-white px-5 py-3 rounded-lg border-2 border-pink-400 font-bold uppercase tracking-wider"
            >
              Купить сертификат
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
