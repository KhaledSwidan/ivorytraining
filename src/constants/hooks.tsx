import { useCallback, useRef, useState } from 'react';

const Hooks = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const lastScrollTop = useRef<number>(0);

  const handleScrollHook = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollTop.current && isVisible) {
      setIsVisible(false);
    } else if (scrollY < lastScrollTop.current && !isVisible) {
      setIsVisible(true);
    }
    lastScrollTop.current = Math.max(scrollY, 0);
  }, [isVisible]);
  return { handleScrollHook, isVisible };
};

export default Hooks;
