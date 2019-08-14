import React from 'react';
import PropTypes from 'prop-types';

const Letters = ({
  superheroAlias,
  superheroClass,
  superheroActive,
  superheroBreakpoint,
  onClick
}) => {
  const [classes, setClasses] = React.useState(['letters-wrapper']);
  const [letters, setLetters] = React.useState(null);
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    // Chars
    const mySplitText = new SplitText(`.${superheroClass}`, {
      type: 'words,chars'
    });
    const { chars } = mySplitText;

    TweenMax.set(chars, { alpha: 0 });
    setLetters(chars);

    // Animation

    animationRef.current = new TimelineMax({ paused: true });
    animationRef.current.staggerFromTo(
      chars,
      0.6,
      {
        alpha: 0,
        cycle: { x: i => -200 + i * 20 },
        rotationY: 0
      },
      {
        delay: 0.4,
        x: 0,
        alpha: 1,
        rotationY: 0,
        ease: Power1.easeOut
      },
      0.015
    );

    return () => {
      animationRef.current.kill();
    };
  }, []);

  React.useEffect(() => {
    if (superheroActive) {
      setClasses([...classes, 'active']);
      animationRef.current.restart();
    } else {
      setClasses(classes.filter(item => item !== 'active'));
    }
  }, [superheroActive]);

  return (
    <div className={classes.join(' ')}>
      <button type="button" />
      <h2 className={`letters ${superheroClass}`}>{superheroAlias}</h2>
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
