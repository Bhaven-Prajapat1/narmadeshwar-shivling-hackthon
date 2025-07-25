// src/components/ScrollContainer.jsx
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const ScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // smoothness
      multiplier: 1,
    });

    return () => {
      if (scrollInstance.current) scrollInstance.current.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollContainer;
