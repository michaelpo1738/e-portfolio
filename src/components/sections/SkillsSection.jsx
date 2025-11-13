import React, { useState } from 'react';
import { MOCK_SKILLS, SKILL_CATEGORIES } from '../../data/skills';
import { cn } from '../../utils';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = MOCK_SKILLS.filter(skill => 
    activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A comprehensive view of my technical proficiencies, from core languages to modern deployment tools.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SKILL_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium uppercase transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-secondary border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="p-6 rounded-lg shadow-md bg-card border border-border card-hover">
              <div className="text-left">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-1">
                  <div 
                    className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                <span className="text-right block text-xs font-medium text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};