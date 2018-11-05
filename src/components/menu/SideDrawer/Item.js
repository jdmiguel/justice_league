import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  superheroName,
  superheroClass,
  superheroActive,
  logoPath,
  counterValue,
  handlerSideDrawer
}) => {
  const getActiveClass = () => (superheroActive ? 'active' : null);

  return (
    <li className={getActiveClass()}>
      <img
        alt={superheroName}
        className={`sidedrawer_${superheroClass}`}
        src={logoPath}
      />
      <span className={`sidedrawer_${superheroClass}`}>{superheroName}</span>
      <button
        type="button"
        onKeyDown={e => e.preventDefault}
        onFocus={e => e.preventDefault}
        onBlur={e => e.preventDefault}
        onClick={() => handlerSideDrawer(counterValue)}
      />
    </li>
  );
};

Item.propTypes = {
  superheroName: PropTypes.string.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  logoPath: PropTypes.string.isRequired,
  counterValue: PropTypes.number.isRequired,
  handlerSideDrawer: PropTypes.func.isRequired
};

export default Item;
