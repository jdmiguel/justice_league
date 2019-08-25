import React from 'react';
import PropTypes from 'prop-types';

/** Models */
import { tabsModel } from '../../utils/models';

const Tabs = ({ data, onClick }) => (
  <ul className="tabs">
    {data.map(item => (
      <li key={item.id}>
        <button
          className={item.active ? 'active' : null}
          type="button"
          onClick={() => onClick(item.id)}
        >
          {item.txt}
        </button>
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  data: tabsModel,
  onClick: PropTypes.func
};

export default Tabs;
