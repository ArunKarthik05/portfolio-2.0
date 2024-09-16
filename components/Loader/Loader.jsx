import styles from "./Loader.module.scss";

export default function Loader() {

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
        <p>Hey,Welcome to my Portfolio.</p>
        <p>I am Arun Karthik.  </p>
        <p>Please wait, I am about to finish writing my story.</p>
      </div>
    </div>
  );
}
