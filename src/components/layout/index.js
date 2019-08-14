import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Logo from './logo';
import Corner from './corner';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Logo />
    <Corner />
    <Footer />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
