import React from 'react';

/** Components */
import Sidedrawer from './Sidedrawer';
import Bg from './Bg';
import Letters from './Letters';

/* Reducer */
import { reducer, initialState } from '../../store/reducer';

/* Actions */
import { setActiveSuperhero } from '../../store/actions';

const Menu = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { superheroes, menuDirection } = state;
  const sidedrawerList = React.useRef(null);
  const bgList = React.useRef(null);
  const lettersList = React.useRef(null);

  sidedrawerList.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active,
    index: item.index,
    icon: item.icon,
    iconMeasures: item.iconMeasures
  }));

  bgList.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active
  }));

  lettersList.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active,
    breakpoint: item.breakpoint
  }));

  return (
    <div className="menu">
      <Sidedrawer
        list={sidedrawerList.current}
        onClickItem={indexItem => {
          setActiveSuperhero(dispatch, superheroes, indexItem);
        }}
      />
      <Bg list={bgList.current} />
      <Letters list={lettersList.current} menuDirection={menuDirection} />
    </div>
  );
};

export default Menu;
