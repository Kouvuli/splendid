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
  const { label, type } = props;
  const classes = useStyles();
  return (
    <TextField
      id="outlined-basic"
      size="small"
      type={type}
      className={classes.root}
      label={label}
      variant="outlined"
    />
  );
};

export default InputTextField;
