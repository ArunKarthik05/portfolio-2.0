'use client'
import styles from "./page.module.scss";
import { HeroSection } from "@/components/hero-section/HeroSection";
import LeftMenu from "@/components/left-menu/LeftMenu";
import Education from "@/components/education/Education";
import About from "@/components/about-me/About";
import AudioPlayer from "@/components/audio-player/AudioPlayer";
import TechStack from "@/components/tech/Tech";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.nameDiv}>
        <p>ARUN KARTHIK</p>
      </div>
      <LeftMenu/>

      {/* SECTIONS */}
      <section>
        <HeroSection/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Education/>
      </section>
      <section>
        <TechStack/>
      </section>
      <section>
        <Projects/>
      </section>
        <Contact/>


      <AudioPlayer src="/music/bgmusic.mp3"/>
    </div>
  );
}
