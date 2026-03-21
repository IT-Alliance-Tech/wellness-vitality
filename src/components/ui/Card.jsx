import React from 'react';

const Card = ({ title, description, image, accentColor = 'indigo', children }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo/10 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full border border-gray-100/50">
      {image && (
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className={`absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-${accentColor === 'pink' ? 'rose' : 'indigo'}`}>
            Premium Care
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      
      <div className="p-8 flex-grow flex flex-col relative z-20">
        <h3 className="text-xl font-bold text-indigo mb-3 group-hover:text-rose transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        
        {children}
        
        {/* Accent Bottom Border with Animation */}
        <div className="relative mt-8 h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
           <div className={`absolute left-0 top-0 h-full bg-${accentColor === 'pink' ? 'rose' : 'indigo'} w-12 group-hover:w-full transition-all duration-500 ease-in-out`} />
        </div>
      </div>
    </div>
  );
};

export default Card;
