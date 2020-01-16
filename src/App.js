import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React, { Component } from "react";
import ShopPage from "./pages/shop/shop";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
