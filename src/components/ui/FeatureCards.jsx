import React from 'react';

/**
 * Reusable "feature cards" section.
 *
 * Props:
 *  - heading   (string)           – large section title
 *  - cards     (array of objects) – { icon (JSX), title, description }
 *  - cols      (3 | 4)           – columns, default 4
 *  - bg        (string)          – background colour, default warm cream
 */
const FeatureCards = ({
  heading,
  cards = [],
  cols = 4,
  bg = '#faf8f5',
}) => {
  const gridCols =
    cols === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: bg, padding: '80px 0' }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Heading */}
        {heading && (
          <h2
            className="text-3xl md:text-[2.6rem] font-semibold leading-tight mb-14"
            style={{ color: '#3b3f69' }}
          >
            {heading}
          </h2>
        )}

        {/* Cards Grid */}
        <div className={`grid ${gridCols} gap-x-10 gap-y-12`}>
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col">
              {/* Icon */}
              {card.icon && (
                <div className="mb-5" style={{ color: '#ca1254' }}>
                  {card.icon}
                </div>
              )}

              {/* Title */}
              <h3
                className="text-[15px] sm:text-base font-bold mb-2"
                style={{ color: '#3b3f69' }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="text-[13.5px] leading-[1.7] font-light"
                style={{ color: '#6b7280' }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
