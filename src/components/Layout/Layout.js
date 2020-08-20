import React from 'react';
import T from 'prop-types';

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

Layout.propTypes = {
  children: T.node.isRequired,
};

export default Layout;
