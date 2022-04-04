export const setLocalItem = (key, value) => {
  typeof window !== 'undefined' &&
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key) => {
  if (typeof window === 'undefined') return null;
  return JSON.parse(window.localStorage.getItem(key));
};
