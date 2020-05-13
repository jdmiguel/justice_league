import React from 'react';

const useWindowResize = () => {
  const [windowMeasures, setWindowMeasures] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = React.useCallback(e => {
    setWindowMeasures({
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

  return windowMeasures;
};

export default useWindowResize;
