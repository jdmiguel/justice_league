import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Icon from '../../core/icon';

const Item = ({
  superheroAlias,
  superheroClass,
  superheroActive,
  superheroIndex,
  superheroIcon,
  superheroIconMeasures,
  onClickItem
}) => {
  const { width, height } = superheroIconMeasures;

  return (
    <li className={superheroActive ? 'active' : null}>
      <Icon
        className={`sidedrawer_${superheroClass}`}
        svg={superheroIcon}
        width={width}
        height={height}
      />
      <span className={`sidedrawer_${superheroClass}`}>{superheroAlias}</span>
      <button
        type="button"
        onKeyDown={e => e.preventDefault}
        onFocus={e => e.preventDefault}
        onBlur={e => e.preventDefault}
        onClick={() => onClickItem(superheroIndex)}
      />
    </li>
  );
};

Item.propTypes = {
  superheroAlias: PropTypes.string,
  superheroClass: PropTypes.string,
  superheroActive: PropTypes.bool,
  superheroIndex: PropTypes.number,
  superheroIcon: PropTypes.func,
  onClickItem: PropTypes.func
};

export default Item;
