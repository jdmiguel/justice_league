import React from 'react';

/** Models */
import { dataSheetModel } from '../../utils/models';

const DataSheet = ({ data }) => (
  <div className="character-data-sheet">
    <div className="character-origin-connections">
      <h3>{data[0].section}</h3>
      <ul>
        {data[0].data.map(item => (
          <li key={item.text}>
            <strong>{`${item.title}: `}</strong>
            <span>{`${item.text}`}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="character-appearance">
      <h3>{data[1].section}</h3>
      <ul>
        {data[1].data.map(item => (
          <li key={item.text}>
            <strong>{`${item.title}: `}</strong>
            <span>{`${item.text}`}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

DataSheet.propTypes = {
  data: dataSheetModel
};

export default DataSheet;
