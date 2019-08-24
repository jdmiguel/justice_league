import { useState, useEffect } from 'react';

const useWindowResize = () => {
  const [windowMeasures, setWindowMeasures] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const onResize = e => {
    setWindowMeasures({
      width: e.currentTarget.innerWidth,
      height: e.currentTarget.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return windowMeasures;
};

export default useWindowResize;
