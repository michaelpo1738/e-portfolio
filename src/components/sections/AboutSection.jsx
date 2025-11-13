import React from 'react';
import { Server, Smartphone, Zap } from 'lucide-react';

export const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> 
        
        <div className="md:col-span-1 space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold">
            Aspiring Full Stack, Database, and Mobile Developer
          </h3>
          <p className="text-muted-foreground">
            I'm a college student passionate about web, database, and mobile development. I enjoy building responsive user interfaces, designing efficient back-end systems, and creating databases that power real-world applications. I'm always eager to learn new technologies and take on challenging projects, striving to turn ideas into practical solutions across platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a 
              href="/Michael_Arias_CV.pdf"
              download="Michael_Arias_CV.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300 text-center font-medium"
            >
              Download CV
            </a>
          </div>
        </div>
        

        <div className="md:col-span-1 grid grid-cols-1 gap-6"> 
          <div className="p-6 rounded-lg shadow-md bg-card border border-border card-hover">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Full-Stack & Database Development</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Building responsive web applications and scalable APIs with expertise in modern Database management. 
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-card border border-border card-hover">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Mobile App Development</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Designing and deploying cross-platform mobile applications for optimal performance and user experience. 
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-card border border-border card-hover">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">UI/UX Design Focus</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Designing intuitive user interfaces and ensuring seamless user experiences on all devices. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);