import React from 'react';
import Link from 'next/link';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-rose text-white hover:bg-rose/90 shadow-sm border-none',
    secondary: 'bg-indigo text-white hover:bg-indigo/90 shadow-sm border-none',
    indigo: 'bg-indigo text-white hover:bg-indigo/90 shadow-sm border-none',
    outline: 'border-2 border-indigo text-indigo hover:bg-indigo hover:text-white',
    ghost: 'text-indigo hover:bg-indigo/10',
    white: 'bg-white text-indigo hover:bg-gray-100 shadow-md',
    outlineWhite: 'border-2 border-white text-white hover:bg-white hover:text-indigo',
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
