import React, { useState } from 'react'

function InfoCard({ title, children, icon }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div 
      className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl p-6 hover:border-pink-500 transition-all hover:shadow-lg hover:shadow-pink-500/20 overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Розовое свечение следует за курсором */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none transition-opacity duration-200"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-64 h-64 bg-pink-500/60 rounded-full blur-3xl animate-pulse"></div>
        </div>
      )}
      
      {/* Дополнительное свечение по краям при hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-48 h-48 bg-pink-500/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-600/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-pink-500 font-bold text-xl mb-3 uppercase tracking-wide">{title}</h3>
          <div className="text-gray-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
        <div className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
    </div>
  )
}

function InfoCards() {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Карточка 1: Мы находимся */}
        <InfoCard title="Мы находимся:" icon="📍">
          Санкт-Петербург,<br/>
          Набережная канала<br/>
          Грибоедова, 96
        </InfoCard>

        {/* Карточка 2: Опыт */}
        <InfoCard title="Опыт:" icon="⚡">
          Работаем с 2016 года,<br/>
          в этом году<br/>
          исполнилось <span className="text-pink-400 font-bold text-lg">9 лет</span>
        </InfoCard>

        {/* Карточка 3: Мастерство */}
        <InfoCard title="Мастерство:" icon="🎨">
          Работаем во всех<br/>
          стилях и делаем<br/>
          <span className="text-pink-400 font-bold">перекрытия любой<br/>сложности</span>
        </InfoCard>
      </div>
    </section>
  )
}

export default InfoCards
