import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const OriginSelect = () => {
  const classes = useStyles();
  const [origin, setOrigin] = React.useState('');

  const handleChange = event => {
    setOrigin(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Origin</InputLabel>
        <Select
          native
          value={origin}
          onChange={handleChange}
          label="Origin"
          inputProps={{
            origin: 'origin',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="usa">Usa</option>
          <option value="europa">Europa</option>
          <option value="asia">Asia</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default OriginSelect;
