import React from 'react';
import T from 'prop-types';
import styles from './grid.module.css';

const Grid = ({ children }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};
Grid.propTypes = {
  children: T.node.isRequired,
};
export default Grid;
