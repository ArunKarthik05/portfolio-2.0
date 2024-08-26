import React, { useRef, useState } from 'react';
import styles from './Projects.module.scss';
import Image from 'next/image';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which project is being hovered
  const scrollContainerRef = useRef(null);
  const bgVideo = useRef(null)
  
  const images = [
    { src: '/images/projects/iphone-clone.jpeg', name: 'IPhone-15 Clone', link: 'https://iphone-15-clone-ak.netlify.app', video: '/videos/test.mp4' },
    { src: '/images/projects/upliftedu.png', name: 'UpliftEdu', link: 'https://upliftedu.netlify.app', video: '/videos/test.mp4' },
    { src: '/images/psg.jpeg', name: 'Project 3', link: 'https://google.com', video: '/videos/test.mp4' },
    { src: '/images/psgslide.jpeg', name: 'Project 4', link: 'https://google.com', video: '/videos/test.mp4' },
  ];

  const handleRedirect = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (scrollContainerRef.current && activeIndex > 0) {
      if (activeIndex === 2) {
        window.scrollTo({ left: 1200, behavior: 'smooth' });
        return;
      }
      window.scrollTo({ left: 800, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (scrollContainerRef.current && activeIndex <= 2) {
      window.scrollTo({ left: -800, behavior: 'smooth' });
    }
  };

  const handleMouseEnter = (index) => {
    console.log(index);
    setHoveredIndex(index);
    console.log("hoveredIndex:"+hoveredIndex);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading}>MY PROJECTS</h1>
        <div className={styles.videoContainer}>
          <video autoPlay muted loop className={styles.backgroundVideo}>
            <source src="/videos/test.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div ref={scrollContainerRef} className={styles.scrollContainer}>
          {images.map((project, i) => {
            const isActive = i === activeIndex;
            const isLeft = i < activeIndex;
            const isRight = i > activeIndex;

            return (
              <div
                key={i}
                className={`${styles.projectDiv} 
                  ${isActive ? styles.active : ''} 
                  ${isLeft ? styles.left : ''} 
                  ${isRight ? styles.right : ''}`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={project.src}
                  alt={project.name}
                  layout="responsive"
                  width={500}
                  height={500}
                  priority="low"
                  className={styles.projectImage}
                />
                {hoveredIndex === i &&
                  <video
                  src={project.video}
                  className={`${styles.projectVideo} ${hoveredIndex === i ? styles.visible : ''}`}
                  muted
                  loop
                  playsInline
                  autoPlay="true" 
                  ref={bgVideo}
                />
                }
                <h2 className={styles.projectName} onClick={() => handleRedirect(project.link)}>
                  {hoveredIndex === i ? 'Visit Site' : project.name}
                </h2>
              </div>
            );
          })}
        </div>
        {activeIndex > 0 && (
          <button className={styles.prevButton} onClick={handlePrevious}>
            &#10094;
          </button>
        )}
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
