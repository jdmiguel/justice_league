import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Bg from './bg';

/** Models */
import { superheroesModel } from '../../../utils/models';

const BgWrapper = ({ superheroes, highlightBg }) => (
  <React.Fragment>
    <div className="bg-texture">
      <div />
    </div>
    {superheroes.map(superhero => (
      <Bg
        key={superhero.alias}
        superheroAlias={superhero.alias}
        superheroClass={superhero.class}
        superheroActive={superhero.active}
        highlightBg={highlightBg}
      />
    ))}
    ;
  </React.Fragment>
);
BgWrapper.propTypes = {
  superheroes: superheroesModel,
  highlightBg: PropTypes.bool
};

export default BgWrapper;
