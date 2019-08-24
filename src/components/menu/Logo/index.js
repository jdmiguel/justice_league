import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Logo from './Logo';

/** Models */
import { superheroesModel } from '../../../utils/models';

const LogoWrapper = ({ superheroes, highlightBg, outLogo }) =>
  superheroes.map(superhero => (
    <Logo
      key={superhero.class}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      highlightBg={highlightBg}
      outLogo={outLogo}
    />
  ));

LogoWrapper.propTypes = {
  superheroes: superheroesModel,
  highlightBg: PropTypes.bool,
  outLogo: PropTypes.bool
};

export default LogoWrapper;
