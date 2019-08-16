import React from 'react';
import PropTypes from 'prop-types';

const Letters = ({
  superheroAlias,
  superheroClass,
  superheroActive,
  superheroBreakpoint,
  menuDirection,
  onClick
}) => {
  const { inHero, outHero } = menuDirection;

  const [classes, setClasses] = React.useState(['letters-wrapper']);
  const lettersRef = React.useRef(null);
  const charsRef = React.useRef(null);

  const inLeftAnimation = React.useCallback(() => {
    setClasses([...classes, 'active']);

    TweenMax.staggerFromTo(
      charsRef.current,
      0.6,
      {
        alpha: 0,
        cycle: {
          x: i => -250 + i * 20
        }
      },
      {
        delay: 0.35,
        x: 0,
        alpha: 1,
        ease: Power1.easeOut
      },
      0.012
    );
  });

  const inRightAnimation = React.useCallback(() => {
    setClasses([...classes, 'active']);

    TweenMax.staggerFromTo(
      charsRef.current,
      0.6,
      {
        alpha: 0,
        cycle: {
          x: i => 50 + i * 40
        }
      },
      {
        delay: 0.35,
        x: 0,
        alpha: 1,
        ease: Power1.easeOut
      },
      0.012
    );
  });

  const outLeftAnimation = React.useCallback(() => {
    setClasses(classes.filter(item => item !== 'active'));

    TweenMax.staggerFromTo(
      charsRef.current,
      0.47,
      {
        alpha: 1,
        x: 0
      },
      {
        cycle: {
          x: i => -250 + i * 20
        },
        alpha: 0,
        ease: Power1.easeInOut
      },
      0.015
    );
  });

  const outRightAnimation = React.useCallback(() => {
    setClasses(classes.filter(item => item !== 'active'));

    TweenMax.staggerFromTo(
      charsRef.current,
      0.47,
      {
        alpha: 1,
        x: 0
      },
      {
        cycle: {
          x: i => 50 + i * 40
        },
        alpha: 0,
        ease: Power1.easeInOut
      },
      0.015
    );
  });

  React.useEffect(() => {
    const mySplitText = new SplitText(lettersRef.current, {
      type: 'chars'
    });
    const { chars } = mySplitText;

    charsRef.current = chars;

    TweenMax.set(charsRef.current, {
      alpha: 0
    });
  }, []);

  React.useEffect(() => {
    if (superheroActive) {
      if (inHero) {
        const inAnimation =
          inHero === 'left' ? inLeftAnimation : inRightAnimation;
        inAnimation();
      } else {
        inLeftAnimation();
      }
    } else if (outHero) {
      const outAnimation =
        outHero === 'left' ? outLeftAnimation : outRightAnimation;
      outAnimation();
    }
  }, [superheroActive]);

  return (
    <div className={classes.join(' ')}>
      <button type="button" />
      <h2 ref={lettersRef} className={`letters ${superheroClass}`}>
        {superheroAlias}
      </h2>
    </div>
  );
};

Letters.propTypes = {
  superheroAlias: PropTypes.string,
  superheroClass: PropTypes.string,
  superheroActive: PropTypes.bool,
  superheroBreakpoint: PropTypes.number,
  onClick: PropTypes.func
};

export default Letters;
