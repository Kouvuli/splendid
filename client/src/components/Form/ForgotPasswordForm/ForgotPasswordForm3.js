import React from "react";
import InputTextField from "../../UI/InputTextField";
import "./ForgotPasswordForm.css";
const ForgotPasswordForm3 = () => {
  return (
    <form action="#">
      <h2>New Password</h2>
      <div className="subtitle">Enter new password</div>
      <InputTextField label="New password" type="password" />
      <InputTextField label="Retype New Password" type="password" />
    </form>
  );
};

export default ForgotPasswordForm3;
