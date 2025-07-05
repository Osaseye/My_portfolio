import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import crownlithImage from '../assets/crownlith.png';
import kcHairImage from '../assets/kchairandnails.jpg';
import otakuPlannerImage from '../assets/OTAKU PLANNER LOGO.png';
import myNextReadImage from '../assets/mynextread.png'; // Assuming you have an image for MyNextRead

const Projects = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [project1Ref, isProject1Visible] = useScrollAnimation({ threshold: 0.2 });
  const [project2Ref, isProject2Visible] = useScrollAnimation({ threshold: 0.2 });
  const [project3Ref, isProject3Visible] = useScrollAnimation({ threshold: 0.2 });
  const [project4Ref, isProject4Visible] = useScrollAnimation({ threshold: 0.2 });

  const projects = [
    {
      id: 1,
      title: "Crownlith Marine & Logistics",
      description: "Corporate logistics site built with React + Tailwind. Clean, professional layout tailored to brand identity. Fully responsive for mobile + desktop.",
      image: crownlithImage,
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      liveLink: "https://crownlithlogistics.vercel.app",
      showLiveDemo: true,
      category: "Corporate Website",
      ref: project1Ref,
      isVisible: isProject1Visible
    },
    {
      id: 2,
      title: "KC Hair & Nails",
      description: "Beauty services site with booking-friendly UX. Colorful, vibrant branding with service-focused layout and image-rich presentation. Built with React and styled using Tailwind CSS.",
      image: kcHairImage,
      techStack: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveLink: "https://osaseye.github.io/KC-Hair-and-Nails-/",
      showLiveDemo: true,
      category: "Business Website",
      ref: project2Ref,
      isVisible: isProject2Visible
    },
    {
      id: 3,
      title: "OtakuPlanner",
      description: "Anime-themed productivity web app with dual mode UI. Features task automation (natural language input), character assistant, calendar view, and gamification. Full-stack application with JWT authentication.",
      image: otakuPlannerImage,
      techStack: ["React", "Node.js", "Express", "MySQL", "JWT"],
      liveLink: "#",
      showLiveDemo: false,
      category: "Productivity App",
      ref: project3Ref,
      isVisible: isProject3Visible
    },
    {
      id: 4,
      title: "MyNextRead",
      description: "Manhwa recommendation engine using MangaDex API. Features genre/language filters, share/save options. Built with React + Flask backend with advanced algorithmic filtering.",
      image: myNextReadImage,
      techStack: ["React", "Flask", "Python", "MangaDex API"],
      liveLink: "#",
      showLiveDemo: false,
      category: "API Integration",
      ref: project4Ref,
      isVisible: isProject4Visible
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`section-padding bg-white scroll-animate ${isSectionVisible ? 'animate' : ''}`}
    >
      <div className="container-max">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${isHeaderVisible ? 'animate' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-slateGray max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development and web design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={project.ref}
              className={`card group scroll-animate-stagger ${project.isVisible ? 'animate' : ''}`}
              style={{transitionDelay: `${index * 0.1}s`}}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <p className="text-slateGray font-medium">Coming Soon</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    {project.showLiveDemo && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-background transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {!project.showLiveDemo && (
                      <div className="bg-white/20 text-white px-6 py-3 rounded-lg font-medium">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-heading font-semibold text-primary">
                    {project.title}
                  </h3>
                  <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-slateGray leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
