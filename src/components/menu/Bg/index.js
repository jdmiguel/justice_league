import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Bg from './bg';

/** Models */
import { bgListModel } from '../../../utils/models';

const BgWrapper = ({ list, highlightBg }) => (
  <>
    <div className="bg-texture">
      <div />
    </div>
    {list.map(superhero => (
      <Bg
        key={superhero.alias}
        superheroAlias={superhero.alias}
        superheroClass={superhero.class}
        superheroActive={superhero.active}
        highlightBg={highlightBg}
      />
    ))}
    ;
  </>
);
BgWrapper.propTypes = {
  list: bgListModel,
  highlightBg: PropTypes.bool
};

export default BgWrapper;
