import { useEffect, useState } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
};

export function useInfiniteScroll(
  callback: () => void,
  targetElement: HTMLDivElement | null,
  options = defaultOptions,
) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;
    callback();
  }, [isLoading]);

  useEffect(() => {
    if (!targetElement) return;
    const observer = new IntersectionObserver(checkIntersecting, options);
    observer.observe(targetElement);
  }, [targetElement]);

  function checkIntersecting(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    });
  }

  return { isLoading, setIsLoading };
}
