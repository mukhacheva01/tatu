function CertificatePromo({ onCertificateClick }) {
  return (
    <section className="relative bg-black py-20 overflow-hidden border-y-4 border-pink-500">
      {/* Розовые неоновые свечения */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[150px]"></div>
      
      {/* Диагональные полосы на фоне */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent transform -skew-y-12"></div>
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent transform skew-y-12"></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent transform -skew-y-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Основной контент */}
          <div className="bg-gradient-to-br from-pink-600/20 via-black/80 to-purple-600/20 backdrop-blur-sm border-4 border-pink-500 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.4)] transform hover:scale-[1.02] transition-transform duration-300">
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            {/* Угловые акценты */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-pink-400"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-pink-400"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-pink-400"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-pink-400"></div>
            
            <div className="relative z-10 text-center">
              {/* Заголовок */}
              <h2 className="font-display text-5xl md:text-7xl uppercase font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-white to-pink-400 mb-3 tracking-wider" style={{
                textShadow: '0 0 60px rgba(236,72,153,0.8)',
                filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,1)) drop-shadow(-2px -2px 0px rgba(255,255,255,0.2))',
                WebkitTextStroke: '1px rgba(236,72,153,0.5)'
              }}>
                Подарочный сертификат
              </h2>
              
              {/* Подзаголовок */}
              <div className="inline-block bg-pink-500 text-black font-bold uppercase px-6 py-2 mb-6 transform -skew-x-12 shadow-lg">
                <span className="inline-block transform skew-x-12">Идеальный подарок</span>
              </div>

              {/* Описание */}
              <p className="text-white text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-bold">
                Сертификат на любую сумму с индивидуальным дизайном для тех, кто мечтает о татуировке!
              </p>

              {/* Преимущества */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="group bg-gradient-to-br from-black to-gray-900 border-3 border-pink-500 rounded-2xl p-8 hover:border-pink-400 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-black transition-all hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-105 transform">
                  <div className="mb-5 flex justify-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <svg className="w-10 h-10 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-pink-400 font-black mb-3 uppercase tracking-wider text-xl group-hover:text-white transition-colors">Любая сумма</h3>
                  <p className="text-gray-300 text-base group-hover:text-white transition-colors font-semibold">От 3000₽ до любой суммы на ваш выбор</p>
                </div>
                <div className="group bg-gradient-to-br from-black to-gray-900 border-3 border-pink-500 rounded-2xl p-8 hover:border-pink-400 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-black transition-all hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-105 transform">
                  <div className="mb-5 flex justify-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <svg className="w-10 h-10 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-pink-400 font-black mb-3 uppercase tracking-wider text-xl group-hover:text-white transition-colors">Без срока</h3>
                  <p className="text-gray-300 text-base group-hover:text-white transition-colors font-semibold">Действует бессрочно, используйте когда удобно</p>
                </div>
                <div className="group bg-gradient-to-br from-black to-gray-900 border-3 border-pink-500 rounded-2xl p-8 hover:border-pink-400 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-black transition-all hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-105 transform">
                  <div className="mb-5 flex justify-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <svg className="w-10 h-10 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-pink-400 font-black mb-3 uppercase tracking-wider text-xl group-hover:text-white transition-colors">Красивый дизайн</h3>
                  <p className="text-gray-300 text-base group-hover:text-white transition-colors font-semibold">Стильное оформление в фирменном стиле</p>
                </div>
              </div>

              {/* Кнопка */}
              <button
                onClick={onCertificateClick}
                className="relative font-manrope uppercase tracking-[0.2em] bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 text-white px-14 py-5 rounded-2xl border-4 border-white hover:border-pink-300 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(236,72,153,1),0_0_100px_rgba(236,72,153,0.5)] font-black text-xl overflow-hidden group animate-pulse hover:animate-none"
              >
                <span className="relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Купить сертификат</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CertificatePromo
