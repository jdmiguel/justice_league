import React from 'react';

/** Models */
import { dataSheetModel } from '../../utils/models';

const DataSheet = ({ data }, ref) => (
  <div ref={ref} className="character-data-sheet">
    <div className="character-origin-connections">
      <h3>{data[0].section}</h3>
      <ul>
        {data[0].data.map(item => (
          <li>{`${item.title} : ${item.text}`}</li>
        ))}
      </ul>
    </div>
    <div className="character-appearance">
      <h3>{data[1].section}</h3>
      <ul>
        {data[1].data.map(item => (
          <li>{`${item.title} : ${item.text}`}</li>
        ))}
      </ul>
    </div>
  </div>
);

DataSheet.propTypes = {
  data: dataSheetModel
};

export default React.forwardRef(DataSheet);
