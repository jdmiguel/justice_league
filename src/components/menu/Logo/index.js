import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Logo from './Logo';

/** Models */
import { logoListModel } from '../../../utils/models';

const LogoWrapper = ({ list, highlightBg }) =>
  list.map(superhero => (
    <Logo
      key={superhero.class}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      highlightBg={highlightBg}
    />
  ));

LogoWrapper.propTypes = {
  list: logoListModel,
  highlightBg: PropTypes.bool
};

export default LogoWrapper;
