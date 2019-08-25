import React from 'react';
import PropTypes from 'prop-types';

/* Colors */
import { white, black } from '../../utils/colors';

const Icon = ({
  className,
  svg: SVGR,
  width = '30px',
  height = '30px',
  fill = { black }
}) => (
  <React.Fragment>
    {SVGR && (
      <SVGR
        className={className}
        width={width}
        height={height}
        fill="#FFFFFF"
      />
    )}
  </React.Fragment>
);

Icon.propTypes = {
  className: PropTypes.string,
  svg: PropTypes.func.isRequired,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Icon;
