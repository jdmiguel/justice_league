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
      dataSheet: {
        originConnections: {
          title: 'Origin / connections',
          data: [
            { title: 'Full name', text: 'Clark Kent' },
            { title: 'Place of birth', text: 'Krypton' },
            { title: 'Occupation', text: 'Reporter' },
            { title: 'Base', text: 'Metropolis' },
            { title: 'First appearance', text: 'Action Comics #1' }
          ]
        },
        appearance: {
          title: 'Appearance',
          data: [
            { title: 'Race', text: 'Kryptonian' },
            { title: 'Height', text: '6.3 / 191 cm' },
            { title: 'Weight', text: '225 lb / 101 kg' },
            { title: 'Eye color', text: 'Blue' },
            { title: 'Hair color', text: 'Black' }
          ]
        }
      },
      skills: {
        stats: {
          title: 'Ranked stats',
          data: [
            { title: 'Intelligence', value: 60 },
            { title: 'Strength', value: 100 },
            { title: 'Speed', value: 95 },
            { title: 'Power', value: 100 },
            { title: 'Combat', value: 50 }
          ]
        },
        powers: {
          title: 'powers',
          data: [
            'Super strength',
            'Flight',
            'Invulnerability',
            'Vision - X-Ray',
            'Vision - Heat'
          ]
        }
      },
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
      alias: 'The dark night',
      class: 'batman',
      intro:
        'Bruce Wayne, who witnessed the murder of his billionaire parents as a child, swore to avenge their deaths. He trained extensively to achieve mental and physical perfection, mastering martial arts, detective skills, and criminal psychology. Costumed as a bat to prey on the fears of criminals, and utilizing a high-tech arsenal, he became the legendary batman.',
      dataSheet: {
        originConnections: {
          title: 'Origin / connections',
          data: [
            { title: 'Full name', text: 'Bruce Wayne' },
            { title: 'Place of birth', text: 'Gotham City' },
            {
              title: 'Occupation',
              text: 'Businessman'
            },
            { title: 'Base', text: 'Gotham City' },
            { title: 'First appearance', text: 'Detective Comics #27' }
          ]
        },
        appearance: {
          title: 'Appearance',
          data: [
            { title: 'Race', text: 'Human' },
            { title: 'Height', text: '6.2 / 188 cm' },
            { title: 'Weight', text: '210 lb / 95 kg' },
            { title: 'Eye color', text: 'Blue' },
            { title: 'Hair color', text: 'Black' }
          ]
        }
      },
      skills: {
        stats: {
          title: 'Ranked stats',
          data: [
            { title: 'Intelligence', value: 100 },
            { title: 'Strength', value: 10 },
            { title: 'Speed', value: 10 },
            { title: 'Power', value: 30 },
            { title: 'Combat', value: 100 }
          ]
        },
        powers: {
          title: 'powers',
          data: [
            'Gadgets',
            'Detective skills',
            'Agility',
            'Reflexes',
            'Fear creation'
          ]
        }
      },
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
      alias: 'Princess of the Amazons',
      intro:
        'Armed with superpowers of a god, Wonder Woman is one of Earth´s most powerful defenders of peace, justice, and equality and a member of the Justice League. Her original origin allegorically depicted her as a clay figure brought to life by the gods, but in recent years she has been depicted more literally as the daughter of Zeus and the Amazon queen Hippolyta.',
      class: 'wonderwoman',
      dataSheet: {
        originConnections: {
          title: 'Origin / connections',
          data: [
            { title: 'Full name', text: 'Diana Prince' },
            { title: 'Place of birth', text: 'Themyscira' },
            {
              title: 'Occupation',
              text: 'Adventurer'
            },
            { title: 'Base', text: 'Paradise Island' },
            { title: 'First appearance', text: 'All-Star Comics #8' }
          ]
        },
        appearance: {
          title: 'Appearance',
          data: [
            { title: 'Race', text: 'Amazon' },
            { title: 'Height', text: '6.0 / 183 cm' },
            { title: 'Weight', text: '165 lb / 74 kg' },
            { title: 'Eye color', text: 'Blue' },
            { title: 'Hair color', text: 'Black' }
          ]
        }
      },
      skills: {
        stats: {
          title: 'Ranked stats',
          data: [
            { title: 'Intelligence', value: 70 },
            { title: 'Strength', value: 95 },
            { title: 'Speed', value: 90 },
            { title: 'Power', value: 95 },
            { title: 'Combat', value: 70 }
          ]
        },
        powers: {
          title: 'powers',
          data: [
            'Super healing',
            'Super strength',
            'Flight',
            'Invulnerability to fire',
            'Telepathy'
          ]
        }
      },
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
      alias: 'the Fastest Man Alive',
      intro:
        'Having discovered his mother murdered and his father blamed for the act, forensic scientist Barry Allen sought to clear his father´s alias and find the real killer. After being doused in chemicals and struck by lightning, Barry was granted the gift of super-speed. Nowadays he protects his hometown of Central City as The Flash, the scarlet speedster.',
      class: 'flash',
      dataSheet: {
        originConnections: {
          title: 'Origin / connections',
          data: [
            { title: 'Full name', text: '	Barry Allen' },
            { title: 'Place of birth', text: 'Fallville, Iowa' },
            {
              title: 'Occupation',
              text: 'Forensic Scientist'
            },
            { title: 'Base', text: 'Central City' },
            { title: 'First appearance', text: 'Showcase #4' }
          ]
        },
        appearance: {
          title: 'Appearance',
          data: [
            { title: 'Race', text: 'Human' },
            { title: 'Height', text: '6.0 / 183 cm' },
            { title: 'Weight', text: '195 lb / 88 kg' },
            { title: 'Eye color', text: 'Blue' },
            { title: 'Hair color', text: 'Blond' }
          ]
        }
      },
      skills: {
        stats: {
          title: 'Ranked stats',
          data: [
            { title: 'Intelligence', value: 75 },
            { title: 'Strength', value: 35 },
            { title: 'Speed', value: 100 },
            { title: 'Power', value: 85 },
            { title: 'Combat', value: 50 }
          ]
        },
        powers: {
          title: 'powers',
          data: [
            'Super speed',
            'Super reflexes',
            'Accelerated healing',
            'Energy absorption',
            'Enhanced senses'
          ]
        }
      },
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
      alias: 'God of Light',
      intro:
        'With the ability to overcome great fear and harness the power of will, test-pilot Hal Jordan was chosen to be the Green Lantern of Sector 2814 inheriting the ring of the dying alien Green Lantern, Abin Sur. Through sheer will power and determination, Hal has established an impressive record of heroism across the galaxy with the help of his fellow Green Lanterns.',
      class: 'greenlantern',
      dataSheet: {
        originConnections: {
          title: 'Origin / connections',
          data: [
            { title: 'Full name', text: 'Hal Jordan' },
            { title: 'Place of birth', text: 'Coast City, California' },
            {
              title: 'Occupation',
              text: 'Air Force Pilot'
            },
            { title: 'Base', text: 'Oa Planet' },
            { title: 'First appearance', text: 'Showcase #22' }
          ]
        },
        appearance: {
          title: 'Appearance',
          data: [
            { title: 'Race', text: 'Human' },
            { title: 'Height', text: '6.2 / 188 cm' },
            { title: 'Weight', text: '200 lb / 90 kg' },
            { title: 'Eye color', text: 'Brown' },
            { title: 'Hair color', text: 'Brown' }
          ]
        }
      },
      skills: {
        stats: {
          title: 'Ranked stats',
          data: [
            { title: 'Intelligence', value: 55 },
            { title: 'Strength', value: 40 },
            { title: 'Speed', value: 50 },
            { title: 'Power', value: 100 },
            { title: 'Combat', value: 55 }
          ]
        },
        powers: {
          title: 'powers',
          data: [
            'Energy blasts',
            'Energy manipulation',
            'Psionic constructs',
            'Psionic powers',
            'Flight'
          ]
        }
      },
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
      alias: 'The King of the Seven Seas',
      intro:
        'The son of an Atlantean queen and a lighthouse keeper from the town of Amnesty Bay, Arthur Curry would grow up to become the superhero Aquaman, and later take on his birthright as the King of Atlantis. He is the bridge between the surface world and his tumultuous realm of the sea, in addition to being a notable founding member of the Justice League.',
      class: 'aquaman',
      dataSheet: {
        originConnections: {
          title: 'Origin / connections',
          data: [
            { title: 'Full name', text: 'Arthur Curry' },
            { title: 'Place of birth', text: 'Amnesty Bay, Massachusetts' },
            {
              title: 'Occupation',
              text: 'Adventurer'
            },
            { title: 'Base', text: 'Atlantis' },
            { title: 'First appearance', text: 'More Fun Comics #73' }
          ]
        },
        appearance: {
          title: 'Appearance',
          data: [
            { title: 'Race', text: 'Atlantean' },
            { title: 'Height', text: '6.1 / 185 cm' },
            { title: 'Weight', text: '325 lb / 146 kg' },
            { title: 'Eye color', text: 'Blue' },
            { title: 'Hair color', text: 'Blond' }
          ]
        }
      },
      skills: {
        stats: {
          title: 'Ranked stats',
          data: [
            { title: 'Intelligence', value: 60 },
            { title: 'Strength', value: 85 },
            { title: 'Speed', value: 65 },
            { title: 'Power', value: 75 },
            { title: 'Combat', value: 55 }
          ]
        },
        powers: {
          title: 'powers',
          data: [
            'Animal control',
            'Cold resistence',
            'Accelerated healing',
            'Super strength',
            'Enhanced senses'
          ]
        }
      },
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
      alias: 'The hood',
      intro:
        'Oliver Jonas "Ollie" Queen was a spoiled, thrill-seeking playboy, until he was left stranded on a deserted island for several years. There, he trained tirelessly to become a master archer and powerful fighter in order to survive. After his return home, he used his new-found skills and his wealth to became the costumed vigilante known as Green Arrow.',
      class: 'greenarrow',
      dataSheet: {
        originConnections: {
          title: 'Origin / connections',
          data: [
            { title: 'Full name', text: 'Oliver Queen' },
            { title: 'Place of birth', text: 'Starling City' },
            {
              title: 'Occupation',
              text: 'Businessman'
            },
            { title: 'Base', text: 'Star City' },
            { title: 'First appearance', text: 'Arrow Season 1' }
          ]
        },
        appearance: {
          title: 'Appearance',
          data: [
            { title: 'Race', text: 'Human' },
            { title: 'Height', text: '6.1 / 185 cm' },
            { title: 'Weight', text: '182 lb / 82 kg' },
            { title: 'Eye color', text: 'Blue' },
            { title: 'Hair color', text: 'Brown' }
          ]
        }
      },
      skills: {
        stats: {
          title: 'Ranked stats',
          data: [
            { title: 'Intelligence', value: 70 },
            { title: 'Strength', value: 8 },
            { title: 'Speed', value: 12 },
            { title: 'Power', value: 32 },
            { title: 'Combat', value: 95 }
          ]
        },
        powers: {
          title: 'powers',
          data: ['Perfect aim', 'Dexterity', 'Agility', 'Reflexes', 'Stamina']
        }
      },
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
      alias: 'Cyberion Technis',
      intro:
        'Half man, half machine - all hero! After a near fatal incident, Victor Stone was cybernetically enhanced by his father. He now possesses the ability to communicate, manipulate, and interface with nearly all forms of technology. As he is constantly upgrading, he promises to defend the future from any threat. He is also a founding member of the Justice League.',
      class: 'cyborg',
      dataSheet: {
        originConnections: {
          title: 'Origin / connections',
          data: [
            { title: 'Full name', text: 'Victor Stone' },
            { title: 'Place of birth', text: 'New York City, New York' },
            {
              title: 'Occupation',
              text: 'Adventurer'
            },
            { title: 'Base', text: 'San Francisco' },
            { title: 'First appearance', text: 'DC Comics Presents #26' }
          ]
        },
        appearance: {
          title: 'Appearance',
          data: [
            { title: 'Race', text: 'Cyborg' },
            { title: 'Height', text: '6.6 / 198 cm' },
            { title: 'Weight', text: '385 lb / 173 kg' },
            { title: 'Eye color', text: 'Brown' },
            { title: 'Hair color', text: 'Black' }
          ]
        }
      },
      skills: {
        stats: {
          title: 'Ranked stats',
          data: [
            { title: 'Intelligence', value: 55 },
            { title: 'Strength', value: 85 },
            { title: 'Speed', value: 30 },
            { title: 'Power', value: 60 },
            { title: 'Combat', value: 60 }
          ]
        },
        powers: {
          title: 'powers',
          data: [
            'Energy Blast',
            'Biokinesis',
            'Super strength',
            'Flight',
            'Shapeshifting'
          ]
        }
      },
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
    { txt: 'Skills', id: 'skillsTab', active: false }
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
