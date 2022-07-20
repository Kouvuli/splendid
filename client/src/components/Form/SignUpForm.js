import React, { useState } from "react"
import InputTextField from "../UI/InputTextField"
import { useDispatch } from "react-redux"

import styles from "./SignUpForm.module.scss"
import { SignUp } from "../../redux/reducers/authSlice"
const SignUpForm = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [isNameError, setIsNameError] = useState(false)
  const [nameHelperText, setNameHelperText] = useState("")

  const [username, setUsername] = useState("")
  const [isUsernameError, setIsUsernameError] = useState(false)
  const [usernameHelperText, setUsernameHelperText] = useState("")

  const [password, setPassword] = useState("")
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState("")

  const [retypePassword, setRetypePassword] = useState("")
  const [isRetypePasswordError, setIsRetypePasswordError] = useState(false)
  const [retypePasswordHelperText, setRetypePasswordHelperText] = useState("")

  const [birthday, setBirthday] = useState("")
  const nameHandler = (event) => {
    const nameRegex = /^$|^[a-z ,.'-]+$/i
    const newName = event.target.value
    setName(newName)
    console.log(newName)
    // console.log(event);
    if (nameRegex.test(newName)) {
      setIsNameError(false)
      setNameHelperText("")
    } else {
      setNameHelperText("Vui lòng không nhập ký tự đặc biệt hay số")
      setIsNameError(true)
    }
  }
  const usernameHandler = (event) => {
    const usernameRegex = /^[a-zA-Z0-9]{4,10}$/
    const newUsername = event.target.value
    setUsername(newUsername)
    if (usernameRegex.test(newUsername)) {
      setIsUsernameError(false)
      setUsernameHelperText("")
    } else {
      setUsernameHelperText("Vui lòng không nhập ký tự đặc biệt")
      setIsUsernameError(true)
    }
  }
  const passwordHandler = (event) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g
    const newPassword = event.target.value
    setPassword(newPassword)
    if (passwordRegex.test(newPassword)) {
      setIsPasswordError(false)
      setPasswordHelperText("")
    } else {
      setPasswordHelperText("Mật khẩu ít nhất 6 ký tự, có ít nhất 1 số và chữ")
      setIsPasswordError(true)
    }
  }
  const retypePasswordHandler = (event) => {
    const newRetypePassword = event.target.value
    setRetypePassword(newRetypePassword)
    console.log(password, newRetypePassword)
    if (password === newRetypePassword) {
      setIsRetypePasswordError(false)
      setRetypePasswordHelperText("")
    } else {
      setRetypePasswordHelperText("Mật khẩu nhập lại không trùng khớp")
      setIsRetypePasswordError(true)
    }
  }
  const birthdayHandler = (event) => {
    const newBirthday = event.target.value
    setBirthday(newBirthday)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    console.log({
      fullname: name,
      dob: birthday,
      username,
      password,
      is_admin: false
    })
    dispatch(
      SignUp({
        fullname: name,
        dob: birthday,
        username,
        password,
        is_admin: false
      })
    )
    setName("")
    setUsername("")
    setPassword("")
    setRetypePassword("")
    setBirthday("")
  }
  return (
    <form onSubmit={submitHandler}>
      <h1
        style={{ fontSize: "27px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Create Account
      </h1>
      <InputTextField
        type="text"
        error={isNameError}
        helperText={nameHelperText}
        value={name}
        label="Name"
        onChange={nameHandler}
        required
      />
      <InputTextField
        type="text"
        label="Username"
        error={isUsernameError}
        helperText={usernameHelperText}
        value={username}
        onChange={usernameHandler}
        required
      />
      <InputTextField
        type="password"
        label="Password"
        error={isPasswordError}
        helperText={passwordHelperText}
        value={password}
        onChange={passwordHandler}
        required
      />
      <InputTextField
        type="password"
        label="Retype Password"
        error={isRetypePasswordError}
        helperText={retypePasswordHelperText}
        value={retypePassword}
        onChange={retypePasswordHandler}
        required
      />
      <InputTextField
        type="date"
        label="Birthday"
        value={birthday}
        onChange={birthdayHandler}
        required
      />
      <button type="submit" className={styles.btn}>
        Sign Up
      </button>
    </form>
  )
}

export default SignUpForm
