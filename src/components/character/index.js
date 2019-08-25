import React from 'react';

/** Components */
import Icon from '../core/icon';
import Intro from './Intro';
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
  const characterIconRef = React.useRef(null);
  const animationRef = React.useRef(null);

  // States
  const [imgClass, setImgClass] = React.useState('introTab');

  // Handlers
  const onClickTabHandler = React.useCallback(id => {
    console.log('id: ', id);
    setImgClass(id);
    setActiveTab(dispatch, tabs, id);
  });

  // UseEffects

  React.useEffect(() => {
    animationRef.current = new TimelineMax();

    animationRef.current
      .from(characterImgRef.current, 0.6, {
        autoAlpha: 0,
        x: -75
      })
      .from(characterTitleRef.current, 0.5, {
        autoAlpha: 0,
        x: 200
      })
      .from(characterSubTitleRef.current, 0.62, {
        autoAlpha: 0,
        x: 150
      })
      .from(characterIntroRef.current, 0.7, {
        autoAlpha: 0,
        x: 120
      })
      .from(characterTabsRef.current, 0.7, {
        autoAlpha: 0,
        x: 120
      })
      .from(characterIconRef.current, 0.5, {
        autoAlpha: 0
      });
  }, []);

  return (
    <div className={`character-wrapper ${superhero.class}`}>
      <div
        ref={characterIconRef}
        className={`character-logo ${superhero.class}`}
      >
        <Icon svg={superhero.icon} />
      </div>
      <div className="character-content container-fluid">
        <div className="character-main row">
          <div className="character-block-left col-lg-5 col-md-12">
            <div ref={characterImgRef} className="character-image">
              <img
                className={imgClass}
                alt={superhero.alias}
                src={superhero.characterImg}
              />
            </div>
          </div>
          <div className="character-block-right col-lg-6 col-md-12">
            <h1 ref={characterTitleRef}>{superhero.alias}</h1>
            <h2 ref={characterSubTitleRef}>{superhero.name}</h2>
            <Intro ref={characterIntroRef} txt={superhero.intro} />
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
