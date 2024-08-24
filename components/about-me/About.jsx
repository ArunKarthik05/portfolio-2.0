import { useState,useEffect, useRef } from 'react';
import styles from "./About.module.scss";
import Button from '../button/Button';
import Spline from '@splinetool/react-spline';
// import { applyScrollTriggerAnimation } from '../gsap/text/ChangeColor';
import useTextColorChange from '@/gsap/text/ChangeColor';
import Image from 'next/image';

const About = () => {
  const [ isKnowMoreEnabled,setIsKnowMoreEnabled ] = useState(false);
  const animateRef = useRef(null);
  // useLeftReveal(animateRef); 

  // useEffect(()=>{
  //   if(isKnowMoreEnabled){
  //     useTextColorChange(animateRef,"top 50%","bottom 60%"); 
  //   }
  // },[isKnowMoreEnabled])

  return (
    <div className={styles.main}>
      {isKnowMoreEnabled ? (
      <div className={styles.knowMore}>
        <div className={styles.btnContainer2} onClick={()=>setIsKnowMoreEnabled(false)}>
          <p>X</p>
        </div>
          <div className={styles.knowMoreText}>
            <h1>
            <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#EB5939"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            SOFTWARE ENGINEER</h1>
            <h1><svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#EB5939"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            BADMINTON ATHELETE</h1>

            <div className={styles.textDiv}>
              <p className={styles.quoteOpening2}>“</p>
              <h2>Loves System Design,</h2>
              <h2>Modern <span className={styles.textOrange}>3D Webflow</span></h2>
              <h2><span className={styles.textOrange}>MERN</span> Stack.</h2>
              </div>
          </div>
          <div className={styles.imgContainer}>
            <Image src="/images/arun.jpeg" alt="arun-image" height="300" width="300"/>
          </div>
      </div>
      ):(
        <>
          <div className={styles.spline}>
              <Spline scene="https://prod.spline.design/mLqtHGWLTu3ETivA/scene.splinecode" />
          </div>
          <div className={styles.text}>
                <h1>
                  I <span className={styles.quoteOpening}>&rsquo;</span>m 
                  <span className={styles.textOrange}> Arun Karthik</span>
                </h1>
                <h1>Creative Full Stack</h1>
                <h1>Developer.</h1>
                <p className={styles.quote}>
                <b className={`${styles.textOrange} ${styles.quoteOpening}`}>“</b>
                <span className={styles.quoteText}>I don&apos;t create websites,</span>
                <br/>
                <span className={styles.quoteText}>I narrate <b>stories.</b></span>
                </p>
          </div>
          <div className={styles.btnContainer} onClick={()=>setIsKnowMoreEnabled(true)}>
                <Button 
                text="Know More" 
                size="22px" 
                gradient="linear-gradient(45deg, rgba(152,107,182,0.9878545168067226) 2%, rgba(154,94,205,1) 13%, rgba(134,66,200,1) 41%, rgba(199,67,182,1) 66%, rgba(245,51,89,1) 92%)" 
                textColor="white" 
                brr="5rem"
                />
          </div>
        </>
      )
      }


    </div>
  );
};

export default About;