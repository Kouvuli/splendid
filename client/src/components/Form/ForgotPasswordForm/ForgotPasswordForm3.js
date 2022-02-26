import React from "react";
import InputTextField from "../../UI/InputTextField";
import styles from "./ForgotPasswordForm.module.css";
const ForgotPasswordForm3 = () => {
  return (
    <form action="#" className={styles.form}>
      <h2 className={styles.title}>New Password</h2>
      <div className={styles.subtitle}>Enter new password</div>
      <InputTextField label="New password" type="password" />
      <InputTextField label="Retype New Password" type="password" />
    </form>
  );
};

export default ForgotPasswordForm3;
