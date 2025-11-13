import React from 'react';
import { ExternalLink, Github, ArrowUp } from 'lucide-react';
import { MOCK_PROJECTS } from '../../data/projects';

export const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        A selection of recent work showcasing my versatility across the full-stack and dedication to clean design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_PROJECTS.map((project) => (
          <div key={project.id} className="group rounded-xl overflow-hidden shadow-lg bg-card border border-border card-hover">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = "https://placehold.co/800x450/374151/FFFFFF?text=Image+Unavailable"; 
                }}
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} className="mr-1" /> Live Demo
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
                >
                  <Github size={16} className="mr-1" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="https://github.com/michaelpo1738/michael-arias-portfolio" 
          target="_blank"
          rel="noopener noreferrer"
          className="cosmic-button w-fit mx-auto flex items-center gap-2"
        >
          Check My GitHub
          <ArrowUp size={16} className="transform rotate-90" />
        </a>
      </div>
    </div>
  </section>
);