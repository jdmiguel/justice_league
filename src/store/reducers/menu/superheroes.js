import * as actionTypes from '../../actionTypes';

const initialState = {
  superheroesList: [
    {
      name: 'Superman',
      class: 'superman',
      active: true,
      breakpointCharacter: 4,
      id: '012b',
      counterValue: 0,
      sideDrawerLogoPath:
        '../../../assets/img/sidedrawer_logos/logo_superman.svg'
    },
    {
      name: 'Batman',
      class: 'batman',
      active: false,
      breakpointCharacter: 2,
      id: '024ee',
      counterValue: 1,
      sideDrawerLogoPath: '../../../assets/img/sidedrawer_logos/logo_batman.svg'
    },
    {
      name: 'WonderWoman',
      class: 'wonderwoman',
      active: false,
      breakpointCharacter: 5,
      id: '034pl',
      counterValue: 2,
      sideDrawerLogoPath:
        '../../../assets/img/sidedrawer_logos/logo_wonder_woman.svg'
    },
    {
      name: 'TheFlash',
      class: 'flash',
      active: false,
      breakpointCharacter: 3,
      id: '0021fg',
      counterValue: 3,
      sideDrawerLogoPath: '../../../assets/img/sidedrawer_logos/logo_flash.svg'
    },
    {
      name: 'GreenLantern',
      class: 'greenlantern',
      active: false,
      breakpointCharacter: 5,
      id: '077df',
      counterValue: 4,
      sideDrawerLogoPath:
        '../../../assets/img/sidedrawer_logos/logo_green_lantern.svg'
    },
    {
      name: 'GreenArrow',
      class: 'greenarrow',
      active: false,
      breakpointCharacter: 5,
      id: '34jafd',
      counterValue: 5,
      sideDrawerLogoPath:
        '../../../assets/img/sidedrawer_logos/logo_green_arrow.svg'
    },
    {
      name: 'Aquaman',
      class: 'aquaman',
      active: false,
      breakpointCharacter: 3,
      id: '21orsy',
      counterValue: 6,
      sideDrawerLogoPath:
        '../../../assets/img/sidedrawer_logos/logo_aquaman.svg'
    },
    {
      name: 'Cyborg',
      class: 'cyborg',
      active: false,
      breakpointCharacter: 2,
      id: '98dfda',
      counterValue: 7,
      sideDrawerLogoPath: '../../../assets/img/sidedrawer_logos/logo_cyborg.svg'
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
