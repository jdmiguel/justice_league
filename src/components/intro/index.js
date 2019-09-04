import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Logo from './logo';
import Letters from './letters';

const Intro = ({ middleIntro, endIntro }) => {
  // Refs
  const introRef = React.useRef(null);
  const animationRef = React.useRef(null);

  // Handlers
  const onMiddleLogoAnimationHandler = React.useCallback(() => middleIntro());
  const onEndLogoAnimationHandler = React.useCallback(() =>
    animationRef.current.restart()
  );

  // UseEffects
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
        onMiddleLogoAnimation={onMiddleLogoAnimationHandler}
        onEndLogoAnimation={onEndLogoAnimationHandler}
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
