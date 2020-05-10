import React from 'react';
import PropTypes from 'prop-types';

/** Components */
import Sidedrawer from './Sidedrawer';
import Bg from './Bg';
import Letters from './Letters';
import Logo from './Logo';

/** Models */
import { superheroesModel, menuDirectionModel } from '../../utils/models';

const Menu = ({
  superheroes,
  setActiveSuperhero,
  menuDirection,
  setMenuDirection,
  goCharacter,
}) => {
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
    superheroes.findIndex(item => item.active),
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

    setMenuDirection(menuDirection);
  });

  // Refs settings
  menuDirectionRef.current = menuDirection;
  activeIndexRef.current = getActiveIndex();

  // Handlers
  const mouseWheelHandler = React.useCallback(e => {
    if (allowWheelRef.current) {
      if (e.deltaY > 0) {
        allowWheelRef.current = false;
        setMenuDirection({ inHero: 'left', outHero: 'right' });
        setActiveSuperhero(getNextIndex(1));
      }
      if (e.deltaY < 0) {
        allowWheelRef.current = false;
        setMenuDirection({ inHero: 'right', outHero: 'left' });
        setActiveSuperhero(getNextIndex(-1));
      }
    }
  });

  const swipeHandler = React.useCallback(e => {
    if (allowSwipeRef.current) {
      if (e.direction === 2) {
        allowSwipeRef.current = false;
        setMenuDirection({ inHero: 'right', outHero: 'left' });
        setActiveSuperhero(getNextIndex(-1));
      }
      if (e.direction === 4) {
        allowSwipeRef.current = false;
        setMenuDirection({ inHero: 'left', outHero: 'right' });
        setActiveSuperhero(getNextIndex(1));
      }
    }
  });

  const sidedrawerItemClickHandler = React.useCallback(index => {
    if (allowSidedrawerItemClickRef.current) {
      allowSidedrawerItemClickRef.current = false;
      setMenuDirectionFromSidedrawer(index);
      setActiveSuperhero(index);
    }
  });

  const onClickMenuLettersHandler = React.useCallback(superheroClass => {
    setCoverClasses([...coverClasses, superheroClass]);
    setOutLogo(true);
    setTimeout(() => {
      goCharacter(superheroes[getActiveIndex()]);
    }, 1000);
  });

  const endLettersAnimationHandler = React.useCallback(() => {
    allowWheelRef.current = true;
    allowSwipeRef.current = true;
    allowSidedrawerItemClickRef.current = true;
  });

  // UseEffects
  React.useEffect(() => {
    // MouseWheel Event
    menuRef.current.addEventListener('mousewheel', e => mouseWheelHandler(e));
    menuRef.current.addEventListener('DOMMouseScroll', e =>
      mouseWheelHandler(e),
    );

    // Swipe Event
    swipeManagerRef.current = new Hammer.Manager(menuRef.current);
    swipeEventRef.current = new Hammer.Swipe('DIRECTION_ALL');
    swipeManagerRef.current.add(swipeEventRef.current);
    swipeManagerRef.current.on('swipe', swipeHandler);

    return () => {
      menuRef.current.removeEventListener('mousewheel', event =>
        mouseWheelHandler(event),
      );
      menuRef.current.removeEventListener('DOMMouseScroll', event =>
        mouseWheelHandler(event),
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
      <div className="menu-texture">
        <div />
      </div>
      <Letters
        superheroes={superheroes}
        menuDirection={menuDirectionRef.current}
        overLetters={isOver => setHighlightBg(isOver)}
        endLettersAnimation={endLettersAnimationHandler}
        onClick={onClickMenuLettersHandler}
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
  superheroes: superheroesModel,
  setActiveSuperhero: PropTypes.func,
  menuDirection: menuDirectionModel,
  setMenuDirection: PropTypes.func,
  goCharacter: PropTypes.func,
};

export default Menu;
