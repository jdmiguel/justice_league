import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Icon from '../core/icon';
import Intro from './Intro';
import DataSheet from './DataSheet';
import Tabs from './Tabs';

/* Reducer */
import { reducer, initialState } from '../../store/reducer';

/* Actions */
import { setActiveTab } from '../../store/actions';

/* Hooks */
import useWindowResize from '../../hooks/useWindowResize';

/** Models */
import { superheroModel } from '../../utils/models';

const Character = ({ superhero, goMenu }) => {
  // Measures
  const { width } = useWindowResize();
  const isBigLaptopOrDekstop = width > 1400;

  // Reducers
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { tabs } = state;

  // Refs
  const characterRef = React.useRef(null);
  const characterImgRef = React.useRef(null);
  const characterTitleRef = React.useRef(null);
  const characterSubTitleRef = React.useRef(null);
  const characterDataRef = React.useRef(null);
  const characterTabsRef = React.useRef(null);
  const animationWithImgRef = React.useRef(null);
  const animationWithoutImgRef = React.useRef(null);

  // States
  const [imgClass, setImgClass] = React.useState('introTab');
  const [contentClasses, setContentClasses] = React.useState([
    'character-content'
  ]);

  // Handlers
  const onClickTabHandler = React.useCallback(id => {
    console.log('id: ', id);
    setImgClass(id);
    setActiveTab(dispatch, tabs, id);
  });

  const onClickBackHandler = React.useCallback(() => {
    const tlSelected = isBigLaptopOrDekstop
      ? animationWithImgRef.current
      : animationWithoutImgRef.current;

    tlSelected.play('out');
  });

  // UseEffects
  React.useEffect(() => {
    if (isBigLaptopOrDekstop) {
      setContentClasses([...contentClasses, 'visible']);

      animationWithImgRef.current = new TimelineMax();
      animationWithImgRef.current
        .from(characterImgRef.current, 0.6, {
          autoAlpha: 0,
          x: -75,
          ease: Power2.easeOut
        })
        .from(
          characterTitleRef.current,
          0.5,
          {
            autoAlpha: 0,
            x: 200,
            ease: Power2.easeOut
          },
          '-=0.6'
        )
        .from(
          characterSubTitleRef.current,
          0.5,
          {
            autoAlpha: 0,
            x: 150,
            ease: Power2.easeOut
          },
          '-=0.4'
        )
        .from(
          characterDataRef.current,
          0.5,
          {
            autoAlpha: 0,
            x: 120,
            ease: Power2.easeOut
          },
          '-=0.4'
        )
        .from(
          characterTabsRef.current,
          0.5,
          {
            autoAlpha: 0,
            x: 120,
            ease: Power2.easeOut
          },
          '-=0.4'
        )
        .addPause()
        .addLabel('out')
        .to(characterImgRef.current, 0.3, {
          autoAlpha: 0,
          x: -75,
          ease: Power2.easeIn
        })
        .to(
          characterTitleRef.current,
          0.25,
          {
            autoAlpha: 0,
            x: 100,
            ease: Power2.easeIn
          },
          '-=0.3'
        )
        .to(
          characterSubTitleRef.current,
          0.25,
          {
            autoAlpha: 0,
            x: 100,
            ease: Power2.easeIn
          },
          '-=0.3'
        )
        .to(
          characterDataRef.current,
          0.25,
          {
            autoAlpha: 0,
            x: 100,
            ease: Power2.easeIn
          },
          '-=0.3'
        )
        .to(
          characterTabsRef.current,
          0.25,
          {
            autoAlpha: 0,
            x: 100,
            ease: Power2.easeIn
          },
          '-=0.3'
        )
        .to(
          characterRef.current,
          0.3,
          {
            autoAlpha: 0
          },
          '-=0.1'
        )
        .addCallback(() => goMenu());
    } else {
      setContentClasses([...contentClasses, 'visible']);

      animationWithoutImgRef.current = new TimelineMax();
      animationWithoutImgRef.current
        .from(characterTitleRef.current, 0.5, {
          autoAlpha: 0,
          x: 50,
          ease: Power2.easeOut
        })
        .from(
          characterSubTitleRef.current,
          0.5,
          {
            autoAlpha: 0,
            x: -50,
            ease: Power2.easeOut
          },
          '-=0.3'
        )
        .from(
          characterDataRef.current,
          0.5,
          {
            autoAlpha: 0,
            y: 30,
            ease: Power2.easeOut
          },
          '-=0.3'
        )
        .from(
          characterTabsRef.current,
          0.5,
          {
            autoAlpha: 0,
            ease: Power2.easeOut
          },
          '-=0.3'
        )
        .addPause()
        .addLabel('out')
        .to(characterTitleRef.current, 0.25, {
          autoAlpha: 0,
          y: 20,
          ease: Power2.easeIn
        })
        .to(
          characterSubTitleRef.current,
          0.25,
          {
            autoAlpha: 0,
            y: 20,
            ease: Power2.easeIn
          },
          '-=0.3'
        )
        .to(
          characterDataRef.current,
          0.25,
          {
            autoAlpha: 0,
            y: 20,
            ease: Power2.easeIn
          },
          '-=0.3'
        )
        .to(
          characterTabsRef.current,
          0.25,
          {
            autoAlpha: 0,
            y: 20,
            ease: Power2.easeIn
          },
          '-=0.3'
        )
        .to(characterRef.current, 0.3, {
          autoAlpha: 0
        })
        .addCallback(() => goMenu());
    }
    return () => {
      if (isBigLaptopOrDekstop) {
        animationWithImgRef.current.kill();
      } else {
        animationWithoutImgRef.current.kill();
      }
    };
  }, []);

  return (
    <div ref={characterRef} className={`character ${superhero.class}`}>
      <div className={`character-logo ${superhero.class}`}>
        <Icon svg={superhero.icon} />
      </div>
      <div className={contentClasses.join(' ')}>
        <div className="character-main">
          {isBigLaptopOrDekstop && (
            <div className="character-block-left">
              <div ref={characterImgRef} className="character-image">
                <img
                  className={imgClass}
                  alt={superhero.name}
                  src={superhero.characterImg}
                />
              </div>
            </div>
          )}
          <div className="character-block-right">
            <h1 ref={characterTitleRef}>{superhero.name}</h1>
            <h2 ref={characterSubTitleRef}>{superhero.alias}</h2>
            <div ref={characterDataRef} className="character-data">
              {/* <Intro txt={superhero.intro} /> */}
              <DataSheet data={superhero.dataSheet} />
            </div>
            <Tabs
              ref={characterTabsRef}
              data={tabs}
              onClick={id => onClickTabHandler(id)}
            />
          </div>
        </div>
      </div>
      <div className="character-btn-back">
        <button type="button" onClick={onClickBackHandler}>
          BACK TO HOME
        </button>
      </div>
    </div>
  );
};

Character.propTypes = {
  superhero: superheroModel,
  goMenu: PropTypes.func
};

export default Character;
