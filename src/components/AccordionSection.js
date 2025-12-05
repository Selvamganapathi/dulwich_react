import React from 'react';
import { ChevronDown } from 'lucide-react';

function AccordionSection({ sectionRefs, isVisible, expandedSection, toggleSection }) {
  return (
    <section
      id="accordion"
      ref={(el) => (sectionRefs.current['accordion'] = el)}
      className={`py-12 xs:py-16 sm:py-20 md:py-24 px-4 xs:px-6 sm:px-8 xl:px-10 bg-white transition-all duration-1000 ${
        isVisible['accordion']
          ? 'opacity-100'
          : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Accordion Item 1 */}
        <div
          className={`mb-4 rounded-xl border border-gray-200 overflow-hidden transition-all duration-1000 ${
            isVisible['accordion']
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          } ${expandedSection === 'curriculum' ? 'shadow-lg border-gray-300' : 'hover:shadow-md'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          <button
            onClick={() => toggleSection('curriculum')}
            className="w-full flex items-center justify-between text-left px-4 xs:px-6 sm:px-8 py-4 xs:py-6 sm:py-8 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl xl:text-4xl font-light text-gray-900 pr-3 xs:pr-4">
              Our Curriculum
            </h2>
            <div className={`flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-500 ${
              expandedSection === 'curriculum' ? 'rotate-180 bg-black' : 'rotate-0'
            }`}>
              <ChevronDown className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                expandedSection === 'curriculum' ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expandedSection === 'curriculum' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 xs:px-6 sm:px-8 pb-4 xs:pb-6 sm:pb-8 pt-2 bg-gray-50">
              <div className="w-10 xs:w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-3 xs:mb-4"></div>
              <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                Our rigorous academic curriculum combines the best of British and international education, fostering critical thinking, creativity, and a lifelong love of learning through innovative teaching methods and personalized support.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div
          className={`mb-4 rounded-xl border border-gray-200 overflow-hidden transition-all duration-1000 ${
            isVisible['accordion']
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          } ${expandedSection === 'facilities' ? 'shadow-lg border-gray-300' : 'hover:shadow-md'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <button
            onClick={() => toggleSection('facilities')}
            className="w-full flex items-center justify-between text-left px-4 xs:px-6 sm:px-8 py-4 xs:py-6 sm:py-8 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl xl:text-4xl font-light text-gray-900 pr-3 xs:pr-4">
              World-Class Facilities
            </h2>
            <div className={`flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-500 ${
              expandedSection === 'facilities' ? 'rotate-180 bg-black' : 'rotate-0'
            }`}>
              <ChevronDown className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                expandedSection === 'facilities' ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expandedSection === 'facilities' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-4 xs:px-6 sm:px-8 pb-4 xs:pb-6 sm:pb-8 pt-2 bg-gray-50">
              <div className="w-10 xs:w-12 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mb-3 xs:mb-4"></div>
              <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed">
                State-of-the-art learning environments featuring cutting-edge technology, purpose-built science labs, performing arts theaters, Olympic-standard sports facilities, and inspiring creative spaces that enable students to excel in every discipline.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div
          className={`mb-4 rounded-xl border border-gray-200 overflow-hidden transition-all duration-1000 ${
            isVisible['accordion']
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          } ${expandedSection === 'community' ? 'shadow-lg border-gray-300' : 'hover:shadow-md'}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <button
            onClick={() => toggleSection('community')}
            className="w-full flex items-center justify-between text-left px-6 sm:px-8 py-6 sm:py-8 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 pr-4">
              Global Community
            </h2>
            <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-500 ${
              expandedSection === 'community' ? 'rotate-180 bg-black' : 'rotate-0'
            }`}>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                expandedSection === 'community' ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expandedSection === 'community' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 bg-gray-50">
              <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4"></div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Join a vibrant international community where students from over 50 nationalities learn together, celebrating diversity and building lifelong friendships while developing the intercultural competencies essential for global citizenship.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion Item 4 */}
        <div
          className={`mb-4 rounded-xl border border-gray-200 overflow-hidden transition-all duration-1000 ${
            isVisible['accordion']
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10'
          } ${expandedSection === 'admissions' ? 'shadow-lg border-gray-300' : 'hover:shadow-md'}`}
          style={{ transitionDelay: '0.4s' }}
        >
          <button
            onClick={() => toggleSection('admissions')}
            className="w-full flex items-center justify-between text-left px-6 sm:px-8 py-6 sm:py-8 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 pr-4">
              Admissions Process
            </h2>
            <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-500 ${
              expandedSection === 'admissions' ? 'rotate-180 bg-black' : 'rotate-0'
            }`}>
              <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                expandedSection === 'admissions' ? 'text-white' : 'text-gray-600'
              }`} />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expandedSection === 'admissions' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 bg-gray-50">
              <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4"></div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Our admissions team is dedicated to making the enrollment process seamless and supportive. We welcome applications year-round and provide personalized guidance to help families find the perfect fit for their child's educational journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccordionSection;
