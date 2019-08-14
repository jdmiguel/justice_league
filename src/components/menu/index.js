import React from 'react';

/** Components */
import Sidedrawer from './Sidedrawer';

/* Reducer */
import { reducer, superheroesState } from '../../store/reducer';

/* Actions */
import { setActiveSuperhero } from '../../store/actions';

const Menu = () => {
  const [superheroes, dispatch] = React.useReducer(reducer, superheroesState);
  const sidedrawerList = React.useRef(null);

  sidedrawerList.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active,
    index: item.index,
    icon: item.icon,
    iconMeasures: item.iconMeasures
  }));

  return (
    <div className="menu">
      <Sidedrawer
        list={sidedrawerList.current}
        onClickItem={indexItem =>
          setActiveSuperhero(dispatch, superheroes, indexItem)
        }
      />
    </div>
  );
};

export default Menu;
