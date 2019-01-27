import * as actionTypes from '../../actionTypes';
import supermanImgPath from '../../../../assets/img/character_superman.png';
import supermanThumbPath1 from '../../../../assets/img/character_superman_thumb_1.jpg';
import supermanThumbPath2 from '../../../../assets/img/character_superman_thumb_2.jpg';
import supermanThumbPath3 from '../../../../assets/img/character_superman_thumb_3.jpg';
import batmanImgPath from '../../../../assets/img/character_batman.png';
import batmanThumbPath1 from '../../../../assets/img/character_batman_thumb_1.jpg';
import batmanThumbPath2 from '../../../../assets/img/character_batman_thumb_2.jpg';
import batmanThumbPath3 from '../../../../assets/img/character_batman_thumb_3.jpg';
import wonderwomanImgPath from '../../../../assets/img/character_wonderwoman.png';
import wonderwomanThumbPath1 from '../../../../assets/img/character_wonderwoman_thumb_1.jpg';
import wonderwomanThumbPath2 from '../../../../assets/img/character_wonderwoman_thumb_2.jpg';
import wonderwomanThumbPath3 from '../../../../assets/img/character_wonderwoman_thumb_3.jpg';
import flashImgPath from '../../../../assets/img/character_flash.png';
import flashThumbPath1 from '../../../../assets/img/character_flash_thumb_1.jpg';
import flashThumbPath2 from '../../../../assets/img/character_flash_thumb_2.jpg';
import flashThumbPath3 from '../../../../assets/img/character_flash_thumb_3.jpg';
import greenlanternImgPath from '../../../../assets/img/character_greenlantern.png';
import greenlanternThumbPath1 from '../../../../assets/img/character_greenlantern_thumb_1.jpg';
import greenlanternThumbPath2 from '../../../../assets/img/character_greenlantern_thumb_2.jpg';
import greenlanternThumbPath3 from '../../../../assets/img/character_greenlantern_thumb_3.jpg';
import greenarrowImgPath from '../../../../assets/img/character_greenarrow.png';
import greenarrowThumbPath1 from '../../../../assets/img/character_greenarrow_thumb_1.jpg';
import greenarrowThumbPath2 from '../../../../assets/img/character_greenarrow_thumb_2.jpg';
import greenarrowThumbPath3 from '../../../../assets/img/character_greenarrow_thumb_3.jpg';
import aquamanImgPath from '../../../../assets/img/character_aquaman.png';
import aquamanThumbPath1 from '../../../../assets/img/character_aquaman_thumb_1.jpg';
import aquamanThumbPath2 from '../../../../assets/img/character_aquaman_thumb_2.jpg';
import aquamanThumbPath3 from '../../../../assets/img/character_aquaman_thumb_3.jpg';
import cyborgImgPath from '../../../../assets/img/character_cyborg.png';
import cyborgThumbPath1 from '../../../../assets/img/character_cyborg_thumb_1.jpg';
import cyborgThumbPath2 from '../../../../assets/img/character_cyborg_thumb_2.jpg';
import cyborgThumbPath3 from '../../../../assets/img/character_cyborg_thumb_3.jpg';

const initialState = {
  characterList: [
    {
      class: 'superman_int',
      active: false,
      id: 'sgre65',
      imgPath: supermanImgPath,
      thumbPath1: supermanThumbPath1,
      thumbPath2: supermanThumbPath2,
      thumbPath3: supermanThumbPath3
    },
    {
      class: 'batman_int',
      active: false,
      id: 'sgre65',
      imgPath: batmanImgPath,
      thumbPath1: batmanThumbPath1,
      thumbPath2: batmanThumbPath2,
      thumbPath3: batmanThumbPath3
    },
    {
      class: 'wonderwoman_int',
      active: false,
      id: 'sgre65',
      imgPath: wonderwomanImgPath,
      thumbPath1: wonderwomanThumbPath1,
      thumbPath2: wonderwomanThumbPath2,
      thumbPath3: wonderwomanThumbPath3
    },
    {
      class: 'flash_int',
      active: false,
      id: 'sgre65',
      imgPath: flashImgPath,
      thumbPath1: flashThumbPath1,
      thumbPath2: flashThumbPath2,
      thumbPath3: flashThumbPath3
    },
    {
      class: 'greenlantern_int',
      active: false,
      id: 'sgre65',
      imgPath: greenlanternImgPath,
      thumbPath1: greenlanternThumbPath1,
      thumbPath2: greenlanternThumbPath2,
      thumbPath3: greenlanternThumbPath3
    },
    {
      class: 'greenarrow_int',
      active: false,
      id: 'sgre65',
      imgPath: greenarrowImgPath,
      thumbPath1: greenarrowThumbPath1,
      thumbPath2: greenarrowThumbPath2,
      thumbPath3: greenarrowThumbPath3
    },
    {
      class: 'aquaman_int',
      active: false,
      id: 'sgre65',
      imgPath: aquamanImgPath,
      thumbPath1: aquamanThumbPath1,
      thumbPath2: aquamanThumbPath2,
      thumbPath3: aquamanThumbPath3
    },
    {
      class: 'cyborg_int',
      active: false,
      id: 'sgre65',
      imgPath: cyborgImgPath,
      thumbPath1: cyborgThumbPath1,
      thumbPath2: cyborgThumbPath2,
      thumbPath3: cyborgThumbPath3
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
