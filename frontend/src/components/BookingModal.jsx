import React, { useState } from 'react'
import axios from 'axios'

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    artist: '',
    description: ''
  })
  const [showCalendar, setShowCalendar] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  if (!isOpen) return null

  // Генерация доступных временных слотов
  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ]

  // Получение дней месяца
  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    // Пустые ячейки до начала месяца
    for (let i = 0; i < (startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1); i++) {
      days.push(null)
    }
    // Дни месяца
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const formatDate = (date) => {
    if (!date) return ''
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const formatDisplayDate = (dateStr) => {
    if (!dateStr) return 'Выбери дату'
    const date = new Date(dateStr)
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  const handleDateSelect = (date) => {
    setFormData({...formData, date: formatDate(date), time: ''})
    setShowCalendar(false)
  }

  const changeMonth = (offset) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1))
  }

  const isToday = (date) => {
    const today = new Date()
    return date && date.toDateString() === today.toDateString()
  }

  const isPast = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date && date < today
  }

  const isSelected = (date) => {
    return date && formData.date === formatDate(date)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.date) {
      alert('Выбери дату!')
      return
    }
    if (!formData.time) {
      alert('Выбери время!')
      return
    }
    try {
      await axios.post('/api/bookings', formData)
      alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
      setFormData({ name: '', phone: '', email: '', date: '', time: '', artist: '', description: '' })
      onClose()
    } catch (error) {
      alert('Ошибка отправки заявки')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div 
        className="relative bg-black border-4 border-pink-500 rounded-2xl shadow-[0_0_60px_rgba(236,72,153,0.6)] max-w-md w-full max-h-[90vh] overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="font-display text-4xl uppercase tracking-wider text-black font-black drop-shadow-lg">
              Запись на сеанс
            </h2>
            <p className="text-black font-bold text-base mt-2">Заполни форму и мы свяжемся с тобой</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-h-[calc(90vh-200px)] overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit} className="p-6 space-y-5 relative z-10">
            <div>
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                Имя *
              </label>
              <input
                type="text"
                className="w-full bg-black/60 border-2 border-pink-500/50 focus:border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black transition-all"
                placeholder="Как тебя зовут?"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                Телефон *
              </label>
              <input
                type="tel"
                className="w-full bg-black/60 border-2 border-pink-500/50 focus:border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black transition-all"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/60 border-2 border-pink-500/50 focus:border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black transition-all"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="relative">
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                Желаемая дата *
              </label>
              <button
                type="button"
                onClick={() => setShowCalendar(!showCalendar)}
                className="w-full bg-black/60 border-2 border-pink-500/50 hover:border-pink-500 rounded-lg px-4 py-3 text-left text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all flex items-center justify-between"
              >
              <span className={formData.date ? 'text-white' : 'text-gray-500'}>
                {formatDisplayDate(formData.date)}
              </span>
              <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Календарь */}
            {showCalendar && (
              <div className="absolute z-50 mt-2 w-full bg-black border-2 border-pink-500 rounded-lg shadow-2xl shadow-pink-500/50 p-4">
                {/* Навигация по месяцам */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={() => changeMonth(-1)}
                    className="text-pink-500 hover:text-pink-400 font-bold text-xl"
                  >
                    ‹
                  </button>
                  <span className="text-pink-500 font-bold uppercase text-sm">
                    {currentMonth.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })}
                  </span>
                  <button
                    type="button"
                    onClick={() => changeMonth(1)}
                    className="text-pink-500 hover:text-pink-400 font-bold text-xl"
                  >
                    ›
                  </button>
                </div>

                {/* Дни недели */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                    <div key={day} className="text-center text-pink-500/70 text-xs font-bold">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Дни месяца */}
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentMonth).map((date, idx) => (
                    <button
                      key={idx}
                      type="button"
                      disabled={!date || isPast(date)}
                      onClick={() => date && !isPast(date) && handleDateSelect(date)}
                      className={`
                        aspect-square flex items-center justify-center text-sm rounded transition-all
                        ${!date ? 'invisible' : ''}
                        ${isPast(date) ? 'text-gray-700 cursor-not-allowed' : 'text-white hover:bg-pink-500 hover:text-black'}
                        ${isSelected(date) ? 'bg-pink-500 text-black font-bold' : ''}
                        ${isToday(date) && !isSelected(date) ? 'border border-pink-500' : ''}
                      `}
                    >
                      {date ? date.getDate() : ''}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

            {/* Выбор времени */}
            {formData.date && (
              <div>
                <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                  Выбери время *
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({...formData, time: slot})}
                      className={`
                        py-2 px-3 rounded-lg text-sm font-bold transition-all transform hover:scale-105
                        ${formData.time === slot 
                          ? 'bg-pink-500 text-black shadow-[0_0_15px_rgba(236,72,153,0.5)]' 
                          : 'bg-black/60 border-2 border-pink-500/50 text-pink-400 hover:border-pink-500 hover:bg-pink-500/10'
                        }
                      `}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                Описание идеи
              </label>
              <textarea
                rows="4"
                className="w-full bg-black/60 border-2 border-pink-500/50 focus:border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black transition-all resize-none"
                placeholder="Расскажи о своей идее татуировки..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 hover:from-pink-500 hover:via-pink-400 hover:to-pink-500 text-black font-black py-4 px-6 rounded-xl uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] text-lg"
            >
              Отправить заявку
            </button>
          </form>
        </div>

        {/* Footer accent */}
        <div className="h-3 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600"></div>
      </div>
    </div>
  )
}

export default BookingModal
