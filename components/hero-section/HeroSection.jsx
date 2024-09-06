import styles from "./hero-section.module.scss";

export const HeroSection = ({children,loading}) => {
  const words = ['TURNING','DREAMS','INTO','3D','REALITY'];

  return (
    <div className={styles.main}>
      <div className={styles.heroText}>
        {words.map((word,i) => (
          <div
            key={i}
            className={styles.wordDiv} 
          >
          <h1 className={i === 3 ? styles.orange : ""}>{word}</h1>
          </div>
        ))}
      </div>
      <div>
        <div className={`${loading ? styles.hide : styles.model}`}>
          {children}
        </div>
      </div>
    </div>
  );
};
