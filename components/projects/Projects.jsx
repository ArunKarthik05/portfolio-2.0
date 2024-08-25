import React, { useRef, useState } from 'react';
import styles from './Projects.module.scss';
import Image from 'next/image';


const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second image as active
  const scrollContainerRef = useRef(null);

  const images = [
    { src: '/images/projects/iphone-clone.jpeg', name: 'iPhone 15 Clone' },
    { src: '/images/arun.jpeg', name: 'Project 2' },
    { src: '/images/psg.jpeg', name: 'Project 3' },
    { src: '/images/psgslide.jpeg', name: 'Project 4' },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (scrollContainerRef.current && activeIndex>0) {
      if( activeIndex === 2){
        window.scrollTo({ left: 900, behavior: 'smooth' });
        return;
      }
      console.log('front')
        window.scrollTo({ left: 800, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
    if (scrollContainerRef.current && activeIndex<=2) {
      window.scrollTo({ left: -800, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src="/videos/test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className={styles.heading}>MY PROJECTS</h1>
        <div ref={scrollContainerRef} className={styles.scrollContainer}>
          {images.map((projec, i) => {
            const isActive = i === activeIndex;
            const isLeft = i < (activeIndex);
            const isRight = i > (activeIndex );

            return (
              <div
                key={i}
                className={`${styles.projectDiv}
                  ${isActive ? styles.active : ''} 
                  ${isLeft ? styles.left : ''} 
                  ${isRight ? styles.right : ''}`}
              >
                <Image
                  src={projec.src}
                  alt={projec.name}
                  layout="responsive"
                  width={500}
                  height={500}
                  priority="low"
                  className={styles.projectImage}
                />
                <h2 className={styles.projectName}>{projec.name}</h2>
              </div>
            );
          })}
        </div>
        {activeIndex > 0 && (
          <button className={styles.prevButton} onClick={handlePrevious}>
            &#10094;
          </button>
        )}
        {/* Conditionally render Next button */}
        {activeIndex < images.length - 1 && (
          <button className={styles.nextButton} onClick={handleNext}>
            &#10095;
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
