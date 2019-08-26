import React from 'react';

/** Components */
import Icon from '../core/icon';
import Intro from './Intro';
import DataSheet from './DataSheet';
import Tabs from './Tabs';

/* Reducer */
import { reducer, initialState } from '../../store/reducer';

/* Actions */
import { setActiveTab } from '../../store/actions';

/** Models */
import { superheroModel } from '../../utils/models';

const Character = ({ superhero }) => {
  // Reducers
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { tabs } = state;

  // Refs
  const characterImgRef = React.useRef(null);
  const characterIntroRef = React.useRef(null);
  const characterTitleRef = React.useRef(null);
  const characterSubTitleRef = React.useRef(null);
  const characterTabsRef = React.useRef(null);
  const animationRef = React.useRef(null);

  // States
  const [imgClass, setImgClass] = React.useState('introTab');
  const [contentClasses, setContentClasses] = React.useState([
    'character-content container-fluid'
  ]);

  // Handlers
  const onClickTabHandler = React.useCallback(id => {
    console.log('id: ', id);
    setImgClass(id);
    setActiveTab(dispatch, tabs, id);
  });

  // UseEffects

  React.useEffect(() => {
    animationRef.current = new TimelineMax();

    setContentClasses([...contentClasses, 'visible']);

    animationRef.current
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
        characterIntroRef.current,
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
      );
  }, []);

  return (
    <div className={`character-wrapper ${superhero.class}`}>
      <div className={`character-logo ${superhero.class}`}>
        <Icon svg={superhero.icon} />
      </div>
      <div className={contentClasses.join(' ')}>
        <div className="character-main row">
          <div className="character-block-left col-lg-5 col-md-12">
            <div ref={characterImgRef} className="character-image">
              <img
                className={imgClass}
                alt={superhero.name}
                src={superhero.characterImg}
              />
            </div>
          </div>
          <div className="character-block-right col-lg-6 col-md-12">
            <h1 ref={characterTitleRef}>{superhero.name}</h1>
            <h2 ref={characterSubTitleRef}>{superhero.alias}</h2>
            <Intro ref={characterIntroRef} txt={superhero.intro} />
            <DataSheet data={superhero.dataSheet} />
            <Tabs
              ref={characterTabsRef}
              data={tabs}
              onClick={id => onClickTabHandler(id)}
            />
          </div>
        </div>
      </div>
      <div className="character-btn-back">
        <button type="button">BACK TO HOME</button>
      </div>
    </div>
  );
};

Character.propTypes = {
  superhero: superheroModel
};

export default Character;
