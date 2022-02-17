import React, { useState } from "react";
import InputTextField from "../UI/InputTextField";
// import "./SignInForm.css";
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [nameHelperText, setNameHelperText] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const [password, setPassword] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const [retypePassword, setRetypePassword] = useState("");
  const [isRetypePasswordError, setIsRetypePasswordError] = useState(false);
  const [retypePasswordHelperText, setRetypePasswordHelperText] = useState("");

  const [birthday, setBirthday] = useState("");
  const nameHandler = (event) => {
    const nameRegex = /^$|^[a-z ,.'-]+$/i;
    const newName = event.target.value;
    setName(newName);
    console.log(newName);
    // console.log(event);
    if (nameRegex.test(newName)) {
      setIsNameError(false);
      setNameHelperText("");
    } else {
      setNameHelperText("Vui lòng không nhập ký tự đặc biệt hay số");
      setIsNameError(true);
    }
  };
  const emailHandler = (event) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (emailRegex.test(newEmail)) {
      setIsEmailError(false);
      setEmailHelperText("");
    } else {
      setEmailHelperText("Vui lòng nhập đúng địa chỉ email");
      setIsEmailError(true);
    }
  };
  const passwordHandler = (event) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/g;
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (passwordRegex.test(newPassword)) {
      setIsPasswordError(false);
      setPasswordHelperText("");
    } else {
      setPasswordHelperText("Mật khẩu ít nhất 6 ký tự, có ít nhất 1 số và chữ");
      setIsPasswordError(true);
    }
  };
  const retypePasswordHandler = (event) => {
    const newRetypePassword = event.target.value;
    setRetypePassword(newRetypePassword);
    console.log(password, newRetypePassword);
    if (password === newRetypePassword) {
      setIsRetypePasswordError(false);
      setRetypePasswordHelperText("");
    } else {
      setRetypePasswordHelperText("Mật khẩu nhập lại không trùng khớp");
      setIsRetypePasswordError(true);
    }
  };
  console.log(emailHelperText);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log();
    setName("");
    setEmail("");
    setPassword("");
    setRetypePassword("");
    setBirthday("");
  };
  return (
    <form action="#" onSubmit={submitHandler}>
      <h1>Create Account</h1>
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
        type="email"
        label="Email"
        error={isEmailError}
        helperText={emailHelperText}
        value={email}
        onChange={emailHandler}
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
      <InputTextField type="date" label="Birthday" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
