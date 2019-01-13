import React from 'react';
import PropTypes from 'prop-types';
import Item from '../../../components/menu/SideDrawer/Item';

const SideDrawer = ({ list }) => (
  <div className="sidedrawer">
    <nav>
      <ul>
        {list.map(superhero => (
          <Item
            key={superhero.id}
            superheroName={superhero.name}
            superheroClass={superhero.class}
            superheroActive={superhero.active}
            iconPath={superhero.sideDrawerIconPath}
            counterValue={superhero.counterValue}
          />
        ))}
      </ul>
    </nav>
  </div>
);

SideDrawer.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SideDrawer;
