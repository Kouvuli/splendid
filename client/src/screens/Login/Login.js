import React, { useState, useEffect } from "react"
import styles from "./styles.module.scss"
import SignUpForm from "../../components/Form/SignUpForm"
import SignInForm from "../../components/Form/SignInForm"
import Box from "@mui/material/Box"
import { Card } from "@mui/material"
import OvalButton from "../../components/UI/Button/OvalButton"
import CustomizedSnackbars from "../../components/UI/CustomizedSnackbars"
import { useDispatch, useSelector } from "react-redux"
import authSlice from "../../redux/reducers/authSlice"
import { authSelector } from "../../redux/selectors"
export const Login = ({ signIn, handler }) => {
  const [isSignIn, setIsSignIn] = useState(signIn)
  const {
    loginSuccess,
    loginLoading,
    loginError,
    signUpSuccess,
    signUpLoading,
    signUpError
  } = useSelector(authSelector)
  const dispatch = useDispatch()
  const signInHandler = () => {
    setIsSignIn((prevIsSignIn) => {
      return !prevIsSignIn
    })
  }
  useEffect(() => {
    dispatch(authSlice.actions.restartSignUp())
  }, [])
  return (
    <Card
      className={`${styles.container} ${
        isSignIn ? "" : styles["right-panel-active"]
      }`}
      id={styles["container"]}
    >
      {!loginLoading && loginSuccess && (
        <CustomizedSnackbars title="Successfully sign in" type="success" />
      )}
      {!loginLoading && loginError && (
        <CustomizedSnackbars title="Failed to sign in" type="error" />
      )}
      {!signUpLoading && signUpSuccess && (
        <CustomizedSnackbars title="Successfully sign up" type="success" />
      )}
      {!signUpLoading && signUpError && (
        <CustomizedSnackbars title="Failed to sign up" type="error" />
      )}
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
