import { useCallback } from 'react';

export const useToast = () => {
  const toast = useCallback(({ title, description }) => {
    console.log(`[TOAST]: ${title} - ${description}`);
    const toastElement = document.getElementById('mock-toast');
    if (toastElement) {
      toastElement.innerText = `${title}: ${description}`;
      toastElement.classList.remove('hidden');
      toastElement.classList.add('opacity-100');
      setTimeout(() => {
        toastElement.classList.remove('opacity-100');
        toastElement.classList.add('hidden');
      }, 3000);
    }
  }, []);
  return { toast };
};