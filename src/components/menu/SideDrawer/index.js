import React from 'react';
import PropTypes from 'prop-types';

const SideDrawer = ({ list }) => (
  <div className="sidedrawer">
    <nav>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <img
              src={item.sideDrawerLogoPath}
              alt={item.name}
              className={`sidedrawer_${item.class}`}
            />
            <span className={`sidedrawer_${item.class}`}>{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

SideDrawer.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SideDrawer;
