import React, { useState } from 'react'
import Section from '../shared/ui/Section'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageErrors, setImageErrors] = useState({})

  const galleryImages = [
    { id: 1, src: '/images/gallery/tattoo-1.jpg', alt: 'Абстрактная татуировка', gradient: 'from-pink-500 to-purple-600' },
    { id: 2, src: '/images/gallery/tattoo-2.jpg', alt: 'Абстрактная татуировка', gradient: 'from-gray-800 to-black' },
    { id: 3, src: '/images/gallery/tattoo-3.jpg', alt: 'Японская маска', gradient: 'from-pink-600 to-red-600' },
    { id: 4, src: '/images/gallery/tattoo-4.jpg', alt: 'Татуировка', gradient: 'from-purple-600 to-pink-500' },
    { id: 5, src: '/images/gallery/tattoo-5.jpg', alt: 'Татуировка', gradient: 'from-black to-gray-700' },
    { id: 6, src: '/images/gallery/tattoo-6.jpg', alt: 'Татуировка', gradient: 'from-red-600 to-pink-600' }
  ]

  const handleImageError = (imageId) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }))
  }

  return (
    <>
      <Section id="gallery" className="bg-light">
        <h2 className="font-serif text-4xl text-center mb-12">Галерея работ</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
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
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(image.id)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 text-2xl">🔍</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Section>

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
