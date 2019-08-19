import React from 'react';
import PropTypes from 'prop-types';
import Letters from './Letters';

/** Models */
import { lettersListModel } from '../../../utils/models';

const LettersWrapper = ({ list, menuDirection, overLetters, onClick }) =>
  list.map(superhero => (
    <Letters
      key={superhero.alias}
      superheroAlias={superhero.alias}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      superheroBreakpoint={superhero.breakpoint}
      menuDirection={menuDirection}
      overLetters={overLetters}
      onClick={onClick}
    />
  ));

LettersWrapper.propTypes = {
  list: lettersListModel,
  overLetters: PropTypes.func,
  onClick: PropTypes.func
};

export default LettersWrapper;
