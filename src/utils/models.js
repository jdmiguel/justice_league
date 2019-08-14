import PropTypes from 'prop-types';

export const sidedrawerListModel = PropTypes.arrayOf(
  PropTypes.shape({
    alias: PropTypes.string,
    class: PropTypes.string,
    active: PropTypes.bool,
    index: PropTypes.number,
    icon: PropTypes.func,
    iconMeasures: PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string
    })
  })
);
