import React from 'react';
import T from 'prop-types';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

Layout.propTypes = {
  children: T.node.isRequired,
};

export default Layout;
