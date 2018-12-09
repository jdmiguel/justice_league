import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSelectedSidedrawerItem } from '../../../store/actions/menu/sidedrawer';

const Item = ({
  superheroName,
  superheroClass,
  superheroActive,
  logoPath,
  counterValue,
  setSelectedSidedrawerItemHandler
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
        onClick={() => setSelectedSidedrawerItemHandler(counterValue)}
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
  setSelectedSidedrawerItemHandler: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  setSelectedSidedrawerItemHandler: itemSelected =>
    dispatch(setSelectedSidedrawerItem(itemSelected))
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
