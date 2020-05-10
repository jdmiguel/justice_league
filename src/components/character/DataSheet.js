import React from 'react';

/** Models */
import { dataSheetModel } from '../../utils/models';

const DataSheet = ({ data: { originConnections, appearance } }) => (
  <div className="character-data-sheet">
    <div className="character-origin-connections">
      <h3>{originConnections.title}</h3>
      <ul>
        {originConnections.data.map(item => (
          <li key={item.title}>
            <strong>{`${item.title}: `}</strong>
            <span>{`${item.text}`}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="character-appearance">
      <h3>{appearance.title}</h3>
      <ul>
        {appearance.data.map(item => (
          <li key={item.title}>
            <strong>{`${item.title}: `}</strong>
            <span>{`${item.text}`}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

DataSheet.propTypes = {
  data: dataSheetModel,
};

export default DataSheet;
