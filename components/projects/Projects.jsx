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
         <svg className={styles.prevBtn} onClick={handlePrevious} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7AA98"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
         /></svg>
        )}
        {activeIndex < images.length - 1 && (
           <svg className={styles.nextBtn} onClick={handleNext} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B7AA98"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"
           /></svg>
        )}
      </div>
    </div>
  );
};

export default Projects;
