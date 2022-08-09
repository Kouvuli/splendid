import React, { useState, useEffect } from "react"
import InputTextField from "../UI/InputTextField"
import { useDispatch, useSelector } from "react-redux"

import styles from "./SignUpForm.module.scss"
import { SignUp } from "../../redux/reducers/authSlice"
import { authSelector } from "../../redux/selectors"
import CustomizedSnackbars from "../UI/CustomizedSnackbars"
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import moment from "moment"
import authSlice from "../../redux/reducers/authSlice"
const SignUpForm = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authSlice.actions.restartSignUp())
  }, [])
  const [name, setName] = useState("")
  const [isNameError, setIsNameError] = useState(false)
  const [nameHelperText, setNameHelperText] = useState("")

  const [username, setUsername] = useState("")
  const [isUsernameError, setIsUsernameError] = useState(false)
  const [usernameHelperText, setUsernameHelperText] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [isPasswordError, setIsPasswordError] = useState(false)
  const [passwordHelperText, setPasswordHelperText] = useState("")

  const [showRetypePassword, setShowRetypePassword] = useState(false)
  const [retypePassword, setRetypePassword] = useState("")
  const [isRetypePasswordError, setIsRetypePasswordError] = useState(false)
  const [retypePasswordHelperText, setRetypePasswordHelperText] = useState("")

  const [birthday, setBirthday] = useState("")
  const nameHandler = (event) => {
    const nameRegex = /^$|^[a-z ,.'-]+$/i
    const newName = event.target.value
    setName(newName)

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
      setUsernameHelperText("Vui lòng không nhập ký tự đặc biệt(4-10 chữ)")
      setIsUsernameError(true)
    }
  }

  const handleClickShowRetypePassword = () => {
    setShowRetypePassword(!showRetypePassword)
  }

  const handleMouseDownRetypePassword = (event) => {
    event.preventDefault()
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
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

    if (
      !isNameError &&
      !isUsernameError &&
      !isPasswordError &&
      !isRetypePasswordError
    ) {
      dispatch(
        SignUp({
          fullname: name,
          dob: moment(birthday, "YYYY-MM-DD").format("DD/MM/YYYY"),
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
  }
  return (
    <>
      <form>
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
        <FormControl
          sx={{ margin: "8px 0 !important", width: "100%" }}
          variant="outlined"
        >
          <InputLabel error={isPasswordError} color="secondary" required shrink>
            Password
          </InputLabel>
          <OutlinedInput
            color="secondary"
            sx={{ border: "none" }}
            size="small"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={passwordHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            error={isPasswordError}
            label="Password"
            notched
            required
          />
          <FormHelperText error={isPasswordError}>
            {passwordHelperText}
          </FormHelperText>
        </FormControl>
        <FormControl
          sx={{ margin: "8px 0 !important", width: "100%" }}
          variant="outlined"
        >
          <InputLabel
            error={isRetypePasswordError}
            color="secondary"
            required
            shrink
            htmlFor="outlined-adornment-password"
          >
            Retype Password
          </InputLabel>
          <OutlinedInput
            color="secondary"
            sx={{ border: "none" }}
            size="small"
            id="outlined-adornment-password"
            type={showRetypePassword ? "text" : "password"}
            value={retypePassword}
            onChange={retypePasswordHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowRetypePassword}
                  onMouseDown={handleMouseDownRetypePassword}
                  edge="end"
                >
                  {showRetypePassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            error={isRetypePasswordError}
            label="Retype Password"
            notched
            required
          />
          <FormHelperText error={isRetypePasswordError}>
            {retypePasswordHelperText}
          </FormHelperText>
        </FormControl>

        <InputTextField
          type="date"
          label="Birthday"
          value={birthday}
          onChange={birthdayHandler}
          required
        />

        <button type="submit" className={styles.btn} onClick={submitHandler}>
          Sign Up
        </button>
      </form>
    </>
  )
}

export default SignUpForm
