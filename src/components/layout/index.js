import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Logo from './logo';
import Corner from './corner';
import Footer from './footer';

const Layout = ({ children }) => {
  // States
  const [coverClasses, setCoverClasses] = React.useState(['cover']);

  // UseEffects

  React.useEffect(() => {

    // if (coverActiveClass) {
   // setCoverClasses([...coverClasses]);
   // }
  }, []);

  return (
    <div className="layout">
      <Logo />
      <Corner />
      <Footer />
      <div className={coverClasses.join(' ')} />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  coverActiveClass: PropTypes.string
};

export default Layout;
