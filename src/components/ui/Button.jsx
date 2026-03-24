import React from 'react';
import Link from 'next/link';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none',
    secondary: 'bg-[#3b3f69] text-white hover:brightness-110 shadow-sm border-none',
    indigo: 'bg-[#3b3f69] text-white hover:brightness-110 shadow-sm border-none',
    outline: 'border-2 border-[#3b3f69] text-[#3b3f69] hover:bg-[#3b3f69] hover:text-white',
    ghost: 'text-[#3b3f69] hover:bg-[#3b3f69]/10',
    white: 'bg-white text-[#3b3f69] hover:bg-gray-100 shadow-md',
    outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-[#3b3f69]',
  };

  const Component = href ? Link : 'button';

  return (
    <Component 
      href={href} 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
