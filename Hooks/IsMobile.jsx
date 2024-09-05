import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        if( window.innerWidth <="576"){
            console.log(`Values:${window.innerWidth},${isMobile}`)
        }
      setIsMobile(window.innerWidth <= 576);
      console.log("width"+window.innerWidth)
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}
