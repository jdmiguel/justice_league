import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Letters from './Letters';

/** Models */
import { lettersListModel } from '../../../utils/models';

const LettersWrapper = ({
  list,
  menuDirection,
  overLetters,
  endLettersAnimation,
  onClick
}) =>
  list.map(superhero => (
    <Letters
      key={superhero.alias}
      superheroAlias={superhero.alias}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
      superheroBreakpoint={superhero.breakpoint}
      menuDirection={menuDirection}
      overLetters={overLetters}
      endLettersAnimation={endLettersAnimation}
      onClick={onClick}
    />
  ));

LettersWrapper.propTypes = {
  list: lettersListModel,
  overLetters: PropTypes.func,
  endLettersAnimation: PropTypes.func,
  onClick: PropTypes.func
};

export default LettersWrapper;
