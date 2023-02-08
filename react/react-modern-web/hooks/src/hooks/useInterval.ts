import { useEffect } from 'react';

export const useInterval = (callback: () => void, duration: number = 1000) => {
  useEffect(() => {
    const intervalID = setInterval(callback, duration);
    return () => clearInterval(intervalID);
  }, [callback, duration]);
};
