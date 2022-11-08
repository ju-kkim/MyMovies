import { useEffect } from 'react';

export function useClickOutside({
  ref,
  callback,
}: {
  ref: React.RefObject<HTMLElement | null>;
  callback: () => void;
}) {
  useEffect(() => {
    function mouseDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', mouseDown);
    return () => {
      document.removeEventListener('mousedown', mouseDown);
    };
  }, [ref]);
}
