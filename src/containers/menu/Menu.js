import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LettersWrapper from './Letters';
import LogoWrapper from './Logo';
import BackgroundWrapper from './Background';
import SideDrawer from './Sidedrawer';
import Footer from '../../components/Footer';

import {
  setActiveSuperhero,
  setSuperheroActiveCounter
} from '../../store/actions/menu/superheroes';

import {
  setDirectionIn,
  setDirectionOut
} from '../../store/actions/menu/directions';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onMouseWheel: false,
      delayOnMouseWheel: null
    };
  }

  componentDidMount() {
    const { superheroesList, setSuperheroActiveCounterHandler } = this.props;

    setSuperheroActiveCounterHandler(superheroesList);

    document.addEventListener('mousewheel', event =>
      this.mouseWheelHandler(event)
    );
  }

  changeMenu(e) {
    const { delayOnMouseWheel } = this.state;
    const {
      superheroesList,
      counterActivateSuperhero,
      setActiveSuperheroHandler,
      setDirectionInHandler,
      setDirectionOutHandler
    } = this.props;

    const superheroData = {
      superheroesList,
      counterActivateSuperhero
    };

    if (e.deltaY > 0) {
      setDirectionInHandler('left');
      setDirectionOutHandler('right');
      setActiveSuperheroHandler(superheroData, 'next');
    } else {
      setDirectionInHandler('right');
      setDirectionOutHandler('left');
      setActiveSuperheroHandler(superheroData, 'prev');
    }

    clearTimeout(delayOnMouseWheel);

    this.setState({
      onMouseWheel: false
    });
  }

  mouseWheelHandler(e) {
    const { isActiveOverMenuLetters } = this.props;
    const { onMouseWheel } = this.state;

    if (onMouseWheel || !isActiveOverMenuLetters) return;

    this.setState({
      onMouseWheel: true,
      delayOnMouseWheel: setTimeout(() => this.changeMenu(e), 1000)
    });
  }

  render() {
    const { history, superheroesList } = this.props;
    return (
      <div className="menuCharacters_wrapper">
        <LettersWrapper history={history} list={superheroesList} />
        <LogoWrapper list={superheroesList} />
        <BackgroundWrapper list={superheroesList} />
        <SideDrawer list={superheroesList} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  superheroesList: state.superheroesMenuRdc.superheroesList,
  counterActivateSuperhero: state.superheroesMenuRdc.counterActivateSuperhero,
  isActiveOverMenuLetters: state.lettersMenuRdc.isActiveOverMenuLetters
});

const mapDispatchToProps = dispatch => ({
  setSuperheroActiveCounterHandler: list =>
    dispatch(setSuperheroActiveCounter(list)),
  setActiveSuperheroHandler: (data, selected) =>
    dispatch(setActiveSuperhero(data, selected)),
  setDirectionInHandler: direction => dispatch(setDirectionIn(direction)),
  setDirectionOutHandler: direction => dispatch(setDirectionOut(direction))
});

Menu.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  superheroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  counterActivateSuperhero: PropTypes.number.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  setSuperheroActiveCounterHandler: PropTypes.func.isRequired,
  setActiveSuperheroHandler: PropTypes.func.isRequired,
  setDirectionInHandler: PropTypes.func.isRequired,
  setDirectionOutHandler: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
