'use client'
import { useState, useRef, useEffect } from 'react';

function useActive<T extends HTMLElement>() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsActive(false);

    const node = ref.current;
    if (node) {
      node.addEventListener('mousedown', handleMouseDown);
      node.addEventListener('mouseup', handleMouseUp);
      node.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        node.removeEventListener('mousedown', handleMouseDown);
        node.removeEventListener('mouseup', handleMouseUp);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    // No-op cleanup function
    return () => {};
  }, []);

  return [ref, isActive] as const;
}

export default useActive;
