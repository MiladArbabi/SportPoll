import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    // console.log(originalOverflow);
    
    document.body.style.overflow = 'hidden';

    // You can do this too
    // return function cleanup() {
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
}

export { useBodyScrollLock };
