import React from 'react';

const useWindowResize = () => {
  const [windowMeasurements, setWindowMeasurements] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = React.useCallback(e => {
    setWindowMeasurements({
      width: e.currentTarget.innerWidth,
      height: e.currentTarget.innerHeight,
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return windowMeasurements;
};

export default useWindowResize;
