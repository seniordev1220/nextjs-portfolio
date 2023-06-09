import { useEffect, useState } from "react";

export const useScrollFetcher = (threshold: number) => {
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;
      if (currentScrollYPosition > threshold) {
        setShowItem(true);
      } else {
        setShowItem(false);
      }
    };
    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return showItem;
};
