import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-8 h-8 border-2 border-gold rounded-full fixed top-0 left-0 pointer-events-none mix-blend-difference transition-transform duration-75"
    ></div>
  );
};

export default Cursor;