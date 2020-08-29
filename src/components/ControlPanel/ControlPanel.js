import React from 'react';
import T from 'prop-types';
import PerPageSlider from './PerPageSlider';
import PriceSlider from './PriceSlider';
import OriginSelect from './OriginSelect/OriginSelect';
import styles from './controlPanel.module.css';
import { LoadProducts } from '../Buttons';

const ControlPanel = ({ options }) => {
  const {
    perPage,
    setPerPage,
    prices,
    handleChangePrice,
    origin,
    handleChangeOrigin,
    loadUserChosenProducts,
  } = options;
  return (
    <div className={styles.panelWrapper}>
      <PerPageSlider perPage={perPage} setPerPage={setPerPage} />
      <PriceSlider prices={prices} onHandleChangePrice={handleChangePrice} />
      <OriginSelect origin={origin} onHandleChangeOrigin={handleChangeOrigin} />
      <LoadProducts actionCallback={loadUserChosenProducts} />
    </div>
  );
};

ControlPanel.propTypes = {
  options: T.shape({
    perPage: T.number.isRequired,
    setPerPage: T.func.isRequired,
    prices: T.arrayOf(T.number).isRequired,
    handleChangePrice: T.func.isRequired,
    origin: T.string.isRequired,
    handleChangeOrigin: T.func.isRequired,
    loadUserChosenProducts: T.func.isRequired,
  }).isRequired,
};
export default ControlPanel;
