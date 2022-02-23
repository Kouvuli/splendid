import React, { useState } from "react";
import styles from "./Login.module.css";
import SignUpForm from "../../components/Form/SignUpForm";
import SignInForm from "../../components/Form/SignInForm";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";

export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInHandler = () => {
    setIsSignIn((prevIsSignIn) => {
      return !prevIsSignIn;
    });
  };
  return (
    <Box className={styles.main} sx={{ backgroundColor: "background.default" }}>
      <Card
        className={`${styles.container} ${
          isSignIn ? "" : styles["right-panel-active"]
        }`}
        id={styles["container"]}
      >
        <div
          className={`${styles["form-container"]} ${styles["sign-up-container"]}`}
        >
          <SignUpForm />
        </div>
        <div
          className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
        >
          <SignInForm />
        </div>
        <div className={`${styles["overlay-container"]}`}>
          <div className={`${styles["overlay"]}`}>
            <div
              className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}
            >
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={`${styles["btn"]} ${styles["ghost"]}`}
                id={`${styles["signIn"]}`}
                onClick={signInHandler}
              >
                Sign In
              </button>
            </div>
            <div
              className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
            >
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className={`${styles["btn"]} ${styles["ghost"]}`}
                id={`${styles["signUp"]}`}
                onClick={signInHandler}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Card>
    </Box>
  );
};

export default Login;
