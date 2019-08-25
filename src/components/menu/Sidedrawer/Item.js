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
      <Icon svg={superheroIcon} width={width} height={height} />
      <span className={`${superheroClass}`}>{superheroAlias}</span>
      <button type="button" onClick={() => onClickItem(superheroIndex)} />
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
