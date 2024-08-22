import { useRef, useEffect } from "react";
import styles from "./Education.module.scss";

const Education = () => {

  const educations = [
    { name: "HIGH SCHOOL 2019", course: "Computer Science", school: "Sri Ramakrishna" },
    { name: "UNDERGRAD 2022", course: "B.sc COMPUTER SCIENCE", school: "PSG COLLEGE OF ARTS AND SCIENCE" },
    { name: "POSTGRAD 2024", course: "MASTER IN COMPUTER APPLICATIONS", school: "PSG COLLEGE OF ARTS AND SCIENCE" }
  ];

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>EDUCATION</h1>
      <div className={styles.contentContainer}>
        <div className={styles.timeline}></div>
        {educations.map((el, i) => (
          <div key={i}>
          <div className={styles.circle}></div>
          <div
            key={i}
            className={styles.textContent}
          >
            <h2 className={styles.subHeading}>{el.name}</h2>
            <h3 className={styles.course}>{el.course}</h3>
            <h4 className={styles.school}>{el.school}</h4>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
