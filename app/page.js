'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import { HeroSection } from "@/components/hero-section/HeroSection";

export default function Home() {
  return (
    <div>
        <section className={styles.section}>
          <HeroSection/>
        </section>
    </div>
  );
}
