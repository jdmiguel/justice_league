import React from 'react';
import PropTypes from 'prop-types';
import Intro from '../../components/Intro';
import Menu from './Menu';

const MenuWrapper = ({ history }) => (
  <div className="menuCharacters_container">
    <Intro />
    <Menu history={history} />
  </div>
);

MenuWrapper.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired
};

export default MenuWrapper;
