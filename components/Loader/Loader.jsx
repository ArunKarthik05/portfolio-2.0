import React, { useState, useEffect } from 'react';
import styles from "./Loader.module.scss";

export default function Loader() {
  const lines = [
    "Hey,Welcome to my Portfolio.",
    "I am Arun Karthik.",
    "Please wait, I am about to finish writing my story."
  ];

  const [currentLine, setCurrentLine] = useState(0); // Track the current line
  const [displayedText, setDisplayedText] = useState(""); // Text to display letter by letter
  const [letterIndex, setLetterIndex] = useState(0); // Track the letter position in the current line

  useEffect(() => {
    if (currentLine < lines.length) {
      const interval = setInterval(() => {
        console.log(lines[currentLine][letterIndex])
        setDisplayedText((prev) => prev + lines[currentLine][letterIndex]);

        if (letterIndex < lines[currentLine].length - 1) {
          setLetterIndex((prev) => prev + 1);
        } else {
          // If a line is completed, move to the next line after a short pause
          
            setCurrentLine((prev) => prev + 1);
            setLetterIndex(0); // Reset letter index for the next line     
        }
      }, 100); // Adjust this delay for letter speed

      return () => clearInterval(interval); // Cleanup interval
    }
  }, [letterIndex, currentLine, lines]);

  return (
    <div className={styles.body}>
      <div className={styles.loader}>
        <div className={styles.box}>
          <div className={styles.logo}>
            <p>AK</p>
          </div>
        </div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
      <div className={styles.content}>
        <p>{displayedText}</p> 
      </div>
    </div>
  );
}
