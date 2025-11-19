import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
import { cn } from '../../utils';

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      e.target.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:michaelpo1738@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    michaelpo1738@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:09999463229" className="text-muted-foreground hover:text-primary transition-colors">
                    09999463229
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Philippines</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-4">Connect with Me</h4>
              <div className="flex space-x-4 justify-start">
                <a href="https://www.linkedin.com/in/mike-undefined-b50a10391/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                
                <a href="https://github.com/michaelpo1738" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl shadow-2xl bg-card border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required 
                  placeholder=""
                  disabled={isSubmitting}
                  className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required 
                  placeholder=""
                  disabled={isSubmitting}
                  className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5"
                  required 
                  placeholder=""
                  disabled={isSubmitting}
                  className="w-full p-3 rounded-md border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full py-3 flex items-center justify-center gap-2 disabled:bg-primary/50 disabled:cursor-not-allowed",
                  isSubmitting ? "bg-primary/70" : "bg-primary"
                )}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};