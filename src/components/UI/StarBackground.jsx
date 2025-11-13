import React, { useState, useEffect, useCallback } from 'react';

const MeteorShower = () => {
  const [meteors, setMeteors] = useState([]);
  
  const spawnMeteor = () => {
    const startSide = Math.random() > 0.5 ? 'left' : 'right';
    const angle = Math.random() * 30 + 20;
    
    return {
      id: Math.random(),
      length: Math.random() * 80 + 40,
      thickness: Math.random() * 2 + 1,
      startSide,
      startX: Math.random() * 20 - 10,
      startY: Math.random() * 30,
      angle: startSide === 'right' ? 180 - angle : angle,
      duration: Math.random() * 2 + 1.5,
      brightness: Math.random() * 0.8 + 0.2,
      createdAt: Date.now(),
    };
  };

  useEffect(() => {
    const spawnLoop = () => {
      const randomInterval = 1500 + Math.random() * 2000;
      
      const timeoutId = setTimeout(() => {
        const burstCount = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < burstCount; i++) {
          setTimeout(() => {
            setMeteors(current => [...current, spawnMeteor()]);
          }, i * 200);
        }

        const maxDuration = Math.max(...meteors.map(m => m.duration)) || 4;
        
        setTimeout(() => {
          setMeteors(current => 
            current.filter(meteor => Date.now() - meteor.createdAt < (maxDuration + 1) * 1000)
          );
        }, maxDuration * 1000);
        
        spawnLoop();
      }, randomInterval);
      
      return timeoutId;
    };
    
    const initialTimeout = spawnLoop();
    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <>
      {meteors.map((meteor) => {
        const startTranslateX = meteor.startSide === 'left' ? '-150vw' : '150vw';
        const startTranslateY = '-50vh'; 
        const endTranslateX = meteor.startSide === 'left' ? '150vw' : '-150vw';
        const endTranslateY = '150vh';
        const leftPosition = meteor.startSide === 'left' ? meteor.startX : 100 - meteor.startX;
        
        return (
          <div
            key={meteor.id}
            className="absolute bg-gradient-to-r from-white via-white to-transparent rounded-full shadow-[0_0_6px_rgba(255,255,255,0.7)]"
            style={{
              '--start-x': startTranslateX, 
              '--start-y': startTranslateY, 
              '--end-x': endTranslateX, 
              '--end-y': endTranslateY, 
              '--angle': `${meteor.angle}deg`,
              '--brightness': meteor.brightness,
              width: `${meteor.length}px`,
              height: `${meteor.thickness}px`,
              left: `${leftPosition}%`,
              top: `${meteor.startY}%`,
              transformOrigin: 'left center',
              animation: `meteorFall ${meteor.duration}s linear 0s forwards`,
            }}
          />
        );
      })}
    </>
  );
};

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  
  const generateStars = useCallback(() => {
    const numStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  }, []);

  useEffect(() => {
    generateStars();
    const handleResize = () => generateStars();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]"
          style={{
            animation: `pulse-subtle ${star.duration}s ease-in-out infinite`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            position: 'absolute',
          }}
        />
      ))}
      <MeteorShower />
    </div>
  );
};