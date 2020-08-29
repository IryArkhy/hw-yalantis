import React from 'react';
import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import { LOADER_ROOT } from '../../constants';
import styles from './loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () =>
  createPortal(
    <div className={styles.container}>
      <Loader
        type="ThreeDots"
        color="#ff7675"
        height={150}
        width={150}
        timeout={0}
      />
    </div>,
    LOADER_ROOT,
  );

export default Spinner;
