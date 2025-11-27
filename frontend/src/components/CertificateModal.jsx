import React, { useState } from 'react'
import axios from 'axios'

function CertificateModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    buyerName: '',
    buyerPhone: '',
    buyerEmail: '',
    recipientName: '',
    amount: '5000'
  })

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/certificates', formData)
      alert('Заявка на сертификат отправлена! Мы свяжемся с вами для оплаты.')
      setFormData({ buyerName: '', buyerPhone: '', buyerEmail: '', recipientName: '', amount: '5000' })
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
        className="relative bg-black border-2 md:border-4 border-pink-500 rounded-xl md:rounded-2xl shadow-[0_0_60px_rgba(236,72,153,0.6)] max-w-md w-full max-h-[90vh] overflow-hidden animate-slideUp mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Декоративные элементы */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Header */}
        <div className="relative bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 p-6 md:p-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="font-horror text-2xl md:text-4xl uppercase tracking-wider text-black font-black drop-shadow-lg">
              Купить сертификат
            </h2>
            <p className="text-black font-bold text-sm md:text-base mt-2">Идеальный подарок для любителей тату</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-h-[calc(90vh-200px)] overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-5 relative z-10">
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500 rounded-xl p-5 mb-4 shadow-lg">
              <p className="text-pink-400 text-base font-black uppercase tracking-wider mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Номинал сертификата
              </p>
              <div className="grid grid-cols-3 gap-3">
                {['3000', '5000', '10000'].map(amount => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setFormData({...formData, amount})}
                    className={`
                      py-3 px-4 rounded-lg text-base font-black transition-all transform hover:scale-105
                      ${formData.amount === amount 
                        ? 'bg-pink-500 text-black shadow-[0_0_20px_rgba(236,72,153,0.6)]' 
                        : 'bg-black/60 border-2 border-pink-500/50 text-pink-400 hover:border-pink-500 hover:bg-pink-500/10'
                      }
                    `}
                  >
                    {amount} ₽
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                Ваше имя *
              </label>
              <input
                type="text"
                className="w-full bg-black/60 border-2 border-pink-500/50 focus:border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black transition-all"
                placeholder="Как вас зовут?"
                value={formData.buyerName}
                onChange={(e) => setFormData({...formData, buyerName: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                Ваш телефон *
              </label>
              <input
                type="tel"
                className="w-full bg-black/60 border-2 border-pink-500/50 focus:border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black transition-all"
                placeholder="+7 (___) ___-__-__"
                value={formData.buyerPhone}
                onChange={(e) => setFormData({...formData, buyerPhone: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                Ваш Email *
              </label>
              <input
                type="email"
                className="w-full bg-black/60 border-2 border-pink-500/50 focus:border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black transition-all"
                placeholder="your@email.com"
                value={formData.buyerEmail}
                onChange={(e) => setFormData({...formData, buyerEmail: e.target.value})}
                required
              />
            </div>

            <div className="border-t-2 border-pink-500/30 pt-5">
              <label className="block text-pink-400 text-sm font-bold mb-2 uppercase tracking-wide">
                На чье имя сертификат *
              </label>
              <input
                type="text"
                className="w-full bg-black/60 border-2 border-pink-500/50 focus:border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:bg-black transition-all"
                placeholder="Имя получателя подарка"
                value={formData.recipientName}
                onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
                required
              />
              <p className="text-gray-400 text-xs mt-2 font-semibold">Это имя будет указано на сертификате</p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 hover:from-pink-500 hover:via-pink-400 hover:to-pink-500 text-black font-black py-4 px-6 rounded-xl uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] text-lg"
            >
              Оформить сертификат
            </button>

            <p className="text-gray-400 text-xs text-center font-semibold">
              После отправки заявки мы свяжемся с вами для оплаты и оформления сертификата
            </p>
          </form>
        </div>

        {/* Footer accent */}
        <div className="h-3 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600"></div>
      </div>
    </div>
  )
}

export default CertificateModal
