import React from "react";
import InputTextField from "../../UI/InputTextField";

const ForgotPasswordForm2 = () => {
  return (
    <form action="#">
      <h1>Sign in</h1>
      <InputTextField label="Email" type="email" />
      <InputTextField label="Password" type="password" />

      <button>Sign In</button>
    </form>
  );
};

export default ForgotPasswordForm2;
