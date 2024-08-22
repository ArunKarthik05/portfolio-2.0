import { gsap } from 'gsap';
import { useEffect } from 'react';

const RevealText = ( ref,start="top 80%",end="bottom 40%" ) => {
  const element = ref.current;
  if (!element) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: start,
      end: end,
      scrub: true,
      markers: false,
    },
  });

  tl.from(element, {
    x: -100,
    opacity: 0,
    duration:1,
  });
  tl.to(element, {
    x: 0,
    opacity: 1,
    duration:1,
  });

}

export default RevealText;