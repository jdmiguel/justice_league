import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, svg: SVGR, width = '30px', height = '30px' }) => (
  <React.Fragment>
    {SVGR && <SVGR className={className} width={width} height={height} />}
  </React.Fragment>
);

Icon.propTypes = {
  className: PropTypes.string,
  svg: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Icon;
