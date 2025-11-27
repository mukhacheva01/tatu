import React from 'react'

function Hero({ onBookingClick }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const bgUrl = '/images/hero-ink.jpg'
  return (
    <section className="relative h-screen bg-black text-light overflow-hidden" style={{ backgroundImage: `url(${bgUrl})`, backgroundPosition: 'right center', backgroundSize: 'cover' }}>
      {/* Агрессивный градиент */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0"></div>
      
      {/* Розовое свечение */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full z-0"></div>
      
      <div className="relative z-10 grid md:grid-cols-[600px_640px] justify-center items-start gap-x-40 gap-y-6 px-2 md:px-4 min-h-screen pt-40 md:pt-56">
        <div className="flex flex-col justify-center text-left md:mt-4">
          <div className="flex-1 pt-8">
            {/* Дерзкий заголовок с эффектами */}
            <h1 className="font-display uppercase tracking-tighter text-7xl md:text-9xl leading-none mb-2 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-pulse-slow">
              Авторские
            </h1>
            <h1 className="font-display uppercase tracking-tighter text-7xl md:text-9xl leading-none text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 drop-shadow-[0_0_50px_rgba(236,72,153,0.8)]">
              Татуировки
            </h1>
            
            {/* Декоративная линия */}
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-transparent mt-6 mb-4"></div>
          </div>
          
          <p className="font-manrope text-lg md:text-xl mt-4 mb-8 text-gray-300 max-w-[560px] font-light leading-relaxed">
            Студия индивидуальных эскизов.<br/>
            <span className="text-pink-400 font-semibold">Реализм • Нео-традишнл • Твоя история</span>
          </p>
          
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={onBookingClick}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 text-black font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] animate-shimmer bg-[length:200%_100%]"
            >
              <span className="relative z-10">Записаться</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button 
              onClick={() => scrollTo('gallery')}
              className="px-8 py-4 border-2 border-pink-500 text-pink-500 font-bold uppercase tracking-wider rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]"
            >
              Смотреть работы
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-start md:-mt-6 relative">
          {/* Розовое свечение вокруг изображения */}
          <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-xl"></div>
          <img
            src="/images/hero-machine.jpg"
            alt="Тату-машинка"
            className="relative rounded-xl shadow-[0_0_50px_rgba(236,72,153,0.3)] object-contain w-full h-full border border-pink-500/20"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
