import { useEffect } from 'react';

export const useAnalytics = () => {
  useEffect(() => {
    // Add Google Analytics or other analytics here
    // Example: gtag('config', 'GA_MEASUREMENT_ID');
  }, []);

  const trackEvent = (eventName, parameters) => {
    // Track custom events
    console.log(`Analytics: ${eventName}`, parameters);
    // Example: gtag('event', eventName, parameters);
  };

  return { trackEvent };
};