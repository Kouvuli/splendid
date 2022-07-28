import React, { useState } from "react"
import styles from "./SignInForm.module.scss"
import InputTextField from "../UI/InputTextField"
import Link from "@mui/material/Link"
import { useDispatch, useSelector } from "react-redux"
import { Login } from "../../redux/reducers/authSlice"
import { Typography } from "@mui/material"
import { authSelector } from "../../redux/selectors"
import CustomizedSnackbars from "../UI/CustomizedSnackbars"
export const SignInForm = ({ handler }) => {
  const dispatch = useDispatch()
  const { loginSuccess, loginLoading, loginError } = useSelector(authSelector)
  const submitHandler = (event) => {
    event.preventDefault()
    if (username !== "" && password !== "") {
      dispatch(Login({ username, password }))
      setTimeout(() => {
        handler(false)
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }, 2000)
    }
  }
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const usernameHandler = (event) => {
    setUsername(event.target.value)
    // dispatch(Login({ username, password }))
  }
  const passwordHandler = (event) => {
    setPassword(event.target.value)
    // dispatch(Login({ username, password }))
  }
  return (
    <form>
      <h1
        style={{ fontSize: "27px", fontWeight: "bold", color: "text.primary" }}
      >
        Sign in
      </h1>
      <InputTextField
        value={username}
        onChange={usernameHandler}
        label="Username"
        type="text"
      />
      <InputTextField
        value={password}
        onChange={passwordHandler}
        label="Password"
        type="password"
      />
      <Link
        href="#"
        className={`${styles["forgot-password-link"]}`}
        underline="none"
      >
        {"Forgot Password"}
      </Link>

      <button className={styles.btn} onClick={submitHandler}>
        Sign In
      </button>
    </form>
  )
}

export default SignInForm
