import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LettersWrapper from './Letters';
import LogoWrapper from './Logo';
import BackgroundWrapper from './Background';
import SideDrawer from './SideDrawer';
import Footer from '../../components/Footer';

import { setActiveSuperhero } from '../../store/actions/menu/superheroes';

import {
  setDirectionIn,
  setDirectionOut
} from '../../store/actions/menu/directions';

import { desactiveOverMenuLetters } from '../../store/actions/menu/letters';

import { outMenu } from '../../utils/animations';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNode: null,
      onMouseWheel: false,
      onSwipe: false,
      delayOnMouseWheel: null,
      delayOnSwipe: null
    };

    this.onClickLettersHandler = this.onClickLettersHandler.bind(this);
    this.changeMenuBySideDrawer = this.changeMenuBySideDrawer.bind(this);
    this.onSwipePress = this.onSwipePress.bind(this);
  }

  componentDidMount() {
    const menuNode = document.querySelector('.menu_container');

    this.setState({
      menuNode
    });

    menuNode.addEventListener('mousewheel', event =>
      this.mouseWheelHandler(event)
    );
    menuNode.addEventListener('DOMMouseScroll', event =>
      this.mouseWheelHandler(event)
    );

    this.swipeManager = new Hammer.Manager(menuNode);
    this.swipeEvent = new Hammer.Swipe('DIRECTION_ALL');
    this.swipeManager.add(this.swipeEvent);
    this.swipeManager.on('swipe', this.onSwipePress);
  }

  componentWillUnmount() {
    const { menuNode } = this.state;

    menuNode.removeEventListener('mousewheel', event =>
      this.mouseWheelHandler(event)
    );
    menuNode.removeEventListener('DOMMouseScroll', event =>
      this.mouseWheelHandler(event)
    );

    this.swipeManager.off('swipe', this.onSwipePress);
  }

  onClickLettersHandler() {
    const { onClickLetters, desactiveOverMenuLettersHandler } = this.props;
    const menuCover = document.querySelector('.menu_cover');
    const menuLogo = document.querySelector('.menuCharacters_logo.active');

    desactiveOverMenuLettersHandler();
    menuLogo.classList.remove('active');

    outMenu(menuCover, onClickLetters);
  }

  onSwipePress(e) {
    const { isActiveOverMenuLetters } = this.props;
    const { onSwipe } = this.state;

    if (onSwipe || !isActiveOverMenuLetters) return;

    this.setState({
      onSwipe: true,
      delayOnSwipe: setTimeout(() => this.changeMenuBySwipe(e), 1000)
    });
  }

  changeMenuBySwipe(e) {
    const { delayOnSwipe } = this.state;
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

    if (e.direction === 2) {
      setDirectionInHandler('right');
      setDirectionOutHandler('left');
      setActiveSuperheroHandler(superheroData, 'prev');
    }

    if (e.direction === 4) {
      setDirectionInHandler('left');
      setDirectionOutHandler('right');
      setActiveSuperheroHandler(superheroData, 'next');
    }

    clearTimeout(delayOnSwipe);

    this.setState({
      onSwipe: false
    });
  }

  changeMenuByMouseWheel(e) {
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
      delayOnMouseWheel: setTimeout(() => this.changeMenuByMouseWheel(e), 1000)
    });
  }

  changeMenuBySideDrawer(counterItem) {
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

    if (counterItem > counterActivateSuperhero) {
      setDirectionInHandler('left');
      setDirectionOutHandler('right');
    } else {
      setDirectionInHandler('right');
      setDirectionOutHandler('left');
    }

    setActiveSuperheroHandler(superheroData, counterItem);
  }

  render() {
    const { superheroesList, counterActivateSuperhero } = this.props;
    const superheroClass = superheroesList[counterActivateSuperhero].class;
    const menuCoverClasses = ['menu_cover', `${superheroClass}`];

    return (
      <div className="menu_container">
        <LettersWrapper
          list={superheroesList}
          onClick={this.onClickLettersHandler}
        />
        <LogoWrapper list={superheroesList} />
        <BackgroundWrapper list={superheroesList} />
        <SideDrawer
          list={superheroesList}
          onClickSideDrawerItem={this.changeMenuBySideDrawer}
        />
        <Footer />
        <div className={menuCoverClasses.join(' ')} />
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
  /* setSuperheroActiveCounterHandler: list =>
    dispatch(setSuperheroActiveCounter(list)), */
  setActiveSuperheroHandler: (data, selected) =>
    dispatch(setActiveSuperhero(data, selected)),
  setDirectionInHandler: direction => dispatch(setDirectionIn(direction)),
  setDirectionOutHandler: direction => dispatch(setDirectionOut(direction)),
  desactiveOverMenuLettersHandler: () => dispatch(desactiveOverMenuLetters())
});

Menu.propTypes = {
  superheroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  counterActivateSuperhero: PropTypes.number.isRequired,
  isActiveOverMenuLetters: PropTypes.bool.isRequired,
  // setSuperheroActiveCounterHandler: PropTypes.func.isRequired,
  setActiveSuperheroHandler: PropTypes.func.isRequired,
  setDirectionInHandler: PropTypes.func.isRequired,
  setDirectionOutHandler: PropTypes.func.isRequired,
  desactiveOverMenuLettersHandler: PropTypes.func.isRequired,
  onClickLetters: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
