import React, { useState, useEffect } from 'react';
import { StarBackground } from './components/UI/StarBackground';
import { ThemeToggle } from './components/UI/ThemeToggle';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

const App = () => {
  const [isAuthReady, setIsAuthReady] = useState(false);
  
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        --color-background: 0 0% 100%;
        --color-foreground: 222.2 84% 4.9%;
        --color-card: 0 0% 100%;
        --color-border: 214.3 31.8% 91.4%;
        --color-primary: 262.1 83.3% 57.2%;
        --color-primary-foreground: 0 0% 100%;
        --color-secondary: 210 40% 96.1%;
        --color-secondary-foreground: 222.2 47.4% 11.2%;
        --color-muted-foreground: 215.4 16.3% 46.9%;
      }
      
      .dark {
        --color-background: 222.2 84% 4.9%;
        --color-foreground: 210 20% 98%;
        --color-card: 217.2 32.6% 17.5%;
        --color-border: 217.2 32.6% 25.5%;
        --color-primary: 271.7 76.2% 64.9%;
        --color-primary-foreground: 210 20% 98%;
        --color-secondary: 217.2 32.6% 17.5%;
        --color-secondary-foreground: 210 20% 98%;
        --color-muted-foreground: 215 20.2% 65%;
      }

      .bg-background { background-color: hsl(var(--color-background)); }
      .text-foreground { color: hsl(var(--color-foreground)); }
      .text-primary { color: hsl(var(--color-primary)); }
      .bg-primary { background-color: hsl(var(--color-primary)); }
      .text-primary-foreground { color: hsl(var(--color-primary-foreground)); }
      .bg-card { background-color: hsl(var(--color-card)); }
      .border-border { border-color: hsl(var(--color-border)); }
      .bg-secondary\\/30 { background-color: hsla(var(--color-secondary), 0.3); }
      .bg-secondary\\/70 { background-color: hsla(var(--color-secondary), 0.7); }
      .text-secondary-foreground { color: hsl(var(--color-secondary-foreground)); }
      .text-muted-foreground { color: hsl(var(--color-muted-foreground)); }
      
      body {
        transition-property: background-color, color, border-color, fill;
        transition-duration: 300ms;
      }
      
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse-subtle {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
      }
      
      @keyframes meteorFall {
        0% {
          opacity: 0;
          transform: translate(var(--start-x), var(--start-y)) rotate(var(--angle));
        }
        10% {
          opacity: var(--brightness);
        }
        80% {
          opacity: 0.3;
        }
        100% {
          opacity: 0;
          transform: translate(var(--end-x), var(--end-y)) rotate(var(--angle));
        }
      }

      .animate-bounce-custom {
        animation: bounce 2s infinite;
      }

      .cosmic-button {
        @apply inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl;
      }

      .card-hover {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .card-hover:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    `;

    document.head.appendChild(style);
    setIsAuthReady(true);
  }, []);

  if (!isAuthReady) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <StarBackground />
      <ThemeToggle />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />

      <div 
        id="mock-toast" 
        className="fixed bottom-5 right-5 p-4 bg-primary text-white rounded-lg shadow-xl transition-opacity duration-300 hidden opacity-0 z-50"
      >
        Toast Placeholder
      </div>
    </div>
  );
};

export default App;