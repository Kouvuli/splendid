import React, { useState } from "react"
import styles from "./styles.module.scss"
import SignUpForm from "../../components/Form/SignUpForm"
import SignInForm from "../../components/Form/SignInForm"
import Box from "@mui/material/Box"
import { Card } from "@mui/material"
import OvalButton from "../../components/UI/Button/OvalButton"

export const Login = ({ signIn, handler }) => {
  const [isSignIn, setIsSignIn] = useState(signIn)

  const signInHandler = () => {
    setIsSignIn((prevIsSignIn) => {
      return !prevIsSignIn
    })
  }
  return (
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
        <SignInForm handler={handler} />
      </div>
      <div className={`${styles["overlay-container"]}`}>
        <div className={`${styles["overlay"]}`}>
          <div
            className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}
          >
            <h1 className={styles.title}>Welcome Back!</h1>
            <p className={styles.subtitle}>
              To keep connected with us please login with your personal info
            </p>
            <OvalButton title="Sign In" handler={signInHandler} outlined />
          </div>
          <div
            className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
          >
            <h1 className={styles.title}>Hello, Friend!</h1>
            <p className={styles.subtitle}>
              Enter your personal details and start journey with us
            </p>
            <OvalButton title="Sign Up" handler={signInHandler} outlined />
            {/* <button
                className={`${styles["btn"]} ${styles["ghost"]}`}
                id={`${styles["signUp"]}`}
                onClick={signInHandler}
              >
                Sign Up
              </button> */}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Login
