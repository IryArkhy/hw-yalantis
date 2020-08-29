import React from 'react';
import T from 'prop-types';
import PerPageSlider from './PerPageSlider';
import PriceSlider from './PriceSlider';
import OriginSelect from './OriginSelect/OriginSelect';
import styles from './controlPanel.module.css';
import { LoadProducts, ClearFilters } from '../Buttons';

const ControlPanel = ({ options }) => {
  const {
    perPage,
    handleChangePerPage,
    prices,
    handleChangePrice,
    origin,
    handleChangeOrigin,
    loadUserChosenProducts,
    clearFilters,
  } = options;

  return (
    <div className={styles.panelWrapper}>
      <PerPageSlider perPage={perPage} onSetPerPage={handleChangePerPage} />
      <PriceSlider prices={prices} onHandleChangePrice={handleChangePrice} />
      <OriginSelect origin={origin} onHandleChangeOrigin={handleChangeOrigin} />
      <div>
        <LoadProducts actionCallback={loadUserChosenProducts} />
        <ClearFilters actionCallback={clearFilters} />
      </div>
    </div>
  );
};

ControlPanel.propTypes = {
  options: T.shape({
    perPage: T.number.isRequired,
    handleChangePerPage: T.func.isRequired,
    prices: T.arrayOf(T.number).isRequired,
    handleChangePrice: T.func.isRequired,
    origin: T.arrayOf(T.string).isRequired,
    handleChangeOrigin: T.func.isRequired,
    loadUserChosenProducts: T.func.isRequired,
    clearFilters: T.func.isRequired,
  }).isRequired,
};
export default ControlPanel;
