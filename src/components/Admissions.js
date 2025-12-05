import React from 'react';

function Admissions({ sectionRefs, isVisible }) {
  return (
    <section
      id="contact"
      ref={(el) => (sectionRefs.current['contact'] = el)}
      className="py-12 xs:py-16 sm:py-20 md:py-24 px-4 xs:px-6 sm:px-8 xl:px-10 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-3xl xs:text-4xl sm:text-4xl md:text-5xl xl:text-5xl font-light mb-6 xs:mb-8 sm:mb-10 transition-all duration-1000 ${
            isVisible['contact']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          Admissions
        </h2>
        <form
          className={`space-y-4 xs:space-y-5 sm:space-y-6 transition-all duration-1000 delay-200 ${
            isVisible['contact']
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 bg-gray-800 border border-gray-700 rounded-md text-sm xs:text-base text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all transform focus:scale-105"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 bg-gray-800 border border-gray-700 rounded-md text-sm xs:text-base text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all transform focus:scale-105"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 bg-gray-800 border border-gray-700 rounded-md text-sm xs:text-base text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all transform focus:scale-105"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 bg-gray-800 border border-gray-700 rounded-md text-sm xs:text-base text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all transform focus:scale-105"
          ></textarea>
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
            <button
              type="button"
              className="px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 bg-white text-gray-900 rounded-md text-sm xs:text-base hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-xl w-full xs:w-auto"
            >
              Book a call
            </button>
            <button
              type="submit"
              className="px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 border-2 border-white text-white rounded-md text-sm xs:text-base hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 w-full xs:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Admissions;
