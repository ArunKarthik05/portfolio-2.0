import React from 'react'
import styles from './Contact.module.scss';

export default function Contact() {
    const handleClick = (link)=>{
        window.open(link,'_blank',"noopener,noreferrer");
    }
  return (
    <div className={styles.main}>
        <div className={styles.contentContainer}>
            <p>CONNECT</p>
            <div className={styles.flexContainer}>
                <div className={styles.flexLeft}>
                    <p className={styles.item} onClick={()=>handleClick("https://x.com/karthixzsays?t=_URAweSiI8dTtdA_aqVOAw&s=09")}>Twitter</p>
                    <p className={styles.item} onClick={()=>handleClick("https://www.linkedin.com/in/arun-karthik-3b08b5218")}>LinkedIn</p>
                </div>
                <div>
                    <div className={styles.mail}>
                        <p >ak05032k2@gmail.com</p>
                        <button onClick={()=>handleClick('mailto:ak05032k2@gmail.com')}>Mail Me</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
