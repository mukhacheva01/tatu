import React from 'react'

const base = 'font-manrope uppercase tracking-wide rounded transition';
const variants = {
  pink: 'bg-[#ff2a6d] text-white hover:opacity-90',
};
const sizes = {
  md: 'px-8 py-3 text-sm',
  sm: 'px-6 py-2 text-sm',
};

function Button({ children, variant = 'pink', size = 'md', className = '', onClick, type = 'button', href }) {
  const classes = `${base} ${variants[variant] || variants.pink} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

