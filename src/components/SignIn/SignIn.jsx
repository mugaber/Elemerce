import React, { useState } from 'react';
import './SignIn.scss';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

//
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='email'
        />
        <FormInput
          required
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='password'
        />
        <div className='buttons'>
          <CustomButton onClick={handleSubmit} type='submit'>
            Sign in
          </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogle>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToPorps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToPorps)(SignIn);
