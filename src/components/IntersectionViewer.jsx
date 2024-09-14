import React, { useEffect, useRef, useState } from 'react';

const IntersectionViewer = ({ children, onIntersect, options }) => {
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (onIntersect) {
            onIntersect(entry);
          }
        } else {
          setIsInView(false);
        }
      },
      options || {} 
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, onIntersect]);

  return (
    <div ref={elementRef}>
      {children(isInView)}
    </div>
  );
};

export default IntersectionViewer;
