import React from 'react';
import T from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { useStyles, MenuProps } from './select-styles';
import useFilters from '../../../hooks/useFilters';

const OriginSelect = ({ origin, onHandleChangeOrigin }) => {
  const classes = useStyles();
  const { origins } = useFilters();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-chip-label">Origin</InputLabel>
        <Select
          labelId="mutiple-chip-label"
          id="mutiple-chip"
          multiple
          value={origin}
          onChange={onHandleChangeOrigin}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {origins.map(({ value, displayName }) => (
            <MenuItem key={value} value={value}>
              {displayName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

OriginSelect.propTypes = {
  origin: T.arrayOf(T.string).isRequired,
  onHandleChangeOrigin: T.func.isRequired,
};
export default OriginSelect;
