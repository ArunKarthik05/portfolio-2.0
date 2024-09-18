import React, { useRef, useState ,useEffect} from 'react';
import styles from './Projects.module.scss';
import Image from 'next/image';
import Reveal from "@/gsap/text/Reveal";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which project is being hovered
  const scrollContainerRef = useRef(null);
  const bgVideo = useRef(null);

  const reveal = useRef(null);

  useEffect(()=>{
    Reveal(reveal);
  },[])
  
  const images = [
    { src: '/images/projects/prompts.png', name: 'promptomania', link: 'https://promptomania-blond.vercel.app', video: '/videos/prompt.mp4' },
    { src: '/images/projects/upliftedu.png', name: 'UpliftEdu', link: 'https://upliftedu.netlify.app', video: '/videos/uplift.mp4' },
    { src: '/images/projects/image-search.png', name: 'Image Search', link: 'https://imagesearchbyak.netlify.app', video: '/videos/imagesearch.mp4' },
    { src: '/images/projects/iphone-clone.jpeg', name: 'IPhone-15 Clone', link: 'https://iphone-15-clone-ak.netlify.app', video: '/videos/iphone.mp4' },
  ];

  const handleRedirect = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  
    if (activeIndex>1) {
      console.log("sc")
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      console.log(scrollAmount)
      scrollContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    }
  };
  
  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };  

  const handleMouseEnter = (index) => {
    console.log(index);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        <h1 className={styles.heading} ref={reveal}>MY PROJECTS</h1>
        <div className={styles.videoContainer}>
          <video autoPlay muted loop className={styles.backgroundVideo}>
            <source src="/videos/allprojects.mp4" type="video/mp4" />
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
                {activeIndex === i &&
                  <video
                  src={project.video}
                  className={`${styles.projectVideo} ${activeIndex === i ? styles.visible : ''}`}
                  muted
                  loop
                  playsInline
                  autoPlay="true" 
                  ref={bgVideo}
                />
                }
                <h2 className={styles.projectName} onClick={() => handleRedirect(project.link)}>
                  {hoveredIndex === i ? 'Visit Site' : project.name}
                  <span className={styles.redirect}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#EB5939"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
                  /></svg>
                  </span>
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
