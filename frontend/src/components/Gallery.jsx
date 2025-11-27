import React, { useState } from 'react'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageErrors, setImageErrors] = useState({})

  const galleryImages = [
    { id: 1, src: '/images/gallery/tatu-5.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-black to-gray-700' },
    { id: 2, src: '/images/gallery/tatu-2.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-gray-800 to-black' },
    { id: 3, src: '/images/gallery/tatu-3.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-pink-600 to-red-600' },
    { id: 4, src: '/images/gallery/tatu-4.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-purple-600 to-pink-500' },
    { id: 5, src: '/images/gallery/tatu-1.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-pink-500 to-purple-600' },
    { id: 6, src: '/images/gallery/tatu-6.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-red-600 to-pink-600' }
  ]

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }))
  }

  return (
    <>
      {/* Движущийся заголовок на всю ширину */}
      <div className="w-full overflow-hidden bg-pink-500 py-8 mb-0">
        <div className="animate-scroll-left whitespace-nowrap">
          <span className="inline-block font-display text-6xl md:text-8xl uppercase tracking-wider text-white mx-8" style={{ textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-6xl md:text-8xl uppercase tracking-wider text-white mx-8" style={{ textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-6xl md:text-8xl uppercase tracking-wider text-white mx-8" style={{ textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-6xl md:text-8xl uppercase tracking-wider text-white mx-8" style={{ textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-6xl md:text-8xl uppercase tracking-wider text-white mx-8" style={{ textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-6xl md:text-8xl uppercase tracking-wider text-white mx-8" style={{ textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
        </div>
      </div>
      
      {/* Секция на всю ширину с дерзкими эффектами */}
      <section id="gallery" className="bg-black py-12 relative w-full overflow-hidden">
        {/* Розовые неоновые свечения */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[150px]"></div>
        
        {/* Карусель с обрезанными краями */}
        <div className="relative z-10 w-full overflow-hidden">
          {/* Белые градиенты по краям */}
          <div className="absolute left-0 top-0 bottom-8 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-2 md:px-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative flex-shrink-0 w-80 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden hover:scale-110 transition-all duration-300 cursor-pointer group snap-start border-2 border-pink-500/30 hover:border-pink-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
                onClick={() => !imageErrors[image.id] && setSelectedImage(image)}
              >
                {imageErrors[image.id] ? (
                  <div className={`w-full h-full bg-gradient-to-br ${image.gradient} flex items-center justify-center`}>
                    <div className="text-center text-white/80">
                      <div className="text-4xl mb-2">🎨</div>
                      <p className="text-sm font-bold">Скоро здесь будет работа</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Розовое свечение за изображением */}
                    <div className="absolute inset-0 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="relative w-full h-full object-cover"
                      onError={() => handleImageError(image.id)}
                    />
                    
                    {/* Дерзкий overlay при hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-6">
                      <span className="text-pink-500 font-bold text-xl uppercase tracking-wider">Смотреть</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно для просмотра изображения */}
      {selectedImage && !imageErrors[selectedImage.id] && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-pink-500 hover:text-pink-400 text-4xl font-bold z-10"
          >
            ✕
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default Gallery
