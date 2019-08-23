import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Logo from './Logo';

/** Models */
import { superheroesModel } from '../../../utils/models';

const LogoWrapper = ({ superheroes, highlightBg }) =>
  superheroes.map(superhero => (
    <Logo
      key={superhero.class}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      highlightBg={highlightBg}
    />
  ));

LogoWrapper.propTypes = {
  superheroes: superheroesModel,
  highlightBg: PropTypes.bool
};

export default LogoWrapper;
