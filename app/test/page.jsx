'use client'
import React, { useRef } from 'react';

const HorizontalScrollContainer = () => {
  const scrollContainerRef = useRef(null);

  const handleScrollRight = () => {
    scrollContainerRef.current.scrollLeft += 800;
  };

  const handleScrollLeft = () => {
    scrollContainerRef.current.scrollLeft -= 800;
  };

  return (
    <div>
      <button onClick={handleScrollLeft}>Scroll Left</button>
      <button onClick={handleScrollRight}>Scroll Right</button>
      <div
        ref={scrollContainerRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          width: '100%',
          scrollBehavior: 'smooth' // Optional for smooth scrolling
        }}
      >
        <div style={{ minWidth: '800px', backgroundColor: 'lightcoral' }}>Item 1</div>
        <div style={{ minWidth: '800px', backgroundColor: 'lightblue' }}>Item 2</div>
        <div style={{ minWidth: '800px', backgroundColor: 'lightgreen' }}>Item 3</div>
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;
