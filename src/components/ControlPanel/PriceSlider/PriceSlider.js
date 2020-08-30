import React from 'react';
import T from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useStyles from './slider-styles';
import valuetext from '../../../helpers/accessibilityHelpers';

const PriceSlider = ({ prices, onHandleChangePrice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="price-range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        value={prices}
        onChange={onHandleChangePrice}
        valueLabelDisplay="auto"
        getAriaLabel={index =>
          index === 0 ? 'Minimum price' : 'Maximum price'
        }
        aria-labelledby="price-range-slider"
        defaultValue={[100, 1000]}
        getAriaValueText={valuetext}
        max={1000}
      />
    </div>
  );
};

PriceSlider.propTypes = {
  prices: T.arrayOf(T.number).isRequired,
  onHandleChangePrice: T.func.isRequired,
};
export default PriceSlider;
