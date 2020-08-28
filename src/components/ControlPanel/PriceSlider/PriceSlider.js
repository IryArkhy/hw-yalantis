import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});
function valuetext(value) {
  return `${value}$`;
}
const PriceSlider = () => {
  const classes = useStyles();
  const [value, setValue] = useState([80, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaLabel={index =>
          index === 0 ? 'Minimum price' : 'Maximum price'
        }
        aria-labelledby="range-slider"
        defaultValue={[100, 1000]}
        getAriaValueText={valuetext}
        max={1000}
      />
    </div>
  );
};
export default PriceSlider;
