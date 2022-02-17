import React from "react";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EEE",
    border: "none",
    background: "unset!important",
    margin: "8px 0!important",
    width: "100%",
  },
}));
const InputTextField = (props) => {
  const { label, type, value, error, onChange, helperText, required } = props;
  const classes = useStyles();
  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      id="outlined-basic"
      size="small"
      type={type}
      value={value}
      error={error}
      helperText={helperText}
      onChange={onChange}
      className={classes.root}
      label={label}
      required={required}
      variant="outlined"
    />
  );
};

export default InputTextField;
