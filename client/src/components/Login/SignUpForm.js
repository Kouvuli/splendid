import React from "react";
import InputTextField from "../UI/InputTextField";
const SignUpForm = () => {
  const submitHandler = () => {};
  return (
    <form action="#" onSubmit={submitHandler}>
      <h1>Create Account</h1>
      <div className="social-container">
        <a href="#" className="social">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social">
          <i class="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="social">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <span>or use your email for registration</span>
      <InputTextField type="text" label="Name" />
      <InputTextField type="email" label="Email" />
      <InputTextField type="password" label="Password" />
      <button>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
