import * as actionTypes from '../../actionTypes';
import supermanImgPath from '../../../../assets/img/character_superman.png';
import supermanThumbPath1 from '../../../../assets/img/character_superman_thumb_1.jpg';
import supermanThumbPath2 from '../../../../assets/img/character_superman_thumb_2.jpg';
import supermanThumbPath3 from '../../../../assets/img/character_superman_thumb_3.jpg';
import supermanThumbPath4 from '../../../../assets/img/character_superman_thumb_4.jpg';
import batmanImgPath from '../../../../assets/img/character_batman.png';
import batmanThumbPath1 from '../../../../assets/img/character_batman_thumb_1.jpg';
import batmanThumbPath2 from '../../../../assets/img/character_batman_thumb_2.jpg';
import batmanThumbPath3 from '../../../../assets/img/character_batman_thumb_3.jpg';
import batmanThumbPath4 from '../../../../assets/img/character_batman_thumb_4.jpg';
import wonderwomanImgPath from '../../../../assets/img/character_wonderwoman.png';
import wonderwomanThumbPath1 from '../../../../assets/img/character_wonderwoman_thumb_1.jpg';
import wonderwomanThumbPath2 from '../../../../assets/img/character_wonderwoman_thumb_2.jpg';
import wonderwomanThumbPath3 from '../../../../assets/img/character_wonderwoman_thumb_3.jpg';
import wonderwomanThumbPath4 from '../../../../assets/img/character_wonderwoman_thumb_4.jpg';
import flashImgPath from '../../../../assets/img/character_flash.png';
import flashThumbPath1 from '../../../../assets/img/character_flash_thumb_1.jpg';
import flashThumbPath2 from '../../../../assets/img/character_flash_thumb_2.jpg';
import flashThumbPath3 from '../../../../assets/img/character_flash_thumb_3.jpg';
import flashThumbPath4 from '../../../../assets/img/character_flash_thumb_4.jpg';
import greenlanternImgPath from '../../../../assets/img/character_greenlantern.png';
import greenlanternThumbPath1 from '../../../../assets/img/character_greenlantern_thumb_1.jpg';
import greenlanternThumbPath2 from '../../../../assets/img/character_greenlantern_thumb_2.jpg';
import greenlanternThumbPath3 from '../../../../assets/img/character_greenlantern_thumb_3.jpg';
import greenlanternThumbPath4 from '../../../../assets/img/character_greenlantern_thumb_4.jpg';
import greenarrowImgPath from '../../../../assets/img/character_greenarrow.png';
import greenarrowThumbPath1 from '../../../../assets/img/character_greenarrow_thumb_1.jpg';
import greenarrowThumbPath2 from '../../../../assets/img/character_greenarrow_thumb_2.jpg';
import greenarrowThumbPath3 from '../../../../assets/img/character_greenarrow_thumb_3.jpg';
import greenarrowThumbPath4 from '../../../../assets/img/character_greenarrow_thumb_4.jpg';
import aquamanImgPath from '../../../../assets/img/character_aquaman.png';
import aquamanThumbPath1 from '../../../../assets/img/character_aquaman_thumb_1.jpg';
import aquamanThumbPath2 from '../../../../assets/img/character_aquaman_thumb_2.jpg';
import aquamanThumbPath3 from '../../../../assets/img/character_aquaman_thumb_3.jpg';
import aquamanThumbPath4 from '../../../../assets/img/character_aquaman_thumb_4.jpg';
import cyborgImgPath from '../../../../assets/img/character_cyborg.png';
import cyborgThumbPath1 from '../../../../assets/img/character_cyborg_thumb_1.jpg';
import cyborgThumbPath2 from '../../../../assets/img/character_cyborg_thumb_2.jpg';
import cyborgThumbPath3 from '../../../../assets/img/character_cyborg_thumb_3.jpg';
import cyborgThumbPath4 from '../../../../assets/img/character_cyborg_thumb_4.jpg';

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
      thumbPath1: supermanThumbPath1,
      thumbPath2: supermanThumbPath2,
      thumbPath3: supermanThumbPath3,
      thumbPath4: supermanThumbPath4
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
      thumbPath1: batmanThumbPath1,
      thumbPath2: batmanThumbPath2,
      thumbPath3: batmanThumbPath3,
      thumbPath4: batmanThumbPath4
    },
    {
      class: 'wonderwoman_int',
      active: false,
      id: 's78asdfas',
      alias: 'WonderWoman',
      name: 'Diana Prince',
      description:
        'Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man´s World.',
      imgPath: wonderwomanImgPath,
      thumbPath1: wonderwomanThumbPath1,
      thumbPath2: wonderwomanThumbPath2,
      thumbPath3: wonderwomanThumbPath3,
      thumbPath4: wonderwomanThumbPath4
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
      thumbPath1: flashThumbPath1,
      thumbPath2: flashThumbPath2,
      thumbPath3: flashThumbPath3,
      thumbPath4: flashThumbPath4
    },
    {
      class: 'greenlantern_int',
      active: false,
      id: 'fghjt567',
      alias: 'GreenLantern',
      name: 'Hal Jordan',
      description:
        'Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.',
      imgPath: greenlanternImgPath,
      thumbPath1: greenlanternThumbPath1,
      thumbPath2: greenlanternThumbPath2,
      thumbPath3: greenlanternThumbPath3,
      thumbPath4: greenlanternThumbPath4
    },
    {
      class: 'greenarrow_int',
      active: false,
      id: 'vav5563445',
      alias: 'GreenArrow',
      name: 'Oliver Queen',
      description:
        'What was the last thing you took home from an island getaway? A tacky souvenir? A great tan? More boring slideshows than you have friends to show?',
      imgPath: greenarrowImgPath,
      thumbPath1: greenarrowThumbPath1,
      thumbPath2: greenarrowThumbPath2,
      thumbPath3: greenarrowThumbPath3,
      thumbPath4: greenarrowThumbPath4
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
      thumbPath1: aquamanThumbPath1,
      thumbPath2: aquamanThumbPath2,
      thumbPath3: aquamanThumbPath3,
      thumbPath4: aquamanThumbPath4
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
      thumbPath1: cyborgThumbPath1,
      thumbPath2: cyborgThumbPath2,
      thumbPath3: cyborgThumbPath3,
      thumbPath4: cyborgThumbPath4
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
