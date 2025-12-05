import React from 'react';

function HomeBanner({ sectionRefs, isVisible }) {
  return (
    <section
      id="hero"
      ref={(el) => (sectionRefs.current['hero'] = el)}
      className={`relative overflow-hidden transition-all duration-1000 ${
        isVisible['hero']
          ? 'opacity-100'
          : 'opacity-0'
      }`}
      style={{ minHeight: 'calc(100svh - 4.5rem - 3.5rem)', paddingTop: '10%' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=2400&q=75')`
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 flex items-center flex-col justify-center gap-6 xs:gap-8 sm:gap-10 md:gap-12 h-full px-4 xs:px-6 sm:px-8" style={{ minHeight: 'calc(100svh - 4.5rem - 3.5rem)' }}>
        {/* Animated Text */}
        <div className="relative font-black uppercase leading-tight tracking-[-0.03em] text-[48px] xs:text-[56px] sm:text-[72px] md:text-[92px] lg:text-[108px] xl:text-[120px]">
          {/* Text Content */}
          <div className="relative grid gap-1 place-items-center text-center">
            {/* LIVE */}
            <div className="leading-none">
              <span className="inline-block">
                {['L', 'i', 'v', 'e'].map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block will-change-transform animate-typing text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    style={{
                      perspective: '600px',
                      WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.1)',
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </div>

            {/* WORLDWISE */}
            <div className="leading-none">
              <span className="inline-block">
                {['W', 'o', 'r', 'l', 'd', 'W', 'i', 's', 'e'].map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block will-change-transform animate-typing text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    style={{
                      perspective: '600px',
                      WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.1)',
                      transform: 'translateX(10px)',
                      animationDelay: `${(index + 4) * 0.05}s`
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Shine Overlay Effect */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: 'linear-gradient(100deg, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 65%)',
              mixBlendMode: 'overlay',
              opacity: 1,
              transform: 'translateX(120%)'
            }}
          ></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col xs:flex-row items-center gap-3 xs:gap-4 w-full xs:w-auto px-4 xs:px-0">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm xs:text-base md:text-md font-semibold transition-all duration-300 cursor-pointer text-white hover:shadow-lg transform hover:scale-105 active:scale-95 h-10 xs:h-11 md:h-12 rounded-md px-5 xs:px-6 md:px-8 w-full xs:w-auto"
            style={{
              backgroundColor: '#D30013'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B8000F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#D30013';
            }}
          >
            Enquire
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm xs:text-base md:text-md font-semibold transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white hover:shadow-lg transform hover:scale-105 active:scale-95 h-10 xs:h-11 md:h-12 rounded-md px-5 xs:px-6 md:px-8 w-full xs:w-auto">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
