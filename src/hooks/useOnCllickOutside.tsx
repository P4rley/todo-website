import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: Handler
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const element = ref?.current;

      // Do nothing if clicking ref's element or descendants
      if (!element || element.contains(event?.target as Node)) {
        return;
      }

      handler(event);
    };

    // Attach the event listener
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Detach the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
