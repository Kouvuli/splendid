import React from "react";
import InputTextField from "../../UI/InputTextField";
import styles from "./ForgotPasswordForm.module.css";
const ForgotPasswordForm2 = () => {
  return (
    <form action="#" className={styles.form}>
      <h2 className={styles.title}>Verification</h2>
      <div className={styles.subtitle}>Press the link we have send you</div>
      <InputTextField label="Email" type="email" />
      <InputTextField label="Password" type="password" />
    </form>
  );
};

export default ForgotPasswordForm2;
