import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => (
  <footer className="py-12 px-4 relative border-t border-border bg-card">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <p className="text-sm text-muted-foreground mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Michael C. Arias. All rights reserved.
      </p>
      <a href="#hero" className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
        <ArrowUp className="h-5 w-5 text-primary" />
      </a>
    </div>
  </footer>
);