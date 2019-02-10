import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const SideDrawer = ({ list, onClickSideDrawerItem }) => (
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
            onClickIcon={onClickSideDrawerItem}
          />
        ))}
      </ul>
    </nav>
  </div>
);

SideDrawer.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSideDrawerItem: PropTypes.func.isRequired
};

export default SideDrawer;
