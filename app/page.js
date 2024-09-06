'use client'
import { Fragment,useState, useEffect } from "react";
import styles from "./page.module.scss";
import { HeroSection } from "@/components/hero-section/HeroSection";
import LeftMenu from "@/components/left-menu/LeftMenu";
import Education from "@/components/education/Education";
import About from "@/components/about-me/About";
import AudioPlayer from "@/components/audio-player/AudioPlayer";
import TechStack from "@/components/tech/Tech";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Loader from "@/components/Loader/Loader";
import useIsMobile from "@/Hooks/IsMobile";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(isMobile){
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); 

    return () => {
      clearTimeout(timer);
    };
  }, [isMobile]);


  if (isMobile) {
    return (
      <div className={styles.mobilewarning}>
          <div>
            <p>The website is under development for mobiles.<br /> Please check the desktop version.</p>
          </div>
      </div>
    );
  }

  return (
    <div className={`${loading ? styles.loaderDiv : styles.main}`}>
      { loading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )
      }

      {/* Main content */}
      <div >
        <div className={styles.nameDiv}>
          <p>ARUN KARTHIK</p>
        </div>
        <LeftMenu />

        {/* SECTIONS */}
        <section>
          <HeroSection loading={loading}>
            <Spline
              className={styles.model}
              scene="https://prod.spline.design/JonUyXTjggwpvoCx/scene.splinecode"
            />
\          </HeroSection>
        </section>
        <section>
          <About />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <TechStack />
        </section>
        <section>
          <Projects />
        </section>
        <Contact />

        <AudioPlayer src="/music/bgmusic.mp3" />
      </div>
    </div>
  );
}
