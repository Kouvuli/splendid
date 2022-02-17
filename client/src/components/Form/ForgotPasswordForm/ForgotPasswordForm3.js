import React from "react";
import InputTextField from "../../UI/InputTextField";

const ForgotPasswordForm3 = () => {
  return (
    <form action="#">
      <h2>Sign in</h2>
      <InputTextField label="Email" type="email" />
      <InputTextField label="Password" type="password" />

      <button>Sign In</button>
    </form>
  );
};

export default ForgotPasswordForm3;
