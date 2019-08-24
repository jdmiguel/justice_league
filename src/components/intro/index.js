import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Logo from './logo';
import Letters from './letters';

const Intro = ({ middleIntro, endIntro }) => {
  // Refs
  const introRef = React.useRef(null);
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    animationRef.current = TweenMax.to(introRef.current, 0.5, {
      onComplete: () => endIntro(),
      paused: true,
      y: '-120%',
      ease: Power1.easeIn
    });

    return () => {
      animationRef.current.kill();
    };
  }, []);

  return (
    <div ref={introRef} className="intro">
      <Logo
        onMiddleLogoAnimation={() => middleIntro()}
        onEndLogoAnimation={() => animationRef.current.restart()}
      />
      <Letters />
    </div>
  );
};

Intro.propTypes = {
  middleIntro: PropTypes.func,
  endIntro: PropTypes.func
};

export default Intro;
