import React from 'react';
import T from 'prop-types';
import { useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './select-styles';

const OriginSelect = ({ origin, onHandleChangeOrigin }) => {
  const origins = useSelector(({ products }) => products.productOrigins);
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Origin</InputLabel>
        <Select
          native
          value={origin}
          onChange={onHandleChangeOrigin}
          label="Origin"
          inputProps={{
            origin: 'origin',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {origins.map(({ value, displayName }) => (
            <option key={value} value={value}>
              {displayName}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

OriginSelect.propTypes = {
  origin: T.string.isRequired,
  onHandleChangeOrigin: T.func.isRequired,
};
export default OriginSelect;
