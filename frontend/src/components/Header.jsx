import React from 'react'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm text-light">
      <div className="w-full flex items-center justify-between px-2 md:px-4 py-5">
        <a href="#" className="font-display uppercase tracking-wide text-xl md:text-2xl pl-2 md:pl-4">Custom Concepts Tattoo</a>
        <div className="hidden md:flex items-center gap-6 text-sm pr-2 md:pr-4">
          <nav className="flex gap-6">
            <a href="#about" className="hover:text-accent transition">О нас</a>
            <a href="#artists" className="hover:text-accent transition">Мастера</a>
            <a href="#gallery" className="hover:text-accent transition">Галерея</a>
            <a href="#contact" className="hover:text-accent transition">Контакты</a>
          </nav>
          <div className="flex gap-3 ml-6">
            <a href="#contact" className="font-manrope uppercase tracking-wide bg-[#ff2a6d] text-white px-4 py-2 rounded hover:opacity-90 transition">Записаться</a>
            <a href="#contact" className="font-manrope uppercase tracking-wide bg-[#ff2a6d] text-white px-4 py-2 rounded hover:opacity-90 transition">Купить сертификат</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
