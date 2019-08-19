import React from 'react';

/** Components */
import Sidedrawer from './Sidedrawer';
import Bg from './Bg';
import Letters from './Letters';

/* Reducer */
import { reducer, initialState } from '../../store/reducer';

/* Actions */
import { setActiveSuperhero } from '../../store/actions';

const Menu = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { superheroes, menuDirection } = state;

  const menuRef = React.useRef(null);
  const sidedrawerListRef = React.useRef(null);
  const bgListRef = React.useRef(null);
  const lettersListRef = React.useRef(null);
  const swipeManagerRef = React.useRef(null);
  const swipeEventRef = React.useRef(null);

  const [highlightBg, setHighlightBg] = React.useState(false);

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

  const getIndex = React.useCallback(factor => {
    const activeIndex = superheroes.findIndex(item => item.active);
    const maxIndex = superheroes.lenght - 1;

    if (activeIndex < 0) {
      return maxIndex;
    }
    if (activeIndex > maxIndex) {
      return 0;
    }
    return activeIndex + factor;
  });

  const mouseWheelHandler = React.useCallback(e => {
    if (e.deltaY > 0) {
      setActiveSuperhero(dispatch, superheroes, getIndex(-1));
    } else {
      setActiveSuperhero(dispatch, superheroes, getIndex(1));
    }
  });

  const onSwipePress = React.useCallback(e => {
    if (e.direction === 2) {
      console.log('prev');
      setActiveSuperhero(dispatch, superheroes, getIndex(-1));
    }

    if (e.direction === 4) {
      console.log('next');
      setActiveSuperhero(dispatch, superheroes, getIndex(1));
    }
  });

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

  return (
    <div ref={menuRef} className="menu">
      <Sidedrawer
        list={sidedrawerListRef.current}
        onClickItem={indexItem =>
          setActiveSuperhero(dispatch, superheroes, indexItem)
        }
      />
      <Bg list={bgListRef.current} highlightBg={highlightBg} />
      <Letters
        list={lettersListRef.current}
        menuDirection={menuDirection}
        overLetters={isOver => setHighlightBg(isOver)}
      />
    </div>
  );
};

export default Menu;
