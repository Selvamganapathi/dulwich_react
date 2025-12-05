import React from 'react';

function GalleryScrollSlider({ sectionRefs, isVisible, galleryContainerRef, galleryInnerRef }) {
  return (
    <section
      id="gallery"
      ref={(el) => {
        sectionRefs.current['gallery'] = el;
        galleryContainerRef.current = el;
      }}
      className={`bg-white transition-all duration-1000 ${
        isVisible['gallery']
          ? 'opacity-100'
          : 'opacity-0'
      }`}
    >
      <div
        className="gallery-design-container w-screen no-scrollbar px-4 xs:px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24"
        style={{ overflowX: 'hidden' }}
      >
        <div className="pin-spacer" style={{ display: 'flex' }}>
          <div
            ref={galleryInnerRef}
            className="animated-gallery-design flex flex-row flex-nowrap w-max relative gap-4 xs:gap-5 sm:gap-6 md:gap-8 pb-16 xs:pb-20 sm:pb-24 md:pb-32 lg:pb-[136px]"
          >
            {[
              {
                id: 1,
                title: 'A whole world inside',
                description: 'Comfort, utility, craft and technology come together in one thoughtfully designed interior. Spacious and airy, there\'s room for 5 and plenty of gear.',
                image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=2400&q=75',
                type: 'image'
              },
              {
                id: 2,
                title: 'A place for everything',
                description: 'Everyone can use more storage. So we\'ve packed it in, from dual glove boxes to a hidden drawer for all the things you want to hand.',
                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=2400&q=75',
                type: 'image'
              },
              {
                id: 3,
                title: 'Designed to endure',
                description: 'With upcycled wood trim and materials made from ocean plastic, our interiors are made to last and lighten our impact on the planet.',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=2400&q=75',
                type: 'image'
              },
              {
                id: 4,
                title: 'Controls close at hand',
                description: 'Our next gen steering wheel has integrated controls with haptic feedback so you can do more without taking your eyes off the road.',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2400&q=75',
                type: 'image'
              },
              {
                id: 5,
                title: 'Light when you need it',
                description: 'A fan favourite, the Rivian Torch is just one of the many thoughtful features you\'ll find in R2. May it light your way in dark places.',
                image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=2400&q=75',
                type: 'image'
              },
            ].map((item) => (
              <div
                key={item.id}
                className="group gallery-design-slide flex flex-col items-start overflow-hidden relative aspect-[6/4] transition-all duration-500 ease-in-out rounded-l w-[85vw] xs:w-[80vw] sm:w-[75vw] md:w-[70vw] lg:w-[65vw] xl:w-[60vw] max-h-[400px] xs:max-h-[480px] sm:max-h-[560px] md:max-h-[683px] bg-center px-4 xs:px-6 sm:px-8 md:px-10 py-6 xs:py-8 sm:py-10 md:py-[48px] justify-end bg-black"
              >
                {/* Image/Video Container */}
                <div className="absolute inset-0 w-full h-full">
                  {item.type === 'image' ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] group-hover:w-[135%] transition-all duration-500 ease-in-out object-cover"
                    />
                  ) : (
                    <video
                      autoPlay
                      playsInline
                      loop
                      muted
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] group-hover:w-[135%] transition-all duration-500 ease-in-out object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  )}
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 bg-no-repeat"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 35.5%, rgba(0, 0, 0, 0.5) 74.5%)'
                    }}
                  ></div>
                </div>

                {/* Text Content */}
                <div className="translate-y-[calc(100%-30px)] xs:translate-y-[calc(100%-40px)] sm:translate-y-[calc(100%-50px)] group-hover:translate-y-0 transition-all duration-[800ms] ease-[cubic-bezier(.71,.07,0,1)] relative z-10">
                  <p className="text-white my-0 font-body text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight xs:leading-tight sm:leading-[1.1] md:leading-[48px] font-bold tracking-[-0.5px] xs:tracking-[-0.75px] sm:tracking-[-1px]">
                    {item.title}
                  </p>
                  <p className="text-white my-0 font-body pt-2 xs:pt-3 sm:pt-4 max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[500px] opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(.71,.07,0,1)] text-sm xs:text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Sticky CTA Button */}
            <div className="gallery-cta-button absolute bottom-0 left-[calc(50vw-20px)] xs:left-[calc(50vw-30px)] sm:left-[calc(50vw-50px)] md:left-[calc(50vw-80px)] w-full">
              <button
                className="flex flex-row items-center justify-center rounded-xl xs:rounded-2xl border-none px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-sm xs:text-base font-medium transition-colors duration-300 bg-[#333333] text-white cursor-pointer min-h-[44px] xs:min-h-[50px] sm:min-h-[56px] min-w-[130px] xs:min-w-[150px] sm:min-w-[160px] hover:bg-[#444444] active:bg-[#222222] gap-2 xs:gap-3 max-h-[44px] xs:max-h-[50px] sm:max-h-[56px] sticky transform -translate-x-1/2 left-1/2"
              >
                <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#FFAC00"></rect>
                  <rect x="15" y="10" width="2" height="13" fill="black"></rect>
                  <rect x="22.5" y="15.5" width="2" height="13" transform="rotate(90 22.5 15.5)" fill="black"></rect>
                </svg>
                <span className="pr-1 xs:pr-2">View gallery</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryScrollSlider;
