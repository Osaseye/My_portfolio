import React from 'react';
import logo from '../assets/website-logo.png'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background to-primary/5">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-slateGray leading-relaxed">
              <p>
                I'm a <strong className="text-primary">Full-Stack Developer</strong> who designs and builds complete web applications — from beautiful frontends to powerful backend systems. My work combines <strong className="text-primary">clean code, thoughtful UI/UX, and business-driven results</strong>.
              </p>
              
              <p>
                Whether it's logistics, lifestyle, or creative SaaS platforms, I help brands go from idea to launch with polished, responsive, and scalable solutions. Currently, I'm focused on crafting immersive web products, using tools like <strong className="text-primary">React, Tailwind CSS, Node.js, and MySQL</strong>.
              </p>
              
              <p>
                I don't just build websites — <strong className="text-accent">I build experiences that convert, retain, and evolve</strong>. With experience from my 6-month internship at <strong className="text-primary">Alusoft Technologies</strong>, I've worked on real-world projects as part of structured teams.
              </p>
            </div>
            
            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-text font-medium">2+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-text font-medium">10+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-text font-medium">Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
                <span className="text-text font-medium">Alusoft Technologies</span>
              </div>
            </div>
            
            {/* CTA */}
            <div className="pt-6">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Work Together
              </button>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
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
            
            {/* Floating cards */}
            <div className="absolute -top-12 -left-12 bg-white rounded-lg shadow-lg p-4 card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-text">Clean Code</span>
              </div>
            </div>

            <div className="absolute -bottom-12 -right-12 bg-white rounded-lg shadow-lg p-4 card animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-text">Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
