import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function InfoCard({ title, children, icon, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
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
      ref={ref}
      className={`relative bg-gradient-to-br from-gray-900 to-black border-2 border-pink-500/30 rounded-xl p-4 md:p-6 hover:border-pink-500 transition-all hover:shadow-lg hover:shadow-pink-500/20 overflow-hidden group scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
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

      <div className="relative z-10 flex flex-col sm:flex-row items-start gap-3 md:gap-4">
        <div className="flex-1 w-full">
          <h3 className="text-pink-500 font-bold text-lg md:text-xl mb-2 md:mb-3 uppercase tracking-wide">{title}</h3>
          <div className="text-gray-300 text-xs md:text-sm leading-relaxed">
            {children}
          </div>
        </div>
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-lg flex items-center justify-center text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0">
          {icon}
        </div>
      </div>
    </div>
  )
}

function InfoCards() {
  return (
    <section className="bg-black py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Карточка 1: Адрес */}
        <InfoCard
          delay={0} 
          title="Адрес:" 
          icon={
            <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          }
        >
          Спб, ул. Мира, 3<br/>
          (БЦ «Троицкий»)<br/>
          <span className="text-gray-400 text-xs">ст.м. «Горьковская»</span>
        </InfoCard>

        {/* Карточка 2: Опыт */}
        <InfoCard
          delay={200} 
          title="Опыт:" 
          icon={
            <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
          }
        >
          Работаю с 2023 года<br/>
          Опыт работы<br/>
          <span className="text-pink-400 font-bold text-lg">2 года</span>
        </InfoCard>

        {/* Карточка 3: Мастерство */}
        <InfoCard
          delay={400} 
          title="Мастерство:" 
          icon={
            <svg className="w-10 h-10 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
          }
        >
          Работаю в стилях:<br/>
          <span className="text-pink-400 font-bold">Абстракция, Япония,<br/>
          Олдскул, Ньюскул,<br/>
          Минимализм</span>
        </InfoCard>
      </div>
    </section>
  )
}

export default InfoCards
