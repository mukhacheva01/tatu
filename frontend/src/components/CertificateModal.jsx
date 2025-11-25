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
        className="relative bg-gradient-to-br from-black via-gray-900 to-black border-2 border-pink-500 rounded-lg shadow-2xl shadow-pink-500/50 max-w-md w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pink-500 hover:text-pink-400 transition-colors text-2xl font-bold z-10"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-500 p-6 text-center">
          <h2 className="font-display text-3xl uppercase tracking-wider text-black font-bold">
            Купить сертификат
          </h2>
          <p className="text-black/80 text-sm mt-2 font-semibold">Идеальный подарок для любителей тату</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 mb-4">
            <p className="text-pink-500 text-sm font-bold uppercase tracking-wide mb-2">Номинал сертификата</p>
            <div className="grid grid-cols-3 gap-2">
              {['3000', '5000', '10000'].map(amount => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setFormData({...formData, amount})}
                  className={`
                    py-2 px-3 rounded text-sm font-bold transition-all
                    ${formData.amount === amount 
                      ? 'bg-pink-500 text-black' 
                      : 'bg-black border border-pink-500/50 text-pink-500 hover:border-pink-500'
                    }
                  `}
                >
                  {amount} ₽
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-pink-500 text-sm font-bold mb-2 uppercase tracking-wide">
              Ваше имя *
            </label>
            <input
              type="text"
              className="w-full bg-black border-2 border-pink-500/50 focus:border-pink-500 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              placeholder="Как вас зовут?"
              value={formData.buyerName}
              onChange={(e) => setFormData({...formData, buyerName: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-pink-500 text-sm font-bold mb-2 uppercase tracking-wide">
              Ваш телефон *
            </label>
            <input
              type="tel"
              className="w-full bg-black border-2 border-pink-500/50 focus:border-pink-500 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              placeholder="+7 (___) ___-__-__"
              value={formData.buyerPhone}
              onChange={(e) => setFormData({...formData, buyerPhone: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-pink-500 text-sm font-bold mb-2 uppercase tracking-wide">
              Ваш Email *
            </label>
            <input
              type="email"
              className="w-full bg-black border-2 border-pink-500/50 focus:border-pink-500 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              placeholder="your@email.com"
              value={formData.buyerEmail}
              onChange={(e) => setFormData({...formData, buyerEmail: e.target.value})}
              required
            />
          </div>

          <div className="border-t border-pink-500/30 pt-4">
            <label className="block text-pink-500 text-sm font-bold mb-2 uppercase tracking-wide">
              На чье имя сертификат *
            </label>
            <input
              type="text"
              className="w-full bg-black border-2 border-pink-500/50 focus:border-pink-500 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              placeholder="Имя получателя подарка"
              value={formData.recipientName}
              onChange={(e) => setFormData({...formData, recipientName: e.target.value})}
              required
            />
            <p className="text-gray-500 text-xs mt-2">Это имя будет указано на сертификате</p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-black font-bold py-4 px-6 rounded uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70"
          >
            Оформить сертификат
          </button>

          <p className="text-gray-500 text-xs text-center">
            После отправки заявки мы свяжемся с вами для оплаты и оформления сертификата
          </p>
        </form>

        {/* Footer accent */}
        <div className="h-2 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600"></div>
      </div>
    </div>
  )
}

export default CertificateModal
