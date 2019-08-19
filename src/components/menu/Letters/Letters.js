import React from 'react';
import PropTypes from 'prop-types';

const Letters = ({
  superheroAlias,
  superheroClass,
  superheroActive,
  superheroBreakpoint,
  menuDirection,
  overLetters,
  onClick
}) => {
  const { inHero, outHero } = menuDirection;

  const [classes, setClasses] = React.useState(['letters-wrapper']);
  const [allowOver, setAllowOver] = React.useState(false);
  const lettersRef = React.useRef(null);
  const charsRef = React.useRef(null);

  const entryAnimation = React.useCallback(() => {
    setClasses([...classes, 'active']);

    TweenMax.staggerFromTo(
      charsRef.current,
      0.75,
      {
        alpha: 0,
        rotationY: -120,
        x: -50,
        scaleX: 0
      },
      {
        delay: 0.4,
        alpha: 1,
        rotationY: 0,
        x: 0,
        scaleX: 1,
        ease: Power1.easeOut
      },
      0.08,
      () => setAllowOver(true)
    );
  });

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
      0.012,
      () => setAllowOver(true)
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
      0.012,
      () => setAllowOver(true)
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

  const getDistance = (index, splitFactor) => {
    const totalChars = superheroAlias.length;
    const distance =
      index < superheroBreakpoint
        ? (Math.asinh(index) - totalChars) *
          (superheroBreakpoint - index) *
          splitFactor
        : (Math.asinh(index) + totalChars) *
          (index - superheroBreakpoint) *
          splitFactor;

    return distance;
  };

  const mouseOverHandler = () => {
    if (allowOver) {
      overLetters(true);
      TweenMax.staggerTo(charsRef.current, 1, {
        cycle: {
          x: i => getDistance(i, 0.45)
        },
        ease: Power1.easeOut
      });
    }
  };

  const mouseOutHandler = () => {
    if (allowOver) {
      overLetters(false);
      TweenMax.to(charsRef.current, 1, {
        x: 0,
        ease: Power1.easeOut
      });
    }
  };

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
        entryAnimation();
      }
    } else if (outHero) {
      setAllowOver(false);
      const outAnimation =
        outHero === 'left' ? outLeftAnimation : outRightAnimation;
      outAnimation();
    }
  }, [superheroActive]);

  return (
    <div className={classes.join(' ')}>
      <button
        type="button"
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        onKeyDown={e => e.preventDefault}
        onFocus={e => e.preventDefault}
        onBlur={e => e.preventDefault}
      />
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
  overLetters: PropTypes.func,
  onClick: PropTypes.func
};

export default Letters;
