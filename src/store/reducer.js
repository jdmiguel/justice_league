import * as actionTypes from './actionTypes';

/** Assets */
import {
  supermanImgPath,
  batmanImgPath,
  wonderWomanImgPath,
  flashImgPath,
  greenLanternImgPath,
  aquamanImgPath,
  greenArrowImgPath,
  cyborgImgPath
} from '../utils/imgPaths';

/** Utils */
import {
  SupermanIcon,
  BatmanIcon,
  WonderWomanIcon,
  FlashIcon,
  GreenLanternIcon,
  AquamanIcon,
  GreenArrowIcon,
  CyborgIcon
} from '../utils/svgs';

export const initialState = {
  superheroes: [
    {
      alias: 'Superman',
      name: 'Clark Kent',
      intro:
        'Rocketed to Earth as an infant from the doomed planet Krypton, Kal-El was adopted by the loving Kent family and raised in America´s heartland as Clark Kent. Using his immense solar-fueled powers, he became Superman to defend mankind against all manner of threats while championing truth, justice and the American way!',
      class: 'superman',
      active: true,
      breakpoint: 4,
      index: 0,
      icon: SupermanIcon,
      characterImg: supermanImgPath,
      iconMeasures: {
        width: '32px',
        height: '24px'
      }
    },
    {
      alias: 'Batman',
      name: 'Bruce Wayne',
      intro:
        'In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.',
      class: 'batman',
      active: false,
      breakpoint: 2,
      index: 1,
      icon: BatmanIcon,
      characterImg: batmanImgPath,
      iconMeasures: {
        width: '40px',
        height: '14px'
      }
    },
    {
      alias: 'WonderWoman',
      name: 'Diana Prince',
      intro:
        'Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man´s World.',
      class: 'wonderwoman',
      active: false,
      breakpoint: 5,
      index: 2,
      icon: WonderWomanIcon,
      characterImg: wonderWomanImgPath,
      iconMeasures: {
        width: '40px',
        height: '19px'
      }
    },
    {
      alias: 'TheFlash',
      name: 'Barry Allen',
      intro:
        'Three men have held the title of "The Fastest Man Alive"—Jay Garrick, Barry Allen and Wally West. Each of them redefined the word "hero."',
      class: 'flash',
      active: false,
      breakpoint: 3,
      index: 3,
      icon: FlashIcon,
      characterImg: flashImgPath,
      iconMeasures: {
        width: '24px',
        height: '33px'
      }
    },
    {
      alias: 'GreenLantern',
      name: 'Hal Jordan',
      intro:
        'Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.',
      class: 'greenlantern',
      active: false,
      breakpoint: 5,
      index: 4,
      icon: GreenLanternIcon,
      characterImg: greenLanternImgPath,
      iconMeasures: {
        width: '26px',
        height: '26px'
      }
    },
    {
      alias: 'Aquaman',
      name: 'Arthur Curry',
      intro:
        'The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea.',
      class: 'aquaman',
      active: false,
      breakpoint: 3,
      index: 5,
      icon: AquamanIcon,
      characterImg: aquamanImgPath,
      iconMeasures: {
        width: '24px',
        height: '28px'
      }
    },
    {
      alias: 'GreenArrow',
      name: 'Oliver Queen',
      intro:
        'What was the last thing you took home from an island getaway? A tacky souvenir? A great tan? More boring slideshows than you have friends to show?',
      class: 'greenarrow',
      active: false,
      breakpoint: 5,
      index: 6,
      icon: GreenArrowIcon,
      characterImg: greenArrowImgPath,
      iconMeasures: {
        width: '26px',
        height: '26px'
      }
    },
    {
      alias: 'Cyborg',
      name: 'Victor Stone',
      intro:
        'Part man, part machine, Vic Stone is a former member of the Teen Titans and a current member of the Justice League who wrestles to preserve his humanity with every new upgrade.',
      class: 'cyborg',
      active: false,
      breakpoint: 2,
      index: 7,
      icon: CyborgIcon,
      characterImg: cyborgImgPath,
      iconMeasures: {
        width: '26px',
        height: '26px'
      }
    }
  ],
  menuDirection: {
    inHero: '',
    outHero: ''
  },
  tabs: [
    { txt: 'Intro', id: 'introTab', active: true },
    { txt: 'Data sheet', id: 'dataTab', active: false },
    { txt: 'Powers', id: 'powersTab', active: false }
  ]
};

export const reducer = (state = initialState, action) => {
  const { superheroes, menuDirection, tabs } = action;

  switch (action.type) {
    case actionTypes.SET_ACTIVE_SUPERHERO:
      return {
        ...state,
        superheroes
      };
    case actionTypes.SET_MENU_DIRECTION:
      return {
        ...state,
        menuDirection
      };
    case actionTypes.SET_ACTIVE_TAB:
      return {
        ...state,
        tabs
      };
    default:
      return state;
  }
};
