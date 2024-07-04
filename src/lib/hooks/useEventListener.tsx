import { useEffect, useRef } from 'react';

function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: keyof HTMLElementEventMap,
  handler: (event: Event) => void,
  element?: T
) {
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element || window;
    const isSupported = targetElement && targetElement.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current && savedHandler.current(event);

    targetElement.addEventListener(eventName, eventListener);

    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default useEventListener;
