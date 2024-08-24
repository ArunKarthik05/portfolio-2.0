import { useRef, useEffect } from "react";
import styles from "./Education.module.scss";
import Image from "next/image";
import gsap from "gsap";

const Education = () => {
  const imgContainerRef = useRef(null);
  const triggerContainer = useRef(null);

  useEffect(() => {
    const images = [
      "/images/psgslide.jpeg",
      "/images/psg.jpeg",
      "/images/zoho.png"
    ];
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerContainer.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      }
    })
    timeline.from(imgContainerRef.current,{ opacity : 0})
    .to(imgContainerRef.current, {
      opacity: 1,
      backgroundImage: `url(${images[0]})`,
      duration: 1,
    })

    timeline.from(imgContainerRef.current,{ opacity : 0})
    .to(imgContainerRef.current, {
      opacity: 1,
      backgroundImage: `url(${images[1]})`,
      duration: 1,
    })
    timeline.from(imgContainerRef.current,{ opacity : 0})
    .to(imgContainerRef.current, {
      opacity: 1,
      backgroundImage: `url(${images[2]})`,
      duration: 1,
    })
  }, []);

  const educations = [
    { name: "UNDERGRAD 2022", course: "B.sc COMPUTER SCIENCE", school: "PSG COLLEGE OF ARTS AND SCIENCE" },
    { name: "POSTGRAD 2024", course: "MASTER IN COMPUTER APPLICATIONS", school: "PSG COLLEGE OF ARTS AND SCIENCE" },
    { name: "SOFTWARE ENGINEER", course: "ZOHO", school: "null" }
  ];

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>CAREER</h1>
      <div className={styles.contentContainer}>
        <div className={styles.timeline}></div>
        <div className={styles.flexLeft}>
          {educations.map((el, i) => (
            <div key={i} className={styles.contentMain}>
            <div className={styles.circle}></div>
            <div
              key={i}
              className={styles.textContent}
            >
              <h2 className={styles.subHeading}>{el.name}</h2>
              <h3 className={styles.course}>{el.course}</h3>
              {el.school!= "null" && <h4 className={styles.school}>{el.school}</h4>}
            </div>
            </div>
          ))}
        </div>
        <div className={styles.flexRight} ref={triggerContainer} >
          <div className={styles.imgContainer} ref={imgContainerRef}>
            {/* <Image src="/images/zoho.png" alt="zoho-logo" height="300" width="300"/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
