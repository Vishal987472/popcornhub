import { useState, useEffect } from "react";

/**
 * Custom debounce hook
 * @param {any} value - The input value to debounce
 * @param {number} delay - Delay in ms (default: 500)
 * @returns The debounced value after the delay
 */
function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Start a timer when value changes
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel previous timer if value changes before delay ends
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
