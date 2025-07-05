import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuAnimating, setIsMobileMenuAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to detect current active section
  const getCurrentActiveSection = (scrollPosition = null) => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = scrollPosition !== null ? scrollPosition : window.scrollY;
    
    // Check if we're at the very top (home section)
    if (scrollY < 50) {
      return 'home';
    }
    
    let currentSection = 'home'; // Default fallback
    
    // Check each section to find which one the user is currently in
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      
      // Account for navbar height and add some buffer
      const adjustedTop = sectionTop - 120;
      const adjustedBottom = sectionBottom - 120;
      
      // Check if current scroll position is within this section
      if (scrollY >= adjustedTop && scrollY < adjustedBottom) {
        currentSection = section.id;
      }
    });
    
    return currentSection;
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Save current scroll position FIRST
      const scrollY = window.scrollY;
      setSavedScrollPosition(scrollY);
      
      // Always update active section when mobile menu opens
      const currentSection = getCurrentActiveSection(scrollY);
      setActiveSection(currentSection);
      
      // THEN disable scrolling (this changes the DOM)
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      // Start animation
      setIsMobileMenuAnimating(true);
    } else {
      // Re-enable scrolling and restore position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      // Restore scroll position immediately
      const scrollPos = savedScrollPosition;
      if (scrollPos >= 0) {
        window.scrollTo(0, scrollPos);
      }
      
      // End animation
      setIsMobileMenuAnimating(false);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen, savedScrollPosition, activeSection]);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];



  const scrollToSection = (href) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);

    // Use setTimeout to ensure menu closes and scroll position is restored
    setTimeout(() => {
      if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80; // Account for fixed navbar
          const elementPosition = element.offsetTop - headerHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 300); // Increased delay to ensure proper state restoration
  };

  // Function to just close mobile menu without scrolling
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (!isMobileMenuOpen) {
      // Save current scroll position FIRST
      const scrollY = window.scrollY;
      setSavedScrollPosition(scrollY);

      // Always update active section when mobile menu opens
      const currentSection = getCurrentActiveSection(scrollY);
      setActiveSection(currentSection);

      // THEN disable scrolling (this changes the DOM)
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;

      // Start animation
      setIsMobileMenuAnimating(true);
    } else {
      // Re-enable scrolling and restore position
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';

      // Restore scroll position immediately
      const scrollPos = savedScrollPosition;
      if (scrollPos >= 0) {
        window.scrollTo(0, scrollPos);
      }

      // End animation
      setIsMobileMenuAnimating(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
      

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-text hover:text-primary transition-all duration-300 font-medium ${
                  activeSection === item.id ? 'text-primary nav-item-active' : ''
                }`}
              >
                {item.label}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full nav-active-indicator"></span>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <svg 
              className="w-6 h-6 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className={`md:hidden fixed inset-0 bg-white z-50 flex flex-col transition-all duration-300 ${
            isMobileMenuAnimating ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'
          }`}>
            {/* Header with Close Button */}
            <div className="flex items-center justify-end p-6 animate-fade-in">
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-slateGray/10 transition-colors"
              >
                <svg 
                  className="w-6 h-6 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items - Centered */}
            <div className="flex-1 flex flex-col justify-center items-center px-6">
              <div className="space-y-8 text-center">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative block w-full text-center text-3xl font-heading font-semibold transition-all duration-200 transform hover:scale-105 animate-fade-in ${
                      activeSection === item.id ? 'text-primary mobile-nav-active' : 'text-text hover:text-primary'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1 + 0.2}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    {item.label}
                    {/* Active indicator for mobile */}
                    {activeSection === item.id && (
                      <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-primary text-lg py-4 px-8"
                >
                  Let's Work Together
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
