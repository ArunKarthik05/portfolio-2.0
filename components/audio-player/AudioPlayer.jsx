'use client'

import { useState, useRef, useEffect } from 'react';
import styles from "./AudioPlayer.module.scss"

const AudioPlayer = ({ src, loop = true, autoplay = true }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className={styles.main}>
        <audio ref={audioRef} loop={loop} autoPlay={autoplay}>
          <source src={src} type="audio/mpeg" />
        </audio>
      <button onClick={handlePlayPause} className={styles.playBtn}>
        {isPlaying ? "TURN OFF" : "TURN ON"}
      </button>
      <p>MUSIC</p>
      </div>
    </>
  );
};

export default AudioPlayer;
