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
      name: 'Superman',
      alias: 'The man of steel',
      class: 'superman',
      intro:
        'Faster than a speeding bullet, more powerful than a locomotive… Rocketed to Earth as an infant from the doomed planet Krypton, Kal-El was adopted by the loving Kent family and raised in America´s heartland as Clark Kent. Using his immense solar-fueled powers, he became Superman to defend mankind against all manner of threats while championing truth, justice and freedom.',
      dataSheet: [
        {
          section: 'Origin / connections',
          data: [
            { title: 'Full alias', text: 'Clark Joseph Kent (Kal-El)' },
            { title: 'Place of birth', text: 'Krypton' },
            {
              title: 'Occupation',
              text: 'Reporter for the Daily Planet and novelist'
            },
            { title: 'Base', text: 'Metropolis' },
            { title: 'First appearance', text: 'ACTION COMICS #1' }
          ]
        },
        {
          section: 'Appearance',
          data: [
            { title: 'Type / Race', text: 'Kryptonian' },
            { title: 'Height', text: '6.3 / 191 cm' },
            { title: 'Weight', text: '225 lb / 101 kg' },
            { title: 'Eye color', text: 'Blue' },
            { title: 'Hair color', text: 'Black' }
          ]
        }
      ],
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
      name: 'Batman',
      alias: 'Bruce Wayne',
      class: 'batman',
      intro:
        'Bruce Wayne, who witnessed the murder of his billionaire parents as a child, swore to avenge their deaths. He trained extensively to achieve several things such as mental and physical perfection, mastering martial arts, detective skills, and criminal psychology. Costumed as a bat to prey on the fears of criminals, and utilizing a high-tech arsenal, he became the legendary dark night.',
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
      name: 'WonderWoman',
      alias: 'Diana Prince',
      intro:
        'The princess of the Amazons, armed with superpowers of a god, Wonder Woman is one of Earth´s most powerful defenders of peace, justice, and equality and a member of the Justice League. Her original origin allegorically depicted her as a clay figure brought to life by the gods, but in recent years she has been depicted more literally as the daughter of Zeus and the Amazon queen Hippolyta.',
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
      name: 'TheFlash',
      alias: 'Barry Allen',
      intro:
        'Having discovered his mother murdered and his father blamed for the act, forensic scientist Barry Allen sought to clear his father´s alias and find the real killer. After being doused in chemicals and struck by lightning, Barry was granted the gift of super-speed. Now he protects his hometown of Central City as The Flash, the fastest man alive and founding member of the Justice League.',
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
      name: 'GreenLantern',
      alias: 'Hal Jordan',
      intro:
        'With the ability to overcome great fear and harness the power of will, test-pilot Hal Jordan was chosen to be the Green Lantern of Sector 2814 inheriting the ring of the dying alien Green Lantern, Abin Sur. Through sheer will power and determination, Hal has established an impressive record of heroism across the galaxy with the help of his fellow Green Lanterns as well as his peers in the Justice League.',
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
      name: 'Aquaman',
      alias: 'Arthur Curry',
      intro:
        'The son of an Atlantean queen and a lighthouse keeper from the town of Amnesty Bay, Arthur Curry would grow up to become the superhero Aquaman, and later take on his birthright as the King of Atlantis. He is the bridge between the surface world and his tumultuous realm of the sea. Furthermore, he is a founding member of the Justice League and is among DC Comics´ most recognized heroes.',
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
      name: 'GreenArrow',
      alias: 'Oliver Queen',
      intro:
        'Oliver Jonas "Ollie" Queen was a spoiled, thrill-seeking playboy, until he was left stranded on a deserted island for several years. There, he trained tirelessly to become a master archer and powerful fighter in order to survive in such wild and cruel scenario. After his return home, he used his new-found skills and his wealth to became the costumed vigilante known as Green Arrow.',
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
      name: 'Cyborg',
      alias: 'Victor Stone',
      intro:
        'Half man, half machine - all hero! After a near fatal incident, Victor Stone was cybernetically enhanced by his father. He now possesses the ability to communicate, manipulate, and interface with nearly all forms of technology. As he is constantly upgrading, he promises to defend the future from any threat. He is also a founding member of both, the Justice League and the Teen Titans.',
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
