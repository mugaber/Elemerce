import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import React from "react";
import "./SignUp.scss";

import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    // to create a new user and safe it in firestore
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // to create user document in firestore
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span className="sub-title">Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="confirm password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="Submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
