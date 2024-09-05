import styles from "./hero-section.module.scss"
import Spline from '@splinetool/react-spline';

export const HeroSection = () => {
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
        <div className={styles.model}>
          <Spline className={styles.spline} scene="https://prod.spline.design/JonUyXTjggwpvoCx/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};
