'use client'
import styles from "./page.module.scss";
import { HeroSection } from "@/components/hero-section/HeroSection";
import LeftMenu from "@/components/left-menu/LeftMenu";
import Education from "@/components/education/Education";
import About from "@/components/about-me/About";

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
    </div>
  );
}
