import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const DiscreteSlider = () => {
  const [value, setValue] = useState(18);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Products Per Page
      </Typography>
      <Slider
        defaultValue={18}
        getAriaValueText={setValue}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={18}
        marks
        min={18}
        max={72}
      />
    </div>
  );
};
export default DiscreteSlider;
