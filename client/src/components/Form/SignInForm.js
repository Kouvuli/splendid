import React, { useState } from "react";
// import "./SignInForm.css";
import InputTextField from "../UI/InputTextField";
export const LoginForm = () => {
  return (
    <form action="#">
      <h1>Sign in</h1>
      <InputTextField label="Email" type="email" />
      <InputTextField label="Password" type="password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
