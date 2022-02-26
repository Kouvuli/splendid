import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./SuccessForm.module.css";
const SuccessForm = () => {
  return (
    <form className={styles.form}>
      <CheckCircleIcon className={styles.icon} color="primary" />
      <h1>Success!</h1>
    </form>
  );
};

export default SuccessForm;
