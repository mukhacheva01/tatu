import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 grid sm:grid-cols-2 gap-4 md:gap-6 items-center text-center sm:text-left">
        <div>
          <div className="font-display uppercase tracking-wide text-lg md:text-xl">Pink Ink Love</div>
          <div className="text-xs md:text-sm opacity-70">© {new Date().getFullYear()} Все права защищены</div>
        </div>
        <div className="text-xs md:text-sm opacity-80">
          <div>Пн‑Вс: 10:00 — 22:00</div>
          <div className="break-all">+7 (967) 967-64-96 • info@pinkinklove.ru</div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

