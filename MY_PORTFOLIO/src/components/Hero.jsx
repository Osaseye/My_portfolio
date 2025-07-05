import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-max relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Professional logo */}
          <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center animate-scale-up">
            <img 
              src="website-logo.png" 
              alt="Segun Adebowale - Full-Stack Developer" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Segun Adebowale</span>
          </h1>
          
          {/* Professional title */}
          <p className="text-xl md:text-2xl lg:text-3xl text-slateGray mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Full-Stack Web Developer
          </p>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-slateGray/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
            I design and build complete web applications — from beautiful frontends to powerful backend systems. 
            Building experiences that convert, retain, and evolve.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
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
