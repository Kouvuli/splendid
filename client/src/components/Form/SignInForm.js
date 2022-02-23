import React, { useState } from "react";
import styles from "./SignInForm.module.css";
import InputTextField from "../UI/InputTextField";
import Link from "@mui/material/Link";
export const LoginForm = () => {
  return (
    <form action="#">
      <h1>Sign in</h1>
      <InputTextField label="Email" type="email" />
      <InputTextField label="Password" type="password" />
      <Link
        href="#"
        className={`${styles["forgot-password-link"]}`}
        underline="none"
      >
        {"Forgot Password"}
      </Link>

      <button className={styles.btn}>Sign In</button>
    </form>
  );
};

export default LoginForm;
