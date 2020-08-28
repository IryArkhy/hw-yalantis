import React from 'react';
import PerPageSlider from './PerPageSlider';
import PriceSlider from './PriceSlider';
import OriginSelect from './OriginSelect/OriginSelect';
import styles from './controlPanel.module.css';

const ControlPanel = () => {
  return (
    <div className={styles.panelWrapper}>
      <PerPageSlider />
      <PriceSlider />
      <OriginSelect />
    </div>
  );
};

export default ControlPanel;
