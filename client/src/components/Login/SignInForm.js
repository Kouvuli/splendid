import React, { useState } from "react";
// import "./SignInForm.css";
import InputTextField from "../UI/InputTextField";
export const LoginForm = () => {
  return (
    <form action="#">
      <h1>Sign in</h1>
      <div className="social-container">
        <a href="#" class="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="social">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" class="social">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <span>or use your account</span>
      <InputTextField label="Email" type="email" />
      <InputTextField label="Password" type="password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
