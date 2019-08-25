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

  // States
  const [imgClass, setImgClass] = React.useState('introTab');

  // Handlers
  const onClickTabHandler = React.useCallback(id => {
    console.log('id: ', id);
    setImgClass(id);
    setActiveTab(dispatch, tabs, id);
  });

  return (
    <div className={`character-wrapper ${superhero.class}`}>
      <Icon
        className={`character-logo ${superhero.class}`}
        svg={superhero.icon}
      />
      <div className="character-content container-fluid">
        <div className="character-main row">
          <div className="character-block-left col-lg-5 col-md-12">
            <div className="character-image">
              <img
                className={imgClass}
                alt={superhero.alias}
                src={superhero.characterImg}
              />
            </div>
          </div>
          <div className="character-block-right col-lg-6 col-md-12">
            <h1>{superhero.alias}</h1>
            <h2>{superhero.name}</h2>
            <Intro txt={superhero.intro} />
            <Tabs data={tabs} onClick={id => onClickTabHandler(id)} />
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
