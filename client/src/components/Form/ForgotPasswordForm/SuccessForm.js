import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./SuccessForm.css";
const SuccessForm = () => {
  return (
    <form className={styles.haha}>
      <CheckCircleIcon sx={{ fontSize: "100px" }} />
      <h1 className="success">Success!</h1>
    </form>
  );
};

export default SuccessForm;
