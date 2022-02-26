import React from "react";
import styles from "./ErrorForm.module.css";
import ErrorIcon from "@mui/icons-material/Error";
const ErrorForm = () => {
  return (
    <form className={styles.form}>
      <ErrorIcon className={styles.icon} color="error" />
      <h1>Sorry! Something's wrong</h1>
    </form>
  );
};

export default ErrorForm;
