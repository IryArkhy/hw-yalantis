import React from 'react';
import T from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useStyles from './slider-styles';

const PerPageSlider = ({ perPage, setPerPage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="products-per-page-slider" gutterBottom>
        Products Per Page
      </Typography>
      <Slider
        defaultValue={18}
        getAriaValueText={setPerPage}
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
  setPerPage: T.func.isRequired,
};
export default PerPageSlider;
