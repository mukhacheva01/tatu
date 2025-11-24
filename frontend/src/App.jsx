import React, { useState } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Artists from './components/Artists'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import BookingModal from './components/BookingModal'
import CertificateModal from './components/CertificateModal'

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header 
        onBookingClick={() => setIsBookingModalOpen(true)}
        onCertificateClick={() => setIsCertificateModalOpen(true)}
      />
      <Hero onBookingClick={() => setIsBookingModalOpen(true)} />
      <About />
      <Artists />
      <Gallery />
      <Contact />
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
      <CertificateModal isOpen={isCertificateModalOpen} onClose={() => setIsCertificateModalOpen(false)} />
    </div>
  )
}

export default App
