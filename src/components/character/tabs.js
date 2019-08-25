import React from 'react';
import PropTypes from 'prop-types';

/** Literals */
import { tabs } from '../../utils/literals';

const Tabs = ({ onClick }) => (
  <ul className="tabs">
    {tabs.map(item => (
      <li key={item.id}>
        <button type="button" onClick={onClick}>
          {item.txt}
        </button>
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  onClick: PropTypes.func
};

export default Tabs;
