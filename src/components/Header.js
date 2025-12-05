import React, { useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { ChevronDown, Sparkles, Mail, ArrowRight, Menu as MenuIcon, X, Search } from 'lucide-react';

function Header({ selectedSchool, availableSchools, setSelectedSchool, setSelectedSchoolSlug, setChatOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');
  const [openMobileSection, setOpenMobileSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* DESKTOP HEADER - Shows on screens >= lg (1024px) */}
      <header className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        {/* Top Bar - Hidden when scrolled */}
        {!scrolled && (
          <div className="border-b border-gray-200 px-4 md:px-8 py-2">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
              {/* Logo and School Name Dropdown */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/crest-logo.svg"
                  alt="Dulwich College"
                  className="h-16 w-16"
                />
                {/* School Selector Dropdown */}
                <div className="relative group">
                  <button className="flex items-center gap-2 text-base font-medium transition-colors" style={{ color: '#000' }}>
                    {selectedSchool || 'Dulwich College Shanghai Puxi'}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {availableSchools && availableSchools.length > 0 && (
                    <div className="absolute left-0 top-full mt-2 w-80 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60] max-h-96 overflow-y-auto">
                      <div className="py-2">
                        {availableSchools.map((school) => (
                          <button
                            key={school.id}
                            onClick={() => {
                              const schoolName = `Dulwich College ${school.title}`;
                              setSelectedSchool(schoolName);
                              setSelectedSchoolSlug(school.slug);
                              // Save to localStorage to remember the selection
                              localStorage.setItem('selectedSchoolSlug', school.slug);
                              localStorage.setItem('selectedSchoolName', schoolName);
                            }}
                            className={`w-full text-left px-6 py-3 text-base hover:bg-gray-50 transition-colors ${
                              selectedSchool === `Dulwich College ${school.title}`
                                ? 'font-medium'
                                : ''
                            }`}
                            style={{
                              color: selectedSchool === `Dulwich College ${school.title}` ? '#D30013' : '#4B5563'
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span>Dulwich College {school.title}</span>
                              {selectedSchool === `Dulwich College ${school.title}` && (
                                <span style={{ color: '#D30013' }}>✓</span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Top Right Links */}
              <div className="flex items-center gap-6 text-sm text-gray-700">
                <a href="#calendar" className="hover:text-red-600 transition-colors">
                  School Calendar
                </a>
                <a href="#zh" className="hover:text-red-600 transition-colors">
                  中文
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <div className={`px-4 md:px-8 ${scrolled ? 'py-3' : 'py-4'} transition-all duration-300`}>
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            {/* Logo - Only visible when scrolled */}
            {scrolled && (
              <div className="flex items-center">
                <img
                  src="/images/crest-logo.svg"
                  alt="Dulwich College"
                  className="transition-all duration-300 h-10 w-10"
                />
              </div>
            )}

            {/* Navigation Menu */}
            <NavigationMenu.Root className="flex relative z-50" delayDuration={0}>
              <NavigationMenu.List className="flex items-center gap-1">
                {/* Why Dulwich */}
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 data-[state=open]:text-gray-900 outline-none transition-colors relative">
                    Why Dulwich
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 group-data-[state=open]:scale-x-100 transition-transform origin-left"></span>
                  </NavigationMenu.Trigger>
              
                </NavigationMenu.Item>

                {/* Learning */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#learning" className="group px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 outline-none transition-colors relative block">
                    Learning
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                {/* Community */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#community" className="group px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 outline-none transition-colors relative block">
                    Community
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>

                {/* Admissions */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link href="#admissions" className="group px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 outline-none transition-colors relative block">
                    Admissions
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen flex justify-center z-[100]">
                <NavigationMenu.Viewport className="relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden bg-white shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out" />
              </div>
            </NavigationMenu.Root>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChatOpen && setChatOpen(true)}
                className="group flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                style={{ color: '#D30013', borderColor: '#D30013' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D30013';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#D30013';
                }}
              >
                <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                Ask AI
              </button>

              <button
                className="group flex items-center gap-2 px-4 py-2 text-sm font-medium border-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                style={{ color: '#D30013', borderColor: '#D30013' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FEF2F2'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                Enquire
              </button>

              <button
                className="group flex items-center gap-2 px-6 py-2 text-sm font-medium text-white rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"
                style={{ backgroundColor: '#D30013' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B8000F'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#D30013'; }}
                
              >
                Apply Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE HEADER - Shows on screens < lg (below 1024px) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img src="/images/crest-logo.svg" alt="Dulwich College" className="h-12 w-12" />

            {/* School Name */}
            <div className="flex-1 mx-3">
              <h2 className="text-xs font-semibold text-gray-900 leading-tight">
                {selectedSchool ? selectedSchool.replace('Dulwich College ', '').toUpperCase() : 'DULWICH COLLEGE'}
              </h2>
            </div>

            {/* School Calendar & Language */}
            <div className="flex items-center gap-3 text-xs text-gray-700">
              <a href="#calendar" className="hover:text-red-600">School Calendar</a>
              <a href="#zh" className="hover:text-red-600">中文</a>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION - Fixed at bottom */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-4 h-16">
          {/* MENU */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors"
          >
            <MenuIcon className="w-5 h-5 text-gray-700" />
            <span className="text-[10px] font-medium text-gray-700">MENU</span>
          </button>

          {/* AI ASSISTANT */}
          <button
            onClick={() => setChatOpen && setChatOpen(true)}
            className="flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors"
          >
            <Sparkles className="w-5 h-5 text-red-600" />
            <span className="text-[10px] font-medium text-gray-700">AI ASSISTANT</span>
          </button>

          {/* ENQUIRE */}
          <button className="flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors">
            <Mail className="w-5 h-5 text-gray-700" />
            <span className="text-[10px] font-medium text-gray-700">ENQUIRE</span>
          </button>

          {/* APPLY */}
          <button className="flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors">
            <ArrowRight className="w-5 h-5 text-red-600" />
            <span className="text-[10px] font-medium text-gray-700">APPLY</span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-white overflow-y-auto">
          {/* Menu Header */}
          <div className="sticky top-0 bg-gray-100 border-b border-gray-200 px-4 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img src="/images/crest-logo.svg" alt="Dulwich College" className="h-10 w-10" />
                <div>
                  <h3 className="text-xs font-bold text-gray-900">DULWICH COLLEGE | {selectedSchool ? selectedSchool.replace('Dulwich College ', '').toUpperCase() : 'SHANGHAI PUDONG'}</h3>
                  <p className="text-[10px] text-gray-600">上海德威外籍人员子女学校（浦东）</p>
                </div>
              </div>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-200 rounded-full">
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Language Tabs */}
            <div className="flex gap-1 border-b border-gray-300">
              <button
                onClick={() => setActiveLanguage('HOME')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeLanguage === 'HOME' ? 'border-b-2 border-red-600 text-gray-900' : 'text-gray-600'
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => setActiveLanguage('中文')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeLanguage === '中文' ? 'border-b-2 border-red-600 text-gray-900' : 'text-gray-600'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setActiveLanguage('EN')}
                className={`px-4 py-2 text-sm font-medium ${
                  activeLanguage === 'EN' ? 'border-b-2 border-red-600 text-gray-900' : 'text-gray-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Menu Content */}
          <div className="px-4 py-6">
            {/* Search */}
            <div className="mb-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            {/* Menu Items */}
            <div className="space-y-1">
              <button
                onClick={() => setOpenMobileSection(openMobileSection === 'why' ? null : 'why')}
                className="w-full flex items-center justify-between py-3 border-b border-gray-200"
              >
                <span className="text-base text-gray-900">Why Dulwich</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openMobileSection === 'why' ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => setOpenMobileSection(openMobileSection === 'learning' ? null : 'learning')}
                className="w-full flex items-center justify-between py-3 border-b border-gray-200"
              >
                <span className="text-base text-gray-900">Learning</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openMobileSection === 'learning' ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => setOpenMobileSection(openMobileSection === 'community' ? null : 'community')}
                className="w-full flex items-center justify-between py-3 border-b border-gray-200"
              >
                <span className="text-base text-gray-900">Community</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openMobileSection === 'community' ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={() => setOpenMobileSection(openMobileSection === 'admissions' ? null : 'admissions')}
                className="w-full flex items-center justify-between py-3 border-b border-gray-200"
              >
                <span className="text-base text-gray-900">Admissions</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openMobileSection === 'admissions' ? 'rotate-180' : ''}`} />
              </button>

              <a href="#sitemap" className="block py-3 text-sm text-gray-700 border-b border-gray-200">
                Full Site Map
              </a>

              {/* Schools Dropdown */}
              <button
                onClick={() => setOpenMobileSection(openMobileSection === 'schools' ? null : 'schools')}
                className="w-full flex items-center justify-between py-3 border-b border-gray-200"
              >
                <span className="text-base text-gray-900">Schools</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openMobileSection === 'schools' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileSection === 'schools' && availableSchools && (
                <div className="bg-white rounded-lg p-2 space-y-1">
                  {availableSchools.map((school) => (
                    <button
                      key={school.id}
                      onClick={() => {
                        const schoolName = `Dulwich College ${school.title}`;
                        setSelectedSchool(schoolName);
                        setSelectedSchoolSlug(school.slug);
                        // Save to localStorage to remember the selection
                        localStorage.setItem('selectedSchoolSlug', school.slug);
                        localStorage.setItem('selectedSchoolName', schoolName);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded hover:bg-gray-50 transition-colors ${
                        selectedSchool === `Dulwich College ${school.title}`
                          ? 'font-medium'
                          : ''
                      }`}
                      style={{
                        color: selectedSchool === `Dulwich College ${school.title}` ? '#D30013' : '#4B5563'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>Dulwich College {school.title}</span>
                        {selectedSchool === `Dulwich College ${school.title}` && (
                          <span style={{ color: '#D30013' }}>✓</span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <a href="#parent-portal" className="block py-3 text-sm text-gray-700 border-b border-gray-200">
                Parent Portal
              </a>

              <a href="#calendar" className="block py-3 text-sm text-gray-700 border-b border-gray-200">
                School Calendar
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
