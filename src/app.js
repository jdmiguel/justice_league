import React from 'react';
import { hot } from 'react-hot-loader';

/** Components */
import Layout from './components/layout';
import Intro from './components/intro';
import Menu from './components/menu';
import Character from './components/character';

/** Assets */
import { landscapeImgPath } from './utils/imgPaths';

const App = () => {
  // Refs
  const appWrapperRef = React.useRef(null);

  // States
  const [introStatus, setIntroStatus] = React.useState(true);
  const [menuStatus, setMenuStatus] = React.useState(true);
  const [superhero, setSuperhero] = React.useState(null);
  const [wrapperClasses, setWrapperClasses] = React.useState(['app-wrapper']);

  return (
    <div ref={appWrapperRef} className={wrapperClasses.join(' ')}>
      <div className="landscape">
        <img alt="landscape forced" src={landscapeImgPath} />
        <p>
          Change your device from portrait to landscape orientation to enjoy a
          better experience.
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
              goCharacter={superhero => {
                setSuperhero(superhero);
                setMenuStatus(false);
              }}
            />
          ) : (
            <Character superhero={superhero} />
          )}
        </Layout>
      )}
    </div>
  );
};

export default hot(module)(App);
