import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Icon from '../../core/icon';

const Item = ({
  superheroName,
  superheroClass,
  superheroActive,
  superheroIndex,
  superheroIcon,
  superheroIconMeasures,
  onClickItem
}) => {
  const { width, height } = superheroIconMeasures;

  // Handlers
  const onClickItemHandler = React.useCallback(() => {
    onClickItem(superheroIndex);
  });

  return (
    <li className={superheroActive ? 'active' : null}>
      <Icon svg={superheroIcon} width={width} height={height} />
      <span className={`${superheroClass}`}>{superheroName}</span>
      <button type="button" onClick={onClickItemHandler} />
    </li>
  );
};

Item.propTypes = {
  superheroName: PropTypes.string,
  superheroClass: PropTypes.string,
  superheroActive: PropTypes.bool,
  superheroIndex: PropTypes.number,
  superheroIcon: PropTypes.func,
  onClickItem: PropTypes.func
};

export default Item;
