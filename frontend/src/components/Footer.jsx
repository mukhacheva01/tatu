import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 items-center">
        <div>
          <div className="font-display uppercase tracking-wide">Pink Ink Love</div>
          <div className="text-sm opacity-70">© {new Date().getFullYear()} Все права защищены</div>
        </div>
        <div className="text-sm opacity-80">
          <div>Пн‑Вс: 10:00 — 22:00</div>
          <div>+7 (967) 967-64-96 • info@pinkinklove.ru</div>
        </div>
        <div className="flex gap-3 justify-start md:justify-end text-sm">
          <a href="#gallery" className="hover:text-[#ff2a6d] transition">Смотреть работы</a>
          <a href="#contact" className="hover:text-[#ff2a6d] transition">Записаться</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

