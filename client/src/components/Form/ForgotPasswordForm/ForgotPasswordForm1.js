import React from "react";
import InputTextField from "../../UI/InputTextField";
import styles from "./ForgotPasswordForm.module.css";
const ForgotPasswordForm1 = () => {
  return (
    <form action="#" className={styles.form}>
      <h2 className={styles.title}>Enter your Email</h2>
      <div className={styles.subtitle}>
        Lost your password? Please enter your email address. You will receive a
        link to create a new password.
      </div>
      <InputTextField label="Email" type="email" />
    </form>
  );
};

export default ForgotPasswordForm1;
