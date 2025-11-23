import React from 'react'
import Button from '../shared/ui/Button'

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const bgUrl = '/images/hero-ink.jpg'
  return (
    <section className="relative h-screen bg-dark text-light overflow-hidden bg-right bg-cover" style={{ backgroundImage: `url(${bgUrl})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-0"></div>
      <div className="relative z-10 grid md:grid-cols-[600px_640px] justify-center items-start gap-x-40 gap-y-6 px-2 md:px-4 min-h-screen pt-40 md:pt-56">
        <div className="flex flex-col justify-center text-left md:mt-4">
          <div className="flex-1 pt-8">
            <h1 className="font-display uppercase tracking-tight text-9xl leading-tight">Авторские
            </h1>
            <h1 className="font-display uppercase tracking-tight text-9xl leading-tight text-pink-500">Татуировки
            </h1>
          </div>
          <p className="font-manrope text-base md:text-lg mt-6 mb-8 opacity-90 max-w-[560px]">Студия индивидуальных эскизов. Реализм, нео‑традишнл, работа под вашу историю.</p>
          <div className="flex gap-4">
            <Button onClick={() => scrollTo('contact')}>Записаться</Button>
            <Button onClick={() => scrollTo('gallery')}>Смотреть работы</Button>
          </div>
        </div>
        <div className="hidden md:flex justify-start md:-mt-6">
          <img
            src="/images/hero-machine.jpg"
            alt="Тату-машинка"
            className="rounded-xl shadow-lg object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
