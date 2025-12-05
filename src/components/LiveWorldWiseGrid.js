import React from 'react';
import { Bird, Heart, BookOpen, Globe as GlobeIcon, Brain, GraduationCap, Maximize2, X, ArrowRight } from 'lucide-react';

function LiveWorldWiseGrid({
  sectionRefs,
  isVisible,
  liveWorldWiseState,
  expandedView,
  handleExpandView,
  handleCloseExpandView
}) {
  return (
    <section
      id="live-world-wise"
      ref={(el) => (sectionRefs.current['live-world-wise'] = el)}
      className={`bg-white transition-all duration-1000 ${
        isVisible['live-world-wise']
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* Live / Early Years Column */}
        <div className="relative group overflow-hidden border border-[#707070]/20 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 transition-opacity duration-500 group-hover:opacity-80"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8 z-10">
            {/* Text */}
            <h2 className="font-black uppercase tracking-tight text-white text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg transition-transform duration-500 group-hover:scale-105">
              Early Years<br/>Education
            </h2>

            {/* Description - visible on hover */}
            <p className="text-white text-center text-sm sm:text-base max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              Nurturing young minds in a safe and inspiring environment
            </p>

            {/* Expand Button */}
            <button
              className="inline-flex items-center gap-2 rounded-full bg-white/90 text-gray-900 px-5 py-2.5 hover:bg-white transition-all duration-300 transform group-hover:scale-110 opacity-90 hover:opacity-100 font-semibold shadow-lg"
              aria-label="Learn more about Early Years"
            >
              <span className="text-sm">Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* World / Admissions Column */}
        <div className="relative group overflow-hidden border border-[#707070]/20 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 transition-opacity duration-500 group-hover:opacity-80"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8 z-10">
            {/* Text */}
            <h2 className="font-black uppercase tracking-tight text-white text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg transition-transform duration-500 group-hover:scale-105">
              Admissions<br/>Criteria
            </h2>

            {/* Description - visible on hover */}
            <p className="text-white text-center text-sm sm:text-base max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              Learn about our admissions process and requirements
            </p>

            {/* Expand Button */}
            <button
              className="inline-flex items-center gap-2 rounded-full bg-white/90 text-gray-900 px-5 py-2.5 hover:bg-white transition-all duration-300 transform group-hover:scale-110 opacity-90 hover:opacity-100 font-semibold shadow-lg"
              aria-label="Learn more about Admissions"
            >
              <span className="text-sm">Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Wise / Senior Years Column */}
        <div className="relative group overflow-hidden border border-[#707070]/20 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80')`
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 transition-opacity duration-500 group-hover:opacity-80"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center gap-6 p-8 z-10">
            {/* Text */}
            <h2 className="font-black uppercase tracking-tight text-white text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-lg transition-transform duration-500 group-hover:scale-105">
              Senior Years<br/>Programme
            </h2>

            {/* Description - visible on hover */}
            <p className="text-white text-center text-sm sm:text-base max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              Preparing students for university and beyond with academic excellence
            </p>

            {/* Expand Button */}
            <button
              className="inline-flex items-center gap-2 rounded-full bg-white/90 text-gray-900 px-5 py-2.5 hover:bg-white transition-all duration-300 transform group-hover:scale-110 opacity-90 hover:opacity-100 font-semibold shadow-lg"
              aria-label="Learn more about Senior Years"
            >
              <span className="text-sm">Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>

      {/* Full Screen Expanded Views */}
      {expandedView && (
        <div className="fixed inset-0 z-50 bg-white animate-fadeIn scroll-smooth">
          {/* Close Button */}
          <button
            onClick={handleCloseExpandView}
            className="fixed top-6 right-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-black/80 text-white hover:bg-black transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Live/Ducks Expanded Content */}
          {expandedView === 'live' && (
            <div className="h-full overflow-y-auto scroll-smooth">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 animate-slideInFromBottom">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/80 text-white mb-8">
                    <Bird className="w-12 h-12" />
                  </div>
                  <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight text-[#111] mb-6">
                    Live
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experience life at Dulwich through our vibrant community, exceptional facilities, and world-class programs that inspire students to live their fullest potential.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Enrichment Programmes</h3>
                    <p className="text-gray-600">Diverse activities to develop talents and passions beyond the classroom.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Sports Excellence</h3>
                    <p className="text-gray-600">World-class facilities and coaching to nurture athletic potential.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Visual & Performing Arts</h3>
                    <p className="text-gray-600">Creative spaces for artistic expression and performance.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Student Leadership</h3>
                    <p className="text-gray-600">Opportunities to lead and make a difference in the community.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Wellbeing Support</h3>
                    <p className="text-gray-600">Comprehensive support for physical and mental wellbeing.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Community Life</h3>
                    <p className="text-gray-600">A welcoming community where every student belongs.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* World/Juniors Expanded Content */}
          {expandedView === 'world' && (
            <div className="h-full overflow-y-auto scroll-smooth">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 animate-slideInFromBottom">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/80 text-white mb-8">
                    <GlobeIcon className="w-12 h-12" />
                  </div>
                  <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight text-[#111] mb-6">
                    World
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our global network of schools connects students across continents, fostering international understanding and preparing them for success in an interconnected world.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">The Network Effect</h3>
                    <p className="text-gray-600">Connect with students across our global network of schools.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Worldwide Events</h3>
                    <p className="text-gray-600">Participate in international competitions and collaborations.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Global Partnerships</h3>
                    <p className="text-gray-600">Partnerships with leading institutions worldwide.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Cultural Exchange</h3>
                    <p className="text-gray-600">Experience diverse cultures through exchange programs.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Alumni Network</h3>
                    <p className="text-gray-600">Join a global community of successful alumni.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">International Curriculum</h3>
                    <p className="text-gray-600">World-class education recognized globally.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Wise/Seniors Expanded Content */}
          {expandedView === 'wise' && (
            <div className="h-full overflow-y-auto scroll-smooth">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 animate-slideInFromBottom">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/80 text-white mb-8">
                    <Brain className="w-12 h-12" />
                  </div>
                  <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight text-[#111] mb-6">
                    Wise
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our comprehensive curriculum and expert guidance help students develop wisdom, critical thinking, and the skills needed to navigate life's challenges with confidence.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Academic Excellence</h3>
                    <p className="text-gray-600">Outstanding results through innovative teaching methods.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">University Counselling</h3>
                    <p className="text-gray-600">Expert guidance for university applications worldwide.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Critical Thinking</h3>
                    <p className="text-gray-600">Develop analytical and problem-solving skills.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Research Skills</h3>
                    <p className="text-gray-600">Cultivate independent research and inquiry.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Career Guidance</h3>
                    <p className="text-gray-600">Prepare for future careers with expert support.</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Life Skills</h3>
                    <p className="text-gray-600">Essential skills for success beyond academics.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default LiveWorldWiseGrid;
