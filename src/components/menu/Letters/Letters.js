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
  // const [superheroIndexState, setSuperheroIndexState] = React.useState(0);
  const superheroIndexRef = React.useRef(null);
  const letters = React.useRef(null);
  const animationRef = React.useRef(null);

  React.useEffect(() => {
    // setSuperheroIndexState(superheroIndex);
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
              superheroIndex < superheroIndexRef.current
                ? i => -250 + i * 20
                : i => 50 + i * 40
          }
        },
        {
          x: 0,
          alpha: 1,
          ease: Power1.easeOut
        },
        0.012,
        '+=.35'
      )
      .add(() => {
        superheroIndexRef.current = superheroIndex;
      })
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
              superheroIndex < superheroIndexRef.current
                ? i => 50 + i * 40
                : i => -250 + i * 20
          },
          alpha: 0,
          ease: Power1.easeInOut
        },
        0.015
      )
      .add(() => setClasses(classes.filter(item => item !== 'active')));
  }, []);

  React.useEffect(() => {
    console.log('superheroIndex: ', superheroIndex);
    console.log('superheroIndexState: ', superheroIndexRef.current);
    if (superheroActive) {
      setClasses([...classes, 'active']);
      animationRef.current.play('in');
    } else {
      animationRef.current.play('out');
    }

    // setSuperheroIndexState(superheroIndex);

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
