import React from "react";
import "./SignInSignUp.scss";
import SingIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
        <SingIn />
        <SignUp />
    </div>
  );
};

export default SignInSignUp;
