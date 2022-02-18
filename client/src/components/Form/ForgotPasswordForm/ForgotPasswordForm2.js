import React from "react";
import InputTextField from "../../UI/InputTextField";
import "./ForgotPasswordForm.css";
const ForgotPasswordForm2 = () => {
  return (
    <form action="#">
      <h2>Verification</h2>
      <div className="subtitle">Press the link we have send you</div>
      <InputTextField label="Email" type="email" />
      <InputTextField label="Password" type="password" />
    </form>
  );
};

export default ForgotPasswordForm2;
