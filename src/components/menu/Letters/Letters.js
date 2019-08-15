import React from 'react';
import PropTypes from 'prop-types';

const Letters = ({
  superheroAlias,
  superheroClass,
  superheroActive,
  superheroIndex,
  superheroBreakpoint,
  onClick
}) => {
  const [classes, setClasses] = React.useState(['letters-wrapper']);
  const [superheroIndexState, setIndexSuperheroState] = React.useState(3);
  const letters = React.useRef(null);
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    // Chars
    const mySplitText = new SplitText(`.${superheroClass}`, {
      type: 'chars'
    });
    const { chars } = mySplitText;

    letters.current = chars;

    // Animation

    animationRef.current = new TimelineMax({ paused: true });
    animationRef.current
      .set(letters.current, { alpha: 0 })
      .addLabel('in')
      .staggerFromTo(
        letters.current,
        0.6,
        {
          alpha: 0,
          cycle: {
            x:
              superheroIndex <= superheroIndexState
                ? i => -200 + i * 20
                : i => 50 + i * 40
          }
        },
        {
          x: 0,
          alpha: 1,
          ease: Power1.easeOut
        },
        0.014,
        '+=.35'
      )
      .addPause()
      .addLabel('out')
      .staggerFromTo(
        letters.current,
        0.47,
        {
          alpha: 1,
          x: 0
        },
        {
          cycle: {
            x:
              superheroIndex <= superheroIndexState
                ? i => 50 + i * 40
                : i => -200 + i * 20
          },
          alpha: 0,
          ease: Power1.easeOut
        },
        0.014
      )
      .add(() => setClasses(classes.filter(item => item !== 'active')));
  }, []);

  React.useEffect(() => {
    if (superheroActive) {
      setClasses([...classes, 'active']);
      animationRef.current.play('in');
    } else {
      animationRef.current.play('out');
    }

    return () => {
      animationRef.current.kill();
    };
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
