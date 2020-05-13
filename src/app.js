import React from 'react';
import { hot } from 'react-hot-loader';

/** Components */
import Layout from './components/layout';
import Intro from './components/intro';
import Menu from './components/menu';
import Character from './components/character';

/* Reducer */
import { reducer, initialState } from './store/reducer';

/* Actions */
import { setActiveSuperhero, setMenuDirection } from './store/actions';

/** Assets */
import { landscapeImgPath } from './utils/imgPaths';

const App = () => {
  // Reducers
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { superheroes, menuDirection } = state;

  // Refs
  const appWrapperRef = React.useRef(null);

  // States
  const [introStatus, setIntroStatus] = React.useState(true);
  const [menuStatus, setMenuStatus] = React.useState(true);
  const [superhero, setSuperhero] = React.useState(null);
  const [wrapperClasses, setWrapperClasses] = React.useState(['app-wrapper']);

  const preloadCharacter = superhero => {
    const img = new Image();
    img.src = superhero.characterImg;
    img.onload = () => {
      setSuperhero(superhero);
      setMenuStatus(false);
    };
  };

  return (
    <div ref={appWrapperRef} className={wrapperClasses.join(' ')}>
      <div className="landscape">
        <img alt="no portrait allowed" src={landscapeImgPath} />
        <p>
          Change your device from portrait to landscape orientation to enjoy a
          better experience
        </p>
      </div>
      {introStatus ? (
        <Intro
          middleIntro={() => setWrapperClasses([...wrapperClasses, 'black'])}
          endIntro={() => setIntroStatus(false)}
        />
      ) : (
        <Layout show={introStatus}>
          {menuStatus ? (
            <Menu
              superheroes={superheroes}
              setActiveSuperhero={index =>
                setActiveSuperhero(dispatch, superheroes, index)
              }
              menuDirection={menuDirection}
              setMenuDirection={directions =>
                setMenuDirection(dispatch, directions)
              }
              goCharacter={superhero => {
                preloadCharacter(superhero);
                setMenuDirection(dispatch, {
                  inHero: '',
                  outHero: '',
                });
              }}
            />
          ) : (
            <Character
              superhero={superhero}
              goMenu={() => setMenuStatus(true)}
            />
          )}
        </Layout>
      )}
    </div>
  );
};

export default hot(module)(App);
