import React from 'react';

/* Components */
import Bg from './bg';

/** Models */
import { bgListModel } from '../../../utils/models';

const BgWrapper = ({ list }) =>
  list.map(superhero => (
    <Bg
      key={superhero.alias}
      superheroAlias={superhero.alias}
      superheroClass={superhero.class}
      superheroActive={superhero.active}
    />
  ));

BgWrapper.propTypes = {
  list: bgListModel
};

export default BgWrapper;
