import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Logo from './logo';
import Corner from './corner';
import Footer from './footer';

const LogoMemoized = React.memo(Logo);
const CornerMemoized = React.memo(Corner);
const FooterMemoized = React.memo(Footer);

const Layout = ({ children }) => (
  <div className="layout">
    <LogoMemoized />
    <CornerMemoized />
    <FooterMemoized />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
