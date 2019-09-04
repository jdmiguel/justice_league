import React from 'react';
import PropTypes from 'prop-types';

/** Models */
import { tabsModel } from '../../utils/models';

const Tabs = ({ data, onClick }, ref) => {
  // Handlers
  const onClickHandler = React.useCallback(id => {
    onClick(id);
  });

  return (
    <ul ref={ref} className="tabs">
      {data.map(item => (
        <li key={item.id}>
          <button
            className={item.active ? 'active' : null}
            type="button"
            onClick={() => onClickHandler(item.id)}
          >
            {item.txt}
          </button>
        </li>
      ))}
    </ul>
  );
};

const forwardedTabs = React.forwardRef(Tabs);

Tabs.propTypes = {
  data: tabsModel,
  onClick: PropTypes.func
};

export default forwardedTabs;
