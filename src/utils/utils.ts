export const throttle = (callback: () => void, delay: number = 1000) => {
  let timerId: NodeJS.Timeout | null;

  return (...arg: any) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      (callback as any)(...arg);
      timerId = null;
    }, delay);
  };
};
