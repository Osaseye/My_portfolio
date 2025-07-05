import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation({ threshold: 0.2 });
  const [logoRef, isLogoVisible] = useScrollAnimation({ threshold: 0.3 });
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [subtitleRef, isSubtitleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className={`container-max relative z-10 text-center scroll-animate ${isHeroVisible ? 'animate' : ''}`}>
        <div className="max-w-4xl mx-auto">
          {/* Professional logo */}
          <div 
            ref={logoRef}
            className={`w-24 h-24 mx-auto mb-8 flex items-center justify-center scroll-animate-scale ${isLogoVisible ? 'animate' : ''}`}
          >
            <img 
              src="website-logo.png" 
              alt="Segun Adebowale - Full-Stack Developer" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          
          {/* Main headline */}
          <h1 
            ref={titleRef}
            className={`text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 scroll-animate ${isTitleVisible ? 'animate' : ''}`}
            style={{transitionDelay: '0.2s'}}
          >
            <span className="text-gradient">Segun Adebowale</span>
          </h1>
          
          {/* Professional title */}
          <p 
            ref={subtitleRef}
            className={`text-xl md:text-2xl lg:text-3xl text-slateGray mb-8 scroll-animate ${isSubtitleVisible ? 'animate' : ''}`}
            style={{transitionDelay: '0.4s'}}
          >
            Full-Stack Web Developer
          </p>
          
          {/* Tagline */}
          <p 
            className={`text-lg md:text-xl text-slateGray/80 mb-12 max-w-2xl mx-auto leading-relaxed scroll-animate ${isSubtitleVisible ? 'animate' : ''}`}
            style={{transitionDelay: '0.6s'}}
          >
            I design and build complete web applications — from beautiful frontends to powerful backend systems. 
            Building experiences that convert, retain, and evolve.
          </p>
          
          {/* CTA Buttons */}
          <div 
            ref={ctaRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center scroll-animate ${isCtaVisible ? 'animate' : ''}`}
            style={{transitionDelay: '0.8s'}}
          >
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
