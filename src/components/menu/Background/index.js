import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { introBackgroundMenu } from '../../../utils/animations';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBg: null
    };
  }

  componentDidMount() {
    const bg = document.querySelector('.menuCharacters_background');
    this.setState({
      currentBg: bg
    });

    introBackgroundMenu(bg);
    /* const { tl, durationInit, duration } = this.state;
     tl.addLabel('initIntro')
      .from(
        '.menuCharacters_background',
        durationInit,
        {
          alpha: 0,
          ease: Power1.easeInOut
        },
        '+=2.5'
      )
      .addPause()
      .addLabel('initIn')
      .to(
        '.menuCharacters_background',
        duration,
        {
          alpha: 0.3,
          ease: Bounce.easeOut
        },
        '+=0'
      )
      .addPause()
      .addLabel('initOut')
      .to(
        '.menuCharacters_background',
        duration,
        {
          alpha: 0.2,
          ease: Bounce.easeOut
        },
        '+=0'
      )
      .addPause(); */
  }

  /* componentDidUpdate() {
    console.log('componentDidUpdate from Background');
    const { isActiveMenuLettersAnimation } = this.props;

    if (isActiveMenuLettersAnimation) this.animate('in');
    else this.animate('out');
  }

  animate(mode) {
    const { tl } = this.state;
    if (mode === 'in') tl.play('initIn');
    else tl.play('initOut');
  }
 */
  shouldComponentUpdate(nextProps, nextState) {
    const { superheroActive } = this.props;
    if (superheroActive !== nextProps.superheroActive) return true;
    return false;
  }

  render() {
    const { superheroActive, superheroClass } = this.props;
    const getBgClasses = () =>
      !superheroActive
        ? `menuCharacters_background ${superheroClass}`
        : `menuCharacters_background ${superheroClass} active`;

    return <div className={getBgClasses()} />;
  }
}

const mapStateToProps = state => ({
  isActiveMenuLettersAnimation:
    state.lettersMenuRdc.isActiveMenuLettersAnimation
});

Background.propTypes = {
  superheroName: PropTypes.string.isRequired,
  superheroClass: PropTypes.string.isRequired,
  superheroActive: PropTypes.bool.isRequired,
  isActiveMenuLettersAnimation: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(Background);
