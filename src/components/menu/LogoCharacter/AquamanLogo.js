import React from 'react';
import PropTypes from 'prop-types';

const AquamanLogo = ({ classes }) => (
  <div className={classes}>
    <svg
      x="0px"
      y="0px"
      width="500px"
      height="500px"
      viewBox="0 0 500 500"
      enableBackground="new 0 0 500 500"
      className="superheroLogo_svg"
      xmlSpace="preserve"
    >
      <path
        fill="#EFC12D"
        fillOpacity="0.5"
        className="superheroLogo_path"
        d="M307.453,6.315c31.71,50.747,62.858,101.841,93.464,153.272c29.776,50.037,59.015,100.383,87.555,151.135
        c1.143,2.032,1.442,3.267-0.488,5.146c-55.578,54.073-113.485,105.513-173.807,154.238c-3.921,3.166-6.896,3.697-9.149,1.771
        c-2.336-1.996-2.235-5.515,0.24-9.596c16.529-27.253,31.148-55.522,44.348-84.508c20.038-43.995,10.886-93.188-23.635-126.699
        c-21.13-20.512-46.812-30.361-70.589-30.806c-60.097-0.072-106.985,41.036-114.347,95.203c-2.968,21.835,0.342,42.711,9.454,62.618
        c13.305,29.062,27.926,57.453,44.544,84.787c0.638,1.048,1.164,2.215,1.468,3.398c0.548,2.122,0.009,4.116-1.612,5.581
        c-1.583,1.433-3.501,1.315-5.443,0.632c-1.989-0.703-3.448-2.161-5.02-3.434c-42.289-34.209-83.362-69.825-123.347-106.7
        c-16.491-15.206-32.771-30.634-48.869-46.256c-1.91-1.854-2.051-3.073-0.747-5.391C69.374,207.799,129.97,106.504,192.497,6.363
        C82.183,32.367,0.073,131.434,0.073,249.689c0,138.071,111.93,250,250,250c138.071,0,250-111.93,250-250
        C500.073,131.364,417.866,32.249,307.453,6.315z"
      />
    </svg>
  </div>
);

AquamanLogo.propTypes = {
  classes: PropTypes.string.isRequired
};

export default AquamanLogo;
