import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Item from './Item';

/** Models */
import { superheroesModel } from '../../../utils/models';

const Sidedrawer = ({ superheroes, onClickItem }) => (
  <div className="sidedrawer">
    <nav>
      <ul>
        {superheroes.map(superhero => (
          <Item
            key={superhero.alias}
            superheroAlias={superhero.alias}
            superheroClass={superhero.class}
            superheroActive={superhero.active}
            superheroIndex={superhero.index}
            superheroIcon={superhero.icon}
            superheroIconMeasures={superhero.iconMeasures}
            onClickItem={onClickItem}
          />
        ))}
      </ul>
    </nav>
  </div>
);

Sidedrawer.propTypes = {
  superheroes: superheroesModel,
  onClickItem: PropTypes.func
};

export default Sidedrawer;
