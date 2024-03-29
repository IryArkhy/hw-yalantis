import React from 'react';
import T from 'prop-types';
import PerPageSlider from './PerPageSlider';
import PriceSlider from './PriceSlider';
import OriginSelect from './OriginSelect/OriginSelect';
import {
  panelWrapper,
  loadProducts,
  clearFilters as clearFiltersStyles,
} from './controlPanel.module.css';
import { ControlPanelBtn } from '../Buttons';

const ControlPanel = ({ options, style }) => {
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
    <div className={style}>
      <PerPageSlider perPage={perPage} onSetPerPage={handleChangePerPage} />
      <PriceSlider prices={prices} onHandleChangePrice={handleChangePrice} />
      <OriginSelect origin={origin} onHandleChangeOrigin={handleChangeOrigin} />
      <div>
        <ControlPanelBtn
          onClickCallback={loadUserChosenProducts}
          text="Load"
          styles={loadProducts}
        />
        <ControlPanelBtn
          onClickCallback={clearFilters}
          text="Reset"
          styles={clearFiltersStyles}
        />
      </div>
    </div>
  );
};
ControlPanel.defaultProps = {
  style: panelWrapper,
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
  style: T.string,
};
export default ControlPanel;
