// Simplified cn function to merge class names (simulating tailwind-merge/clsx)
export const cn = (...inputs) => {
  return inputs.filter(Boolean).join(' ');
};