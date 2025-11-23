import React from 'react'

function Section({ id, children, className = '', containerClassName = '' }) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className={`max-w-6xl mx-auto ${containerClassName}`}>{children}</div>
    </section>
  )
}

export default Section

