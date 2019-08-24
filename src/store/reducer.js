import * as actionTypes from './actionTypes';

/** Utils */
import {
  SupermanIcon,
  BatmanIcon,
  WonderWomanIcon,
  FlashIcon,
  GreenLanternIcon,
  GreenArrowIcon,
  AquamanIcon,
  CyborgIcon
} from '../utils/svgs';

export const initialState = {
  superheroes: [
    {
      alias: 'Superman',
      name: 'Clark Kent',
      description:
        'Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.',
      class: 'superman',
      active: true,
      breakpoint: 4,
      index: 0,
      icon: SupermanIcon,
      iconMeasures: {
        width: '32px',
        height: '24px'
      }
    },
    {
      alias: 'Batman',
      name: 'Bruce Wayne',
      description:
        'In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.',
      class: 'batman',
      active: false,
      breakpoint: 2,
      index: 1,
      icon: BatmanIcon,
      iconMeasures: {
        width: '40px',
        height: '14px'
      }
    },
    {
      alias: 'WonderWoman',
      name: 'Diana Prince',
      description:
        'Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man´s World.',
      class: 'wonderwoman',
      active: false,
      breakpoint: 5,
      index: 2,
      icon: WonderWomanIcon,
      iconMeasures: {
        width: '40px',
        height: '19px'
      }
    },
    {
      alias: 'TheFlash',
      name: 'Barry Allen',
      description:
        'Three men have held the title of "The Fastest Man Alive"—Jay Garrick, Barry Allen and Wally West. Each of them redefined the word "hero."',
      class: 'flash',
      active: false,
      breakpoint: 3,
      index: 3,
      icon: FlashIcon,
      iconMeasures: {
        width: '24px',
        height: '33px'
      }
    },
    {
      alias: 'GreenLantern',
      name: 'Hal Jordan',
      description:
        'Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.',
      class: 'greenlantern',
      active: false,
      breakpoint: 5,
      index: 4,
      icon: GreenLanternIcon,
      iconMeasures: {
        width: '26px',
        height: '26px'
      }
    },
    {
      alias: 'Aquaman',
      name: 'Arthur Curry',
      description:
        'The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea.',
      class: 'aquaman',
      active: false,
      breakpoint: 3,
      index: 5,
      icon: AquamanIcon,
      iconMeasures: {
        width: '24px',
        height: '28px'
      }
    },
    {
      alias: 'GreenArrow',
      name: 'Oliver Queen',
      description:
        'What was the last thing you took home from an island getaway? A tacky souvenir? A great tan? More boring slideshows than you have friends to show?',
      class: 'greenarrow',
      active: false,
      breakpoint: 5,
      index: 6,
      icon: GreenArrowIcon,
      iconMeasures: {
        width: '26px',
        height: '26px'
      }
    },
    {
      alias: 'Cyborg',
      name: 'Victor Stone',
      description:
        'Part man, part machine, Vic Stone is a former member of the Teen Titans and a current member of the Justice League who wrestles to preserve his humanity with every new upgrade.',
      class: 'cyborg',
      active: false,
      breakpoint: 2,
      index: 7,
      icon: CyborgIcon,
      iconMeasures: {
        width: '26px',
        height: '26px'
      }
    }
  ],
  menuDirection: {
    inHero: '',
    outHero: ''
  }
};

export const reducer = (state = initialState, action) => {
  const { superheroes, menuDirection } = action;

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
    default:
      return state;
  }
};
