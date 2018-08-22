import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Letters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tit: 'SUPERMAN',
      intro: {
        delay: 5.5,
        duration: 1.1
      },
      chars: null,
      totalChars: 0
    };

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
  }

  componentDidMount() {
    const { intro } = this.state;
    const { duration, delay } = intro;
    const tl = new TimelineMax();
    const mySplitText = new SplitText('.letters', { type: 'words,chars' });
    const { chars } = mySplitText;

    this.setState({
      chars,
      totalChars: chars.length
    });

    tl.staggerFrom(
      chars,
      duration,
      {
        delay,
        opacity: 0,
        rotationY: 120,
        transformOrigin: '50% 50%',
        ease: Power1.easeOut
      },
      0.08,
      '+=0'
    );
  }

  getDistance(index) {
    const { totalChars } = this.state;
    const factor = totalChars / 2;
    const distance =
      index < totalChars / 2
        ? (Math.sin(index) - totalChars) * (factor - index)
        : (Math.sin(index) + totalChars) * (index - factor);
    return distance;
  }

  mouseOverHandler() {
    const { chars, totalChars } = this.state;
    const { inLogoAnimation } = this.props;

    chars.forEach((char, i) => {
      if (i < totalChars / 2)
        TweenMax.to(char, 1, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
      if (i > totalChars / 2)
        TweenMax.to(char, 1.2, {
          x: `${this.getDistance(i)}`,
          ease: Power1.easeOut
        });
    });

    inLogoAnimation();
  }

  mouseOutHandler() {
    const { chars } = this.state;
    const { outLogoAnimation } = this.props;

    chars.forEach(char => {
      TweenMax.to(char, 1, {
        x: 0,
        ease: Power1.easeOut
      });
    });

    outLogoAnimation();
    // TweenMax.killDelayedCallsTo(this.animLetters);
  }

  render() {
    const { tit } = this.state;
    return (
      <div className="letters_container">
        <h1
          className="letters"
          onMouseEnter={this.mouseOverHandler}
          onMouseLeave={this.mouseOutHandler}
        >
          {tit}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isActiveLettersAnim: state.isActiveLettersAnim
});
const mapDispatchToProps = dispatch => ({
  inLogoAnimation: () => dispatch({ type: actionTypes.IN_LOGO_ANIMATION }),
  outLogoAnimation: () => dispatch({ type: actionTypes.OUT_LOGO_ANIMATION })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Letters);
