import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Sidedrawer from './Sidedrawer';
import Bg from './Bg';
import Letters from './Letters';
import Logo from './Logo';

/* Reducer */
import { reducer, initialState } from '../../store/reducer';

/* Actions */
import { setActiveSuperhero, setMenuDirection } from '../../store/actions';

const Menu = ({ goCharacter }) => {
  // Reducers
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { superheroes, menuDirection } = state;

  // Refs
  const menuRef = React.useRef(null);
  const menuDirectionRef = React.useRef(null);
  const swipeManagerRef = React.useRef(null);
  const swipeEventRef = React.useRef(null);
  const activeIndexRef = React.useRef(null);
  const allowWheelRef = React.useRef(null);
  const allowSwipeRef = React.useRef(null);
  const allowSidedrawerItemClickRef = React.useRef(null);

  // States
  const [highlightBg, setHighlightBg] = React.useState(false);
  const [coverClasses, setCoverClasses] = React.useState(['cover']);
  const [outLogo, setOutLogo] = React.useState(false);

  // Utils
  const maxIndex = superheroes.length - 1;

  const getActiveIndex = React.useCallback(() =>
    superheroes.findIndex(item => item.active)
  );

  const getNextIndex = React.useCallback(factor => {
    const indexSelected = activeIndexRef.current + factor;

    if (indexSelected < 0) {
      return maxIndex;
    }
    if (indexSelected > maxIndex) {
      return 0;
    }
    return indexSelected;
  });

  const setMenuDirectionFromSidedrawer = React.useCallback(index => {
    const currentIndex = superheroes.find(item => item.active).index;
    const menuDirection =
      index > currentIndex
        ? { inHero: 'left', outHero: 'right' }
        : { inHero: 'right', outHero: 'left' };

    setMenuDirection(dispatch, menuDirection);
  });

  // Refs settings
  menuDirectionRef.current = menuDirection;
  activeIndexRef.current = getActiveIndex();

  // Handlers
  const mouseWheelHandler = React.useCallback(e => {
    if (allowWheelRef.current) {
      if (e.deltaY > 0) {
        setMenuDirection(dispatch, { inHero: 'left', outHero: 'right' });
        setActiveSuperhero(dispatch, superheroes, getNextIndex(1));
        allowWheelRef.current = false;
      }
      if (e.deltaY < 0) {
        setMenuDirection(dispatch, { inHero: 'right', outHero: 'left' });
        setActiveSuperhero(dispatch, superheroes, getNextIndex(-1));
        allowWheelRef.current = false;
      }
    }
  });

  const swipeHandler = React.useCallback(e => {
    if (allowSwipeRef.current) {
      if (e.direction === 2) {
        setMenuDirection(dispatch, { inHero: 'right', outHero: 'left' });
        setActiveSuperhero(dispatch, superheroes, getNextIndex(-1));
        allowSwipeRef.current = false;
      }
      if (e.direction === 4) {
        setMenuDirection(dispatch, { inHero: 'left', outHero: 'right' });
        setActiveSuperhero(dispatch, superheroes, getNextIndex(1));
        allowSwipeRef.current = false;
      }
    }
  });

  const sidedrawerItemClickHandler = React.useCallback(index => {
    if (allowSidedrawerItemClickRef.current) {
      setMenuDirectionFromSidedrawer(index);
      setActiveSuperhero(dispatch, superheroes, index);
      allowSidedrawerItemClickRef.current = false;
    }
  });

  // UseEffects
  React.useEffect(() => {
    menuRef.current.addEventListener('mousewheel', e => mouseWheelHandler(e));
    menuRef.current.addEventListener('DOMMouseScroll', e =>
      mouseWheelHandler(e)
    );

    swipeManagerRef.current = new Hammer.Manager(menuRef.current);
    swipeEventRef.current = new Hammer.Swipe('DIRECTION_ALL');
    swipeManagerRef.current.add(swipeEventRef.current);
    swipeManagerRef.current.on('swipe', swipeHandler);

    return () => {
      menuRef.current.removeEventListener('mousewheel', event =>
        mouseWheelHandler(event)
      );
      menuRef.current.removeEventListener('DOMMouseScroll', event =>
        mouseWheelHandler(event)
      );
      swipeManagerRef.current.off('swipe', swipeHandler);
    };
  }, []);

  React.useEffect(() => {
    activeIndexRef.current = superheroes.findIndex(item => item.active);
  }, [superheroes]);

  React.useEffect(() => {
    menuDirectionRef.current = menuDirection;
  }, [menuDirection]);

  return (
    <div ref={menuRef} className="menu">
      <Sidedrawer
        superheroes={superheroes}
        onClickItem={indexItem => sidedrawerItemClickHandler(indexItem)}
      />
      <Bg superheroes={superheroes} highlightBg={highlightBg} />
      <Letters
        superheroes={superheroes}
        menuDirection={menuDirectionRef.current}
        overLetters={isOver => setHighlightBg(isOver)}
        endLettersAnimation={() => {
          allowWheelRef.current = true;
          allowSwipeRef.current = true;
          allowSidedrawerItemClickRef.current = true;
        }}
        onClick={superheroClass => {
          setCoverClasses([...coverClasses, superheroClass]);
          setOutLogo(true);
          setTimeout(() => {
            goCharacter(superheroClass);
          }, 1000);
        }}
      />
      <Logo
        superheroes={superheroes}
        highlightBg={highlightBg}
        outLogo={outLogo}
      />
      <div className={coverClasses.join(' ')} />
    </div>
  );
};

Menu.propTypes = {
  goCharacter: PropTypes.func
};

export default Menu;
