import React from "react"
import TextField from "@mui/material/TextField"
import makeStyles from "@mui/styles/makeStyles"
import styles from "./InputTextField.module.scss"
import styled from "styled-components"

// const CustomTextField = styled(TextField)`
//   background-color: #fff;
//   border: none;
//   background: unset !important;
//   margin: 8px 0 !important;
//   width: 100%;
// `;
const InputTextField = (props) => {
  const { label, type, value, error, onChange, helperText, required } = props
  return (
    <TextField
      InputLabelProps={{
        shrink: true
      }}
      id="outlined-basic"
      size="small"
      type={type}
      color="secondary"
      value={value}
      error={error}
      helperText={helperText}
      className={`${styles["input-container"]}`}
      onChange={onChange}
      label={label}
      required={required}
      variant="outlined"
    />
  )
}

export default InputTextField
