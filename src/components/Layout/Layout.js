/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import T from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div
      sx={{
        padding: '50px 80px',
        height: '100vh',
        color: 'textInverted',
      }}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: T.node.isRequired,
};

export default Layout;
