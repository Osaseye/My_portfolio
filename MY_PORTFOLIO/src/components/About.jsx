import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import logo from '../assets/website-logo.png'

const About = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });
  const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, isImageVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, isStatsVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`section-padding bg-gradient-to-br from-background to-primary/5 overflow-hidden scroll-animate ${isSectionVisible ? 'animate' : ''}`}
    >
      <div className="container-max w-full max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-6 scroll-animate-left ${isContentVisible ? 'animate' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-slateGray leading-relaxed">
              <p className={`scroll-animate-stagger ${isContentVisible ? 'animate' : ''}`} style={{transitionDelay: '0.1s'}}>
                I'm a <strong className="text-primary">Full-Stack Developer</strong> who designs and builds complete web applications — from beautiful frontends to powerful backend systems. My work combines <strong className="text-primary">clean code, thoughtful UI/UX, and business-driven results</strong>.
              </p>
              
              <p className={`scroll-animate-stagger ${isContentVisible ? 'animate' : ''}`} style={{transitionDelay: '0.2s'}}>
                Whether it's logistics, lifestyle, or creative SaaS platforms, I help brands go from idea to launch with polished, responsive, and scalable solutions. Currently, I'm focused on crafting immersive web products, using tools like <strong className="text-primary">React, Tailwind CSS, Node.js, and MySQL</strong>.
              </p>
              
              <p className={`scroll-animate-stagger ${isContentVisible ? 'animate' : ''}`} style={{transitionDelay: '0.3s'}}>
                I don't just build websites — <strong className="text-accent">I build experiences that convert, retain, and evolve</strong>. With experience from my 6-month internship at <strong className="text-primary">Alusoft Technologies</strong>, I've worked on real-world projects as part of structured teams.
              </p>
            </div>
            
            {/* Key Points */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 scroll-animate ${isStatsVisible ? 'animate' : ''}`}
              style={{transitionDelay: '0.4s'}}
            >
              <div className={`flex items-center gap-3 scroll-animate-stagger ${isStatsVisible ? 'animate' : ''}`} style={{transitionDelay: '0.5s'}}>
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-text font-medium">2+ Years Experience</span>
              </div>
              <div className={`flex items-center gap-3 scroll-animate-stagger ${isStatsVisible ? 'animate' : ''}`} style={{transitionDelay: '0.6s'}}>
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-text font-medium">10+ Projects Completed</span>
              </div>
              <div className={`flex items-center gap-3 scroll-animate-stagger ${isStatsVisible ? 'animate' : ''}`} style={{transitionDelay: '0.7s'}}>
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-text font-medium">Full-Stack Developer</span>
              </div>
              <div className={`flex items-center gap-3 scroll-animate-stagger ${isStatsVisible ? 'animate' : ''}`} style={{transitionDelay: '0.8s'}}>
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-text font-medium">Alusoft Technologies</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className={`pt-6 scroll-animate ${isStatsVisible ? 'animate' : ''}`} style={{transitionDelay: '0.9s'}}>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Work Together
              </button>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div 
            ref={imageRef}
            className={`relative overflow-hidden scroll-animate-right ${isImageVisible ? 'animate' : ''}`}
          >
            <div className="relative z-10">
              {/* Professional logo */}
              <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center shadow-2xl p-8">
                <img 
                  src={logo}
                  alt="Segun Adebowale - Full-Stack Developer" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
