import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { auth } from "./firebase/firebase.utils";
import React, { Component } from "react";
import ShopPage from "./pages/shop/shop";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
