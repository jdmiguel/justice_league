import React from 'react';
import { hot } from 'react-hot-loader';

/** Components */
import Layout from './components/layout';
import Intro from './components/intro';
import Menu from './components/menu';
import Character from './components/character';

/* Hooks */
// import useWindowResize from './hooks/useWindowResize';

/** Utils */
// import { isMobileOrTablet } from './utils';

/** Assets */
import { landscapeImgPath } from './utils/imgPaths';

// const addFullScreen = element => {
// if (isMobileOrTablet) {
// if (element.requestFullscreen) {
// element.requestFullscreen();
// } else if (element.mozRequestFullScreen) {
// element.mozRequestFullScreen();
// } else if (element.webkitRequestFullscreen) {
// element.webkitRequestFullscreen();
// } else if (element.msRequestFullscreen) {
// element.msRequestFullscreen();
// }
// }
// };

const App = () => {
  // Measures
  // const { width, height } = useWindowResize();

  // Refs
  const appWrapperRef = React.useRef(null);

  // States
  // const [fullScreenState, setFullScreenState] = React.useState(false);
  const [introStatus, setIntroStatus] = React.useState(true);
  const [menuStatus, setMenuStatus] = React.useState(true);
  const [superheroClass, setSuperheroClass] = React.useState('');
  const [wrapperClasses, setWrapperClasses] = React.useState(['app-wrapper']);

  // React.useEffect(() => {
  // if (
  // width > height &&
  // (isMobileOrTablet() || width < 1400) &&
  // !fullScreenState
  // ) {
  // addFullScreen(appWrapperRef.current);
  // setFullScreenState(true);
  // }
  // }, [width]);

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
              goCharacter={superheroClass => {
                setSuperheroClass(superheroClass);
                setMenuStatus(false);
              }}
            />
          ) : (
            <Character superheroClass={superheroClass} />
          )}
        </Layout>
      )}
    </div>
  );
};

export default hot(module)(App);
