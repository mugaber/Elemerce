import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import ShopPage from "./pages/shop/shop";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    );
  }
}

export default App;
