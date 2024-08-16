import React from 'react';
import styles from "./hero-section.module.scss"
import Dome from '../3d/canvas/react';

export const HeroSection = () => {
  return (
    <div className={styles.main}>
        <div className={styles.heroleft}>
          <Dome/>
        </div>
        <div className={styles.heroRight}>
          <p>ARUN KARTHIK</p>
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
