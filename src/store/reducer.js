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
  superheroesList: [
    {
      alias: 'Superman',
      name: 'Clark Kent',
      description:
        'Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.',
      class: 'superman',
      active: false,
      breakpointCharacter: 4,
      counterValue: 0,
      icon: SupermanIcon
    },
    {
      alias: 'Batman',
      name: 'Bruce Wayne',
      description:
        'In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.',
      class: 'batman',
      active: false,
      breakpointCharacter: 2,
      counterValue: 1,
      icon: BatmanIcon
    },
    {
      alias: 'WonderWoman',
      name: 'Diana Prince',
      description:
        'Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man´s World.',
      class: 'wonderwoman',
      active: false,
      breakpointCharacter: 5,
      counterValue: 2,
      icon: WonderWomanIcon
    },
    {
      alias: 'TheFlash',
      name: 'Barry Allen',
      description:
        'Three men have held the title of "The Fastest Man Alive"—Jay Garrick, Barry Allen and Wally West. Each of them redefined the word "hero."',
      class: 'flash',
      active: false,
      breakpointCharacter: 3,
      counterValue: 3,
      icon: FlashIcon
    },
    {
      alias: 'GreenLantern',
      name: 'Hal Jordan',
      description:
        'Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.',
      class: 'greenlantern',
      active: false,
      breakpointCharacter: 5,
      counterValue: 4,
      icon: GreenLanternIcon
    },
    {
      alias: 'GreenArrow',
      name: 'Oliver Queen',
      description:
        'What was the last thing you took home from an island getaway? A tacky souvenir? A great tan? More boring slideshows than you have friends to show?',
      class: 'greenarrow',
      active: false,
      breakpointCharacter: 5,
      counterValue: 5,
      icon: GreenArrowIcon
    },
    {
      alias: 'Aquaman',
      name: 'Arthur Curry',
      description:
        'The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea.',
      class: 'aquaman',
      active: false,
      breakpointCharacter: 3,
      counterValue: 6,
      icon: AquamanIcon
    },
    {
      alias: 'Cyborg',
      name: 'Victor Stone',
      description:
        'Part man, part machine, Vic Stone is a former member of the Teen Titans and a current member of the Justice League who wrestles to preserve his humanity with every new upgrade.',
      class: 'cyborg',
      active: false,
      breakpointCharacter: 2,
      counterValue: 7,
      icon: CyborgIcon
    }
  ],

  counterActivateSuperhero: 0
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.RESET_ACTIVE_SUPERHERO_MENU: {
      return {
        ...state,
        superheroesList: action.superheroesList
      };
    }
    default:
      return state;
  }
};
