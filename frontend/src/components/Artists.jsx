import React from 'react'
import Section from '../shared/ui/Section'

function Artists() {
  return (
    <Section id="artists" className="bg-dark text-light">
      <h2 className="font-serif text-4xl text-center mb-12">Наш мастер</h2>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Фото мастера */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white/80">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-sm font-bold">Фото мастера</p>
              </div>
            </div>
          </div>
          
          {/* Информация о мастере */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="font-display text-3xl mb-3 text-pink-500 uppercase tracking-wide">Имя мастера</h3>
            <p className="text-gray-400 text-lg mb-4 font-bold">Специализация</p>
            <div className="space-y-3 text-gray-300">
              <p>✨ Авторские эскизы</p>
              <p>🎨 Реализм, нео-традишнл</p>
              <p>⚡ Опыт работы: X лет</p>
              <p>🏆 Участник тату-конвенций</p>
            </div>
            <div className="mt-6">
              <a 
                href="#gallery" 
                className="inline-block font-manrope uppercase tracking-wide bg-pink-500 text-black px-6 py-3 rounded hover:bg-pink-400 transition font-bold"
              >
                Смотреть работы
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Artists
