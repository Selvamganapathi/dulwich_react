import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StatisticsSection from '../components/StatisticsSection';
import GalleryScrollSlider from '../components/GalleryScrollSlider';
import AccordionSection from '../components/AccordionSection';
import LiveWorldWiseGrid from '../components/LiveWorldWiseGrid';
import HomeBanner from '../components/HomeBanner';
import BuildingBridges from '../components/BuildingBridges';
import Testimonials from '../components/Testimonials';
import SchoolLocations from '../components/SchoolLocations';
import Admissions from '../components/Admissions';
import Footer from '../components/Footer';
import AIChatAssistant from '../components/AIChatAssistant';
import Header from '../components/Header';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ '37.5': 0, '7': 0, '100': 0, '2025': 2025 });
  const [selectedLocation, setSelectedLocation] = useState('Shanghai');
  const [selectedSchool, setSelectedSchool] = useState('Dulwich International College');
  const [selectedSchoolSlug, setSelectedSchoolSlug] = useState('shanghai-puxi');
  const [availableSchools, setAvailableSchools] = useState([]);
  const [liveWorldWiseState, setLiveWorldWiseState] = useState({
    live: { icon: 'bird', text: 'Ducks' },
    world: { icon: 'book', text: 'Juniors' },
    wise: { icon: 'brain', text: 'Wise' }
  });
  const [expandedView, setExpandedView] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'bot', text: 'Hi, I am the Dulwich AI Assistant. How can I help you today?' }
  ]);
  const observerRef = useRef(null);
  const sectionRefs = useRef({});
  const galleryContainerRef = useRef(null);
  const galleryInnerRef = useRef(null);
  const globeRef = useRef(null);
  const chatMessagesEndRef = useRef(null);
  const carouselItemsRef = useRef([]);

  const toggleSection = React.useCallback((section) => {
    setExpandedSection(prev => prev === section ? null : section);
  }, []);

  const handleExpandView = React.useCallback((view) => {
    requestAnimationFrame(() => {
      setExpandedView(view);
    });
  }, []);

  const handleCloseExpandView = React.useCallback(() => {
    requestAnimationFrame(() => {
      setExpandedView(null);
    });
  }, []);

  const handleSendMessage = React.useCallback(() => {
    if (!chatMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: chatMessage
    };

    setChatMessages(prev => [...prev, userMessage]);
    setChatMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: 'Thank you for your question! Our admissions team will provide you with detailed information shortly.'
      };
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  }, [chatMessage]);

  // Fetch active schools from API
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const API_URL = process.env.NODE_ENV === 'development'
          ? '/api/active_schools'
          : 'https://dulwich-ai-chat.atalent.xyz/api/active_schools';

        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          if (result.status === 'success' && result.data) {
            setAvailableSchools(result.data);

            // Check localStorage for previously selected school
            const savedSchoolSlug = localStorage.getItem('selectedSchoolSlug');
            const savedSchoolName = localStorage.getItem('selectedSchoolName');

            if (result.data.length > 0) {
              // If there's a saved school, try to find it in the available schools
              if (savedSchoolSlug && savedSchoolName) {
                const savedSchool = result.data.find(s => s.slug === savedSchoolSlug);
                if (savedSchool) {
                  setSelectedSchool(savedSchoolName);
                  setSelectedSchoolSlug(savedSchoolSlug);
                } else {
                  // Saved school not found, use default
                  const defaultSchool = result.data.find(s => s.slug === 'shanghai-puxi') || result.data[0];
                  setSelectedSchool(`Dulwich College ${defaultSchool.title}`);
                  setSelectedSchoolSlug(defaultSchool.slug);
                  localStorage.setItem('selectedSchoolSlug', defaultSchool.slug);
                  localStorage.setItem('selectedSchoolName', `Dulwich College ${defaultSchool.title}`);
                }
              } else {
                // No saved school, use default
                const defaultSchool = result.data.find(s => s.slug === 'shanghai-puxi') || result.data[0];
                setSelectedSchool(`Dulwich College ${defaultSchool.title}`);
                setSelectedSchoolSlug(defaultSchool.slug);
                localStorage.setItem('selectedSchoolSlug', defaultSchool.slug);
                localStorage.setItem('selectedSchoolName', `Dulwich College ${defaultSchool.title}`);
              }
            }
          }
        }
      } catch (error) {
        console.error('Error fetching schools:', error);
        // Fallback to default schools if API fails
        const fallbackSchools = [
          { id: 1, slug: 'beijing', title: 'Beijing' },
          { id: 2, slug: 'shanghai-pudong', title: 'Shanghai Pudong' },
          { id: 3, slug: 'shanghai-puxi', title: 'Shanghai Puxi' },
          { id: 4, slug: 'suzhou', title: 'Suzhou' },
          { id: 5, slug: 'singapore', title: 'Singapore' },
          { id: 8, slug: 'seoul', title: 'Seoul' },
          { id: 9, slug: '', title: 'Dulwich International College' }
        ];
        setAvailableSchools(fallbackSchools);

        // Set default school for fallback
        const defaultSchool = fallbackSchools.find(s => s.slug === '') || fallbackSchools[0];
        setSelectedSchool(`Dulwich College ${defaultSchool.title}`);
        setSelectedSchoolSlug(defaultSchool.slug);
      }
    };

    fetchSchools();
  }, []);

  // Prevent body scroll when expanded view is open
  useEffect(() => {
    if (expandedView) {
      // Save current scroll position
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      // Restore the scroll position
      window.scrollTo(0, scrollPosition);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [expandedView, scrollPosition]);

  // Handle Escape key to close expanded view
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && expandedView) {
        handleCloseExpandView();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [expandedView, handleCloseExpandView]);

  // Auto-scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatMessagesEndRef.current) {
      chatMessagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    // Hero section is visible on initial load
    setIsVisible((prev) => ({ ...prev, hero: true }));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentObserver = observerRef.current;
    const refs = sectionRefs.current;

    Object.keys(refs).forEach((key) => {
      if (refs[key] && key !== 'hero') {
        currentObserver.observe(refs[key]);
      }
    });

    return () => {
      if (currentObserver) {
        Object.keys(refs).forEach((key) => {
          if (refs[key]) {
            currentObserver.unobserve(refs[key]);
          }
        });
      }
    };
  }, []);

  // Initialize globe when schools section is visible
  const schoolsVisible = isVisible['schools'];
  useEffect(() => {
    if (globeRef.current && schoolsVisible) {
      // Set initial camera position to Shanghai
      globeRef.current.pointOfView({
        lat: 31.2304,
        lng: 121.4737,
        altitude: 2.5
      }, 0);
    }
  }, [schoolsVisible]);

  // GSAP ScrollTrigger for gallery pinning
  const galleryVisible = isVisible['gallery'];
  useEffect(() => {
    if (galleryContainerRef.current && galleryInnerRef.current && galleryVisible) {
      const container = galleryContainerRef.current;
      const inner = galleryInnerRef.current;

      const scrollWidth = inner.scrollWidth - window.innerWidth;

      const pinTrigger = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        pin: true,
        anticipatePin: 1,
        scrub: true,
        invalidateOnRefresh: true,
      });

      gsap.to(inner, {
        x: () => -(inner.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        pinTrigger.kill();
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === container) {
            trigger.kill();
          }
        });
      };
    }
  }, [galleryVisible]);

  // Counter animation for statistics
  const statsVisible = isVisible['stats'];
  useEffect(() => {
    if (statsVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const countersToAnimate = [
        { key: '37.5', target: 37.5, decimals: 1 },
        { key: '7', target: 7, decimals: 0 },
        { key: '100', target: 100, decimals: 0 },
      ];

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        countersToAnimate.forEach(({ key, target, decimals }) => {
          const current = target * progress;
          setCounters((prev) => ({
            ...prev,
            [key]: decimals === 1 ? parseFloat(current.toFixed(1)) : Math.floor(current),
          }));
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          countersToAnimate.forEach(({ key, target, decimals }) => {
            setCounters((prev) => ({
              ...prev,
              [key]: decimals === 1 ? parseFloat(target.toFixed(1)) : target,
            }));
          });
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [statsVisible]);

  return (
    <div className="bg-white scroll-smooth overflow-x-hidden w-full max-w-[100vw]">
      {/* New Header Component */}
      <Header
        selectedSchool={selectedSchool}
        availableSchools={availableSchools}
        setSelectedSchool={setSelectedSchool}
        setSelectedSchoolSlug={setSelectedSchoolSlug}
        setChatOpen={setChatOpen}
      />
      <HomeBanner
        sectionRefs={sectionRefs}
        isVisible={isVisible}
      />

      <BuildingBridges
        sectionRefs={sectionRefs}
        isVisible={isVisible}
      />

      {/* Statistics Section */}
      <StatisticsSection
        sectionRefs={sectionRefs}
        isVisible={isVisible}
        counters={counters}
      />

      {/* Gallery Scroll Slider - Exact Rivian Style */}
      <GalleryScrollSlider
        sectionRefs={sectionRefs}
        isVisible={isVisible}
        galleryContainerRef={galleryContainerRef}
        galleryInnerRef={galleryInnerRef}
      />

      {/* Accordion Section */}
      <AccordionSection
        sectionRefs={sectionRefs}
        isVisible={isVisible}
        expandedSection={expandedSection}
        toggleSection={toggleSection}
      />

      {/* Live World Wise Grid Section */}
      <LiveWorldWiseGrid
        sectionRefs={sectionRefs}
        isVisible={isVisible}
        liveWorldWiseState={liveWorldWiseState}
        expandedView={expandedView}
        handleExpandView={handleExpandView}
        handleCloseExpandView={handleCloseExpandView}
      />

      <Testimonials
        sectionRefs={sectionRefs}
        isVisible={isVisible}
      />

      <SchoolLocations
        sectionRefs={sectionRefs}
        isVisible={isVisible}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        globeRef={globeRef}
      />

      <Admissions
        sectionRefs={sectionRefs}
        isVisible={isVisible}
      />

      <Footer
        sectionRefs={sectionRefs}
        isVisible={isVisible}
        availableSchools={availableSchools}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
        setSelectedSchoolSlug={setSelectedSchoolSlug}
      />

      <AIChatAssistant
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
        handleSendMessage={handleSendMessage}
        chatMessagesEndRef={chatMessagesEndRef}
        selectedSchoolSlug={selectedSchoolSlug}
      />

    </div>
  );
}

export default Home;
