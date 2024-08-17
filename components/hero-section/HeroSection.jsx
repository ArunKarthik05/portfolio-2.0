import React from 'react';
import styles from "./hero-section.module.scss"
import Spline from '@splinetool/react-spline';

export const HeroSection = () => {
  return (
    <div className={styles.main}>
        <div className={styles.heroleft}>
          <Spline className={styles.spline} scene="https://prod.spline.design/JonUyXTjggwpvoCx/scene.splinecode" />
        </div>
        <div className={styles.heroRight}>
          <div className={styles.mainText}>
            <h1>
              SHAPING DREAMS INTO <span>3D</span> REALITY <br/>
              ONE PIXEL AT A TIME
            </h1>
          </div>
        </div>
    </div>
  );
};
