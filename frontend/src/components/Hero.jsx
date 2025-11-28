import React from 'react'

function Hero({ onBookingClick }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const bgUrl = '/images/hero-ink.jpg'
  return (
    <section className="relative h-screen bg-black text-light overflow-hidden">
      {/* Фоновое изображение без размытия */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url(${bgUrl})`, 
          backgroundPosition: '65% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Агрессивный градиент */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-0"></div>
      
      {/* Розовое свечение */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full z-0"></div>
      
      <div className="relative z-10 flex flex-col md:grid md:grid-cols-[600px_640px] justify-center items-center md:items-start gap-8 md:gap-x-40 px-4 md:px-8 min-h-screen pt-28 md:pt-32 pb-20">
        <div className="flex flex-col justify-center text-center md:text-left max-w-full">
          <div className="overflow-visible mb-4">
            {/* Дерзкий заголовок с эффектами */}
            <h1 className="font-horror uppercase tracking-wider text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-pulse-slow animate-slideInLeft" style={{ lineHeight: '1.1', padding: '0.5rem 0 0 0', marginBottom: '-1rem' }}>
              Авторские
            </h1>
            <h1 className="font-horror uppercase tracking-wider text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 drop-shadow-[0_0_50px_rgba(236,72,153,0.8)] animate-slideInLeft animate-delay-200" style={{ lineHeight: '1.1', padding: '0 0 0.5rem 0', marginTop: '0' }}>
              Татуировки
            </h1>
            
            {/* Декоративная линия */}
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-pink-500 to-transparent mt-4 mb-3 mx-auto md:mx-0 animate-fadeIn animate-delay-400"></div>
          </div>
          
          <p className="font-oranienbaum text-sm sm:text-base md:text-lg mb-4 text-gray-300 max-w-full md:max-w-[560px] font-light leading-relaxed px-4 md:px-0 animate-fadeInUp animate-delay-500">
            Студия индивидуальных эскизов.<br/>
            <span className="text-pink-400 font-semibold">Реализм • Нео-традишнл • Твоя история</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4 md:px-0 animate-fadeInUp animate-delay-600">
            <button 
              onClick={onBookingClick}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 text-black font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] animate-shimmer bg-[length:200%_100%] text-sm md:text-base"
            >
              <span className="relative z-10">Записаться</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button 
              onClick={() => scrollTo('gallery')}
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-pink-500 text-pink-500 font-bold uppercase tracking-wider rounded-lg hover:bg-pink-500 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] text-sm md:text-base"
            >
              Смотреть работы
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-start items-center relative w-full h-auto animate-slideInRight animate-delay-300">
          {/* Розовое свечение вокруг изображения */}
          <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-xl"></div>
          <img
            src="/images/hero-machine.jpg"
            alt="Тату-машинка"
            className="relative rounded-xl shadow-[0_0_50px_rgba(236,72,153,0.3)] object-contain w-full h-auto max-h-[500px] border border-pink-500/20"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
