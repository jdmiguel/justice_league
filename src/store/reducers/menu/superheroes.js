import * as actionTypes from '../../actionTypes';
import supermanIconPath from '../../../../assets/img/icon_superman.svg';
import batmanIconPath from '../../../../assets/img/icon_batman.svg';
import wonderWomanIconPath from '../../../../assets/img/icon_wonderwoman.svg';
import flashIconPath from '../../../../assets/img/icon_flash.svg';
import greenLanternIconPath from '../../../../assets/img/icon_greenlantern.svg';
import greenArrowIconPath from '../../../../assets/img/icon_greenarrow.svg';
import aquamanIconPath from '../../../../assets/img/icon_aquaman.svg';
import cyborgIconPath from '../../../../assets/img/icon_cyborg.svg';

const initialState = {
  superheroesList: [
    {
      name: 'Superman',
      class: 'superman',
      active: false,
      breakpointCharacter: 4,
      id: '012b',
      counterValue: 0,
      sideDrawerIconPath: supermanIconPath
    },
    {
      name: 'Batman',
      class: 'batman',
      active: false,
      breakpointCharacter: 2,
      id: '024ee',
      counterValue: 1,
      sideDrawerIconPath: batmanIconPath
    },
    {
      name: 'WonderWoman',
      class: 'wonderwoman',
      active: false,
      breakpointCharacter: 5,
      id: '034pl',
      counterValue: 2,
      sideDrawerIconPath: wonderWomanIconPath
    },
    {
      name: 'TheFlash',
      class: 'flash',
      active: false,
      breakpointCharacter: 3,
      id: '0021fg',
      counterValue: 3,
      sideDrawerIconPath: flashIconPath
    },
    {
      name: 'GreenLantern',
      class: 'greenlantern',
      active: false,
      breakpointCharacter: 5,
      id: '077df',
      counterValue: 4,
      sideDrawerIconPath: greenLanternIconPath
    },
    {
      name: 'GreenArrow',
      class: 'greenarrow',
      active: false,
      breakpointCharacter: 5,
      id: '34jafd',
      counterValue: 5,
      sideDrawerIconPath: greenArrowIconPath
    },
    {
      name: 'Aquaman',
      class: 'aquaman',
      active: false,
      breakpointCharacter: 3,
      id: '21orsy',
      counterValue: 6,
      sideDrawerIconPath: aquamanIconPath
    },
    {
      name: 'Cyborg',
      class: 'cyborg',
      active: false,
      breakpointCharacter: 2,
      id: '98dfda',
      counterValue: 7,
      sideDrawerIconPath: cyborgIconPath
    }
  ],

  counterActivateSuperhero: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ACTIVE_SUPERHERO_MENU: {
      return {
        ...state,
        superheroesList: action.superheroesList,
        counterActivateSuperhero: action.superheroSelected
      };
    }

    case actionTypes.SET_COUNTER_VALUE_ACTIVE_SUPERHERO_MENU: {
      return {
        ...state,
        counterActivateSuperhero: action.counter
      };
    }

    default:
      return state;
  }
};

export default reducer;
