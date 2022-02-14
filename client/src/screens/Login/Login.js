import React, { useState } from "react";
import "./Login.css";
import SignUpForm from "../../components/Login/SignUpForm";
import SignInForm from "../../components/Login/SignInForm";

export const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const signInHandler = () => {
    setIsSignIn((prevIsSignIn) => {
      return !prevIsSignIn;
    });
  };
  const submitHandler = () => {};
  return (
    <div
      className={`container ${isSignIn ? "" : "right-panel-active"}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <SignUpForm />
      </div>
      <div className="form-container sign-in-container">
        <SignInForm />
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" id="signIn" onClick={signInHandler}>
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={signInHandler}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
