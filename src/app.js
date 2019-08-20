import React from 'react';
import { hot } from 'react-hot-loader';

/** Components */
import Layout from './components/layout';
import Intro from './components/intro';
import Menu from './components/menu';
import Character from './components/character';

const App = () => {
  // States
  const [introStatus, setIntroStatus] = React.useState(true);
  const [menuStatus, setMenutatus] = React.useState(true);

  return (
    <>
      <div className="landscape">
        <img alt="landscape forced" src="../assets/img/landscape.png" />
        <p>
          Coloca tu móvil o tablet en horizontal
          <br />
          para disfrutar de una mejor experiencia.
        </p>
      </div>
      {introStatus ? (
        <Intro endIntro={() => setIntroStatus(false)} />
      ) : (
        <Layout show={introStatus}>
          {menuStatus ? <Menu /> : <Character />}
        </Layout>
      )}
    </>
  );
};

export default hot(module)(App);
