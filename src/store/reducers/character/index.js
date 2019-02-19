import * as actionTypes from '../../actionTypes';
import {
  supermanImgPath,
  supermanThumb1Path,
  supermanThumb2Path,
  supermanThumb3Path,
  supermanThumb4Path,
  batmanImgPath,
  batmanThumb1Path,
  batmanThumb2Path,
  batmanThumb3Path,
  batmanThumb4Path,
  wonderWomanImgPath,
  wonderWomanThumb1Path,
  wonderWomanThumb2Path,
  wonderWomanThumb3Path,
  wonderWomanThumb4Path,
  flashImgPath,
  flashThumb1Path,
  flashThumb2Path,
  flashThumb3Path,
  flashThumb4Path,
  greenLanternImgPath,
  greenLanternThumb1Path,
  greenLanternThumb2Path,
  greenLanternThumb3Path,
  greenLanternThumb4Path,
  greenArrowImgPath,
  greenArrowThumb1Path,
  greenArrowThumb2Path,
  greenArrowThumb3Path,
  greenArrowThumb4Path,
  aquamanImgPath,
  aquamanThumb1Path,
  aquamanThumb2Path,
  aquamanThumb3Path,
  aquamanThumb4Path,
  cyborgImgPath,
  cyborgThumb1Path,
  cyborgThumb2Path,
  cyborgThumb3Path,
  cyborgThumb4Path
} from '../../../utils/imgPaths';

const initialState = {
  characterList: [
    {
      class: 'superman_int',
      active: false,
      id: 'uu7sgre65',
      alias: 'Superman',
      name: 'Clark Kent',
      description:
        'Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.',
      imgPath: supermanImgPath,
      thumbPath1: supermanThumb1Path,
      thumbPath2: supermanThumb2Path,
      thumbPath3: supermanThumb3Path,
      thumbPath4: supermanThumb4Path
    },
    {
      class: 'batman_int',
      active: false,
      id: 'afsdfas437',
      alias: 'Batman',
      name: 'Bruce Wayne',
      description:
        'In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.',
      imgPath: batmanImgPath,
      thumbPath1: batmanThumb1Path,
      thumbPath2: batmanThumb2Path,
      thumbPath3: batmanThumb3Path,
      thumbPath4: batmanThumb4Path
    },
    {
      class: 'wonderwoman_int',
      active: false,
      id: 's78asdfas',
      alias: 'WonderWoman',
      name: 'Diana Prince',
      description:
        'Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man´s World.',
      imgPath: wonderWomanImgPath,
      thumbPath1: wonderWomanThumb1Path,
      thumbPath2: wonderWomanThumb2Path,
      thumbPath3: wonderWomanThumb3Path,
      thumbPath4: wonderWomanThumb4Path
    },
    {
      class: 'flash_int',
      active: false,
      id: 'ppd4325fas',
      alias: 'TheFlash',
      name: 'Barry Allen',
      description:
        'Three men have held the title of "The Fastest Man Alive"—Jay Garrick, Barry Allen and Wally West. Each of them redefined the word "hero."',
      imgPath: flashImgPath,
      thumbPath1: flashThumb1Path,
      thumbPath2: flashThumb2Path,
      thumbPath3: flashThumb3Path,
      thumbPath4: flashThumb4Path
    },
    {
      class: 'greenlantern_int',
      active: false,
      id: 'fghjt567',
      alias: 'GreenLantern',
      name: 'Hal Jordan',
      description:
        'Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.',
      imgPath: greenLanternImgPath,
      thumbPath1: greenLanternThumb1Path,
      thumbPath2: greenLanternThumb2Path,
      thumbPath3: greenLanternThumb3Path,
      thumbPath4: greenLanternThumb4Path
    },
    {
      class: 'greenarrow_int',
      active: false,
      id: 'vav5563445',
      alias: 'GreenArrow',
      name: 'Oliver Queen',
      description:
        'What was the last thing you took home from an island getaway? A tacky souvenir? A great tan? More boring slideshows than you have friends to show?',
      imgPath: greenArrowImgPath,
      thumbPath1: greenArrowThumb1Path,
      thumbPath2: greenArrowThumb2Path,
      thumbPath3: greenArrowThumb3Path,
      thumbPath4: greenArrowThumb4Path
    },
    {
      class: 'aquaman_int',
      active: false,
      id: 'kfgu6sdf5',
      alias: 'Aquaman',
      name: 'Arthur Curry',
      description:
        'The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea.',
      imgPath: aquamanImgPath,
      thumbPath1: aquamanThumb1Path,
      thumbPath2: aquamanThumb2Path,
      thumbPath3: aquamanThumb3Path,
      thumbPath4: aquamanThumb4Path
    },
    {
      class: 'cyborg_int',
      active: false,
      id: 'sfas845gf',
      alias: 'Cyborg',
      name: 'Victor Stone',
      description:
        'Part man, part machine, Vic Stone is a former member of the Teen Titans and a current member of the Justice League who wrestles to preserve his humanity with every new upgrade.',
      imgPath: cyborgImgPath,
      thumbPath1: cyborgThumb1Path,
      thumbPath2: cyborgThumb2Path,
      thumbPath3: cyborgThumb3Path,
      thumbPath4: cyborgThumb4Path
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_SUPERHERO_MENU: {
      return {
        ...state,
        superheroesList: action.superheroesList
      };
    }

    default:
      return state;
  }
};

export default reducer;
