import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  superheroName,
  superheroClass,
  superheroActive,
  iconPath,
  counterValue,
  onClickIcon
}) => {
  const getActiveClass = () => (superheroActive ? 'active' : null);

  return (
    <li className={getActiveClass()}>
      <img
        alt={superheroName}
        className={`sidedrawer_${superheroClass}`}
        src={iconPath}
      />
      <span className={`sidedrawer_${superheroClass}`}>{superheroName}</span>
      <button
        type="button"
        onKeyDown={e => e.preventDefault}
        onFocus={e => e.preventDefault}
        onBlur={e => e.preventDefault}
        onClick={() => onClickIcon(counterValue)}
      />
    </li>
  );
};

Item.propTypes = {
  superheroName: PropTypes.string.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  iconPath: PropTypes.string.isRequired,
  counterValue: PropTypes.number.isRequired,
  onClickIcon: PropTypes.func.isRequired
};

export default Item;
