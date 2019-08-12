import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Logo from './logo';
import Letters from './letters';

const Intro = ({ endIntro }) => {
  // Refs
  const introRef = React.useRef(null);
  const animationRef = React.useRef(null);

  // State
  const [endedIntro, setEndedIntro] = React.useState(false);

  React.useEffect(() => {
    animationRef.current = TweenMax.to(introRef.current, 0.5, {
      onComplete: () => endIntro(),
      paused: true,
      delay: 0,
      y: '-100%',
      ease: Cubic.easeIn
    });

    if (endedIntro) {
      animationRef.current.restart();
    }

    return () => {
      animationRef.current.kill();
    };
  }, [endedIntro]);

  return (
    <div ref={introRef} className="intro">
      <Logo onEndedLogoAnimation={() => setEndedIntro(true)} />
      <Letters />
    </div>
  );
};

Intro.propTypes = {
  endIntro: PropTypes.func
};

export default Intro;
