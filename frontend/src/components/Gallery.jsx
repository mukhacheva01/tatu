import { useState, useRef, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Gallery() {
  const [galleryRef, galleryVisible] = useScrollAnimation({ threshold: 0.1 })
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageErrors, setImageErrors] = useState({})
  const carouselRef = useRef(null)

  const galleryImages = [
    { id: 1, src: '/images/gallery/tatu-5.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-black to-gray-700' },
    { id: 2, src: '/images/gallery/tatu-2.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-gray-800 to-black' },
    { id: 3, src: '/images/gallery/tatu-3.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-pink-600 to-red-600' },
    { id: 4, src: '/images/gallery/tatu-4.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-purple-600 to-pink-500' },
    { id: 5, src: '/images/gallery/tatu-1.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-pink-500 to-purple-600' },
    { id: 6, src: '/images/gallery/tatu-6.jpg', alt: 'Татуировка Pink Ink Love', gradient: 'from-red-600 to-pink-600' }
  ]

  // Дублируем изображения для зацикленной карусели
  const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages]

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }))
  }

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400 // Прокрутка на ширину одного изображения
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Устанавливаем начальную позицию в середине и обрабатываем зацикливание
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Устанавливаем начальную позицию в середине (второй набор изображений)
    const imageWidth = 400 // примерная ширина изображения + gap
    carousel.scrollLeft = imageWidth * galleryImages.length

    const handleScroll = () => {
      const maxScroll = carousel.scrollWidth - carousel.clientWidth
      const currentScroll = carousel.scrollLeft

      // Если прокрутили в начало - перепрыгиваем в середину
      if (currentScroll <= 0) {
        carousel.scrollLeft = imageWidth * galleryImages.length
      }
      // Если прокрутили в конец - перепрыгиваем в середину
      else if (currentScroll >= maxScroll) {
        carousel.scrollLeft = imageWidth * galleryImages.length
      }
    }

    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [galleryImages.length])

  return (
    <>
      {/* Дерзкий движущийся заголовок в стиле граффити */}
      <div className="w-full overflow-hidden bg-black py-6 md:py-10 mb-0 relative border-y-2 md:border-y-4 border-pink-500">
        {/* Розовые молнии на фоне */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent transform -skew-x-12"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent transform skew-x-12"></div>
          <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent transform -skew-x-12"></div>
        </div>
        
        <div className="animate-scroll-left whitespace-nowrap relative z-10">
          <span className="inline-block font-horror text-3xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-[0.15em] md:tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 mx-4 md:mx-10 font-black py-2" style={{ 
            textShadow: '0 0 40px rgba(236,72,153,0.8)',
            filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,1)) drop-shadow(-1px -1px 0px rgba(255,255,255,0.3))'
          }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-3xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 mx-4 md:mx-10 font-black" style={{ 
            textShadow: '0 0 40px rgba(236,72,153,0.8)',
            filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1)) drop-shadow(-1px -1px 0px rgba(255,255,255,0.3))'
          }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-3xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 mx-4 md:mx-10 font-black" style={{ 
            textShadow: '0 0 40px rgba(236,72,153,0.8)',
            filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1)) drop-shadow(-1px -1px 0px rgba(255,255,255,0.3))'
          }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-3xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 mx-4 md:mx-10 font-black" style={{ 
            textShadow: '0 0 40px rgba(236,72,153,0.8)',
            filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1)) drop-shadow(-1px -1px 0px rgba(255,255,255,0.3))'
          }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-3xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 mx-4 md:mx-10 font-black" style={{ 
            textShadow: '0 0 40px rgba(236,72,153,0.8)',
            filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1)) drop-shadow(-1px -1px 0px rgba(255,255,255,0.3))'
          }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
          <span className="inline-block font-display text-3xl sm:text-5xl md:text-6xl lg:text-8xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 mx-4 md:mx-10 font-black" style={{ 
            textShadow: '0 0 40px rgba(236,72,153,0.8)',
            filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,1)) drop-shadow(-1px -1px 0px rgba(255,255,255,0.3))'
          }}>
            ГАЛЕРЕЯ РАБОТ
          </span>
        </div>
      </div>
      
      {/* Секция на всю ширину с дерзкими эффектами */}
      <section ref={galleryRef} id="gallery" className={`bg-black py-12 relative w-full overflow-hidden scroll-fade-up ${galleryVisible ? 'visible' : ''}`}>
        {/* Розовые неоновые свечения */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[150px]"></div>
        
        {/* Карусель с обрезанными краями */}
        <div className="relative z-10 w-full overflow-hidden">
          {/* Белые градиенты по краям - теперь кликабельные */}
          <div 
            className="absolute left-0 top-0 bottom-8 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 cursor-pointer hover:from-pink-100 hover:via-pink-50 transition-colors"
            onClick={() => scrollCarousel('left')}
          ></div>
          <div 
            className="absolute right-0 top-0 bottom-8 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 cursor-pointer hover:from-pink-100 hover:via-pink-50 transition-colors"
            onClick={() => scrollCarousel('right')}
          ></div>
          
          <div ref={carouselRef} className="flex gap-4 md:gap-6 overflow-x-auto pb-6 md:pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-8">
            {infiniteImages.map((image, index) => (
              <div 
                key={`${image.id}-${index}`} 
                className="relative flex-shrink-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden hover:scale-105 md:hover:scale-110 transition-all duration-300 cursor-pointer group snap-start border-2 border-pink-500/30 hover:border-pink-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
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
