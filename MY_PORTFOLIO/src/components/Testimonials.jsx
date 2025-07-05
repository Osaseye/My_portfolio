import React from 'react';
import crownlithLogo from '../assets/crownlithlogo.png';
import alusoftLogo from '../assets/Alusoft.jpg';
import kchairLogo from '../assets/kchairandnails.jpg';
import otakuLogo from '../assets/OTAKU_PLANNER_LOGO-removebg-preview.png';
import mynextreadLogo from '../assets/mynextread-no-bg.png';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Testimonials = () => {
  // Scroll animation hooks
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 });
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [clientsRef, clientsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [ctaRef, ctaVisible] = useScrollAnimation({ threshold: 0.1 });

  const Testimonials = [
    {   
      id: 1,
      name: "Ade Adebowale",
      role: "CEO, Crownlith Marine & Logistics",
      content: "Segun delivered an exceptional website that perfectly captured our brand's maritime expertise. The responsive design and user experience exceeded our expectations.",
      rating: 5,
      image: "AA"
    },
    {
      id: 2,
      name: "Kenechuckwu Edozie-Obinwanne",
      role: "Owner, KC Hair & Nails",
      content: "The salon website Segun created has significantly increased our online bookings. The modern design and smooth functionality perfectly represent our brand.",
      rating: 5,
      image: "KC"
    },
    {
      id: 3,
      name: "Ebo Mofiyin",
      role: "Startup Founder",
      content: "Working with Segun was a game-changer for our business. His attention to detail and technical expertise helped us launch with confidence.",
      rating: 5,
      image: "EM"
    }
  ];

  const clients = [
    {
      name: "Crownlith Marine & Logistics",
      logo: crownlithLogo,
      description: "Maritime Services"
    },
    {
      name: "KC Hair & Nails", 
      logo: kchairLogo,
      description: "Beauty Salon"
    },
    {
      name: "Alusoft Technologies",
      logo: alusoftLogo,
      description: "Tech Company (Internship)"
    },
    {
      name: "MyNextRead",
      logo: mynextreadLogo,
      description: "Reading Platform"
    },
    {
      name: "OtakuPlanner",
      logo: otakuLogo,
      description: "Personal Project"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-max">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate-scale ${headerVisible ? 'animate' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-slateGray max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={testimonialsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 scroll-animate-stagger ${testimonialsVisible ? 'animate' : ''}`}
        >
          {Testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Quote Icon */}
              <div className="text-accent mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slateGray leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-text">{testimonial.name}</h4>
                  <p className="text-sm text-slateGray">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div 
          ref={clientsRef}
          className={`bg-white rounded-2xl p-8 md:p-12 shadow-sm scroll-animate-left ${clientsVisible ? 'animate' : ''}`}
        >
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-primary">
            Trusted By Amazing Clients
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:bg-background/50 transition-all duration-300 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="w-16 h-18 object-contain rounded-lg"
                  />
                </div>
                <h4 className="font-semibold text-text mb-2 text-sm">{client.name}</h4>
                <p className="text-xs text-slateGray">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div 
          ref={ctaRef}
          className={`text-center mt-12 scroll-animate-scale ${ctaVisible ? 'animate' : ''}`}
        >
          <p className="text-lg text-slateGray mb-6">
            Ready to join these satisfied clients?
          </p>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
