import React from 'react';
import T from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useStyles from './slider-styles';
import { PROD_PER_PAGE } from '../../../constants';

const PerPageSlider = ({ perPage, onSetPerPage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="products-per-page-slider" gutterBottom>
        Products Per Page
      </Typography>
      <Slider
        defaultValue={PROD_PER_PAGE}
        value={perPage}
        onChange={onSetPerPage}
        aria-labelledby="products-per-page-slider"
        valueLabelDisplay="auto"
        step={18}
        marks
        min={18}
        max={72}
      />
    </div>
  );
};

PerPageSlider.propTypes = {
  perPage: T.number.isRequired,
  onSetPerPage: T.func.isRequired,
};
export default PerPageSlider;
