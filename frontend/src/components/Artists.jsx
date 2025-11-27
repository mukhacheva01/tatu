import React from 'react'
import Section from '../shared/ui/Section'

function Artists() {
  return (
    <Section id="artists" className="bg-dark text-light">
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
            <div className="space-y-3 text-gray-300 mb-6">
              <p className="text-pink-400 font-semibold">Стили:</p>
              <p>🎨 Абстракция</p>
              <p>🌸 Япония</p>
              <p>⚡ Олдскул</p>
              <p>✨ Ньюскул</p>
              <p>🖤 Минимализм</p>
            </div>
            <div className="space-y-2 text-gray-300 mb-6">
              <p className="text-pink-400 font-semibold">Услуги:</p>
              <p>• Коррекция чужих работ</p>
              <p>• Перекрытие</p>
              <p>• Индивидуальный эскиз</p>
            </div>

          </div>
        </div>
      </div>
    </Section>
  )
}

export default Artists
