import { useState, useEffect, useRef } from 'react';

function useOnScreen<T extends HTMLElement>(rootMargin: string = '0px'): [React.MutableRefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIntersecting(entry.isIntersecting);
        }
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [rootMargin]);

  return [ref, isIntersecting];
}

export default useOnScreen;
