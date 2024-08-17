import React from 'react';
import styles from "./About.module.scss";
import Button from '../button/Button';

const About = () => {
  return (
    <div className={styles.main}>
       <div className={styles.text}>
            <h1 className={styles.iam}>I AM</h1>
            <h1 className={styles.name}>ARUN KARTHIK,</h1>
            <h1 className={styles.stack}>FULL STACK DEV</h1>
            <h2 className={styles.quote}>"Every website has its own story, just like mine."</h2>
       </div>
       <div className={styles.btnContainer}>
            <Button text="Know More" size="32px" bgColor="black" textColor="white" brr="5rem"/>
       </div>
    </div>
  );
};

export default About;