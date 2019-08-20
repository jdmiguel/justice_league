import React from 'react';

/** Components */
import Sidedrawer from './Sidedrawer';
import Bg from './Bg';
import Letters from './Letters';

/* Reducer */
import { reducer, initialState } from '../../store/reducer';

/* Actions */
import { setActiveSuperhero, setMenuDirection } from '../../store/actions';

const Menu = () => {
  // Reducers
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { superheroes, menuDirection } = state;

  // Refs
  const menuRef = React.useRef(null);
  const menuDirectionRef = React.useRef(null);
  const sidedrawerListRef = React.useRef(null);
  const bgListRef = React.useRef(null);
  const lettersListRef = React.useRef(null);
  const swipeManagerRef = React.useRef(null);
  const swipeEventRef = React.useRef(null);
  const activeIndexRef = React.useRef(null);
  const allowWheelRef = React.useRef(null);
  const allowSwipeRef = React.useRef(null);

  // States
  const [highlightBg, setHighlightBg] = React.useState(false);

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

  // Refs settings
  menuDirectionRef.current = menuDirection;
  activeIndexRef.current = getActiveIndex();

  sidedrawerListRef.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active,
    index: item.index,
    icon: item.icon,
    iconMeasures: item.iconMeasures
  }));

  bgListRef.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active
  }));

  lettersListRef.current = superheroes.map(item => ({
    alias: item.alias,
    class: item.class,
    active: item.active,
    breakpoint: item.breakpoint
  }));

  // Handlers
  const setMenuDirectionHandler = React.useCallback(index => {
    const currentIndex = superheroes.find(item => item.active).index;
    const menuDirection =
      index > currentIndex
        ? { inHero: 'left', outHero: 'right' }
        : { inHero: 'right', outHero: 'left' };

    setMenuDirection(dispatch, menuDirection);
  });

  const mouseWheelHandler = React.useCallback(e => {
    if (allowWheelRef.current) {
      if (e.deltaY > 0) {
        setMenuDirection(dispatch, { inHero: 'right', outHero: 'left' });
        setActiveSuperhero(dispatch, superheroes, getNextIndex(-1));
      } else {
        setMenuDirection(dispatch, { inHero: 'left', outHero: 'right' });
        setActiveSuperhero(dispatch, superheroes, getNextIndex(1));
      }
      allowWheelRef.current = false;
    }
  });

  const onSwipePress = React.useCallback(e => {
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

  // UseEffects
  React.useEffect(() => {
    menuRef.current.addEventListener('mousewheel', e => mouseWheelHandler(e));
    menuRef.current.addEventListener('DOMMouseScroll', e =>
      mouseWheelHandler(e)
    );

    swipeManagerRef.current = new Hammer.Manager(menuRef.current);
    swipeEventRef.current = new Hammer.Swipe('DIRECTION_ALL');
    swipeManagerRef.current.add(swipeEventRef.current);
    swipeManagerRef.current.on('swipe', onSwipePress);

    return () => {
      menuRef.current.removeEventListener('mousewheel', event =>
        mouseWheelHandler(event)
      );
      menuRef.current.removeEventListener('DOMMouseScroll', event =>
        mouseWheelHandler(event)
      );
      swipeManagerRef.current.off('swipe', onSwipePress);
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
        list={sidedrawerListRef.current}
        onClickItem={indexItem => {
          setMenuDirectionHandler(indexItem);
          setActiveSuperhero(dispatch, superheroes, indexItem);
        }}
      />
      <Bg list={bgListRef.current} highlightBg={highlightBg} />
      <Letters
        list={lettersListRef.current}
        menuDirection={menuDirectionRef.current}
        overLetters={isOver => setHighlightBg(isOver)}
        endLettersAnimation={() => {
          allowWheelRef.current = true;
          allowSwipeRef.current = true;
        }}
      />
    </div>
  );
};

export default Menu;
