import React, { useState, useEffect, useMemo } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ], []);

  // Track active section with Intersection Observer
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      { 
        threshold: 0.3, // Reduced threshold for better mobile experience
        rootMargin: '-80px 0px -50% 0px' // Account for fixed navbar
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [navItems]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (href) => {
    // Close mobile menu immediately
    setIsMenuOpen(false);
    
    // Wait a bit for menu to close, then scroll
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Calculate position accounting for fixed navbar
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - 80;
        
        // Scroll to position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex items-center justify-between py-4">
          {/* Empty div to maintain flexbox layout */}
          <div></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-gray-600 hover:text-blue-900 transition-colors duration-200 font-medium relative ${
                  activeSection === item.href.substring(1) 
                    ? 'text-blue-900 after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-blue-900 after:rounded-full' 
                    : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-blue-900 transition-colors"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 max-w-full overflow-hidden">
            <div className="px-4 py-2 space-y-1 max-w-6xl mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-colors duration-200 rounded-lg font-medium ${
                    activeSection === item.href.substring(1) 
                      ? 'text-blue-900 bg-blue-50 border-l-4 border-blue-900' 
                      : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left px-4 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors mt-2"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
