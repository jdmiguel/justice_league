import React from 'react';

/* Reducer */
import { reducer, superheroesState } from '../../store/reducer';

/** Components */
import Sidedrawer from './Sidedrawer';
import Item from './Sidedrawer/Item';

const Menu = () => {
  const [superheroes, dispatch] = React.useReducer(reducer, superheroesState);
  const [sidedrawerList, setSidedrawerList] = React.useState(
    superheroes.map(item => ({
      alias: item.alias,
      class: item.class,
      active: item.active,
      index: item.index,
      icon: item.icon,
      iconMeasures: item.iconMeasures
    }))
  );

  return (
    <div className="menu">
      <Sidedrawer
        list={sidedrawerList}
        onClickItem={() => console.log('on click item')}
      />
    </div>
  );
};

export default Menu;
