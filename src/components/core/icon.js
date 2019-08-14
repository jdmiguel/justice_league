import React from 'react';
import PropTypes from 'prop-types';

/* Colors */
import { white } from '../../utils/colors';

const Icon = ({
  className,
  svg: SVGR,
  width = '30px',
  height = '30px',
  fill = { white }
}) => (
  <React.Fragment>
    {SVGR && (
      <SVGR className={className} width={width} height={height} fill={fill} />
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
