import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import React from 'react';
import './SignIn.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
          />
          <FormInput
            required
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
          />
          <div className='buttons'>
            <CustomButton onClick={this.handleSubmit} type='submit'>
              Sign in
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogle>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
