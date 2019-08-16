import React from 'react';
import PropTypes from 'prop-types';
import Letters from './Letters';

/** Models */
import { lettersListModel } from '../../../utils/models';

const LettersWrapper = ({ list, onClick, menuDirection }) =>
  list.map(superhero => (
    <Letters
      key={superhero.alias}
      superheroAlias={superhero.alias}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      superheroBreakpoint={superhero.breakpoint}
      menuDirection={menuDirection}
      onClick={onClick}
    />
  ));

LettersWrapper.propTypes = {
  list: lettersListModel,
  onClick: PropTypes.func
};

export default LettersWrapper;
