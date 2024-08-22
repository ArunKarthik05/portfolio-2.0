import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type'; // Import SplitType

gsap.registerPlugin(ScrollTrigger);

const useTextColorChange = (ref, start = 'top 80%', end = 'bottom 40%',fromColor="white",toColor="black") => {
  // useEffect(() => {
    const element = ref.current;
    

    // Split text into characters
    const splitText = new SplitType(element, { types: 'chars' });

    ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });

    gsap.fromTo( splitText.chars,
      {
        opacity:0.5
      },
      {
        opacity:1,
        duration: 0.1,
        stagger:0.01,
        scrollTrigger:{
          trigger: element,
          start,
          end,
          scrub: true,
          markers: false,
        }
        
      }
    )
  // }, []);
};

export default useTextColorChange;
