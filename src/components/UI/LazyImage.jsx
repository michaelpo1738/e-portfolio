import React, { useState } from 'react';

export const LazyImage = ({ src, alt, className, fallback }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-secondary animate-pulse rounded" />
      )}
      <img
        src={hasError ? fallback || 'https://placehold.co/800x450/374151/FFFFFF?text=Image+Unavailable' : src}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} w-full h-full object-cover`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
};