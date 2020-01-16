import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";

const Hats = () => <div>hats</div>;

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    );
  }
}

export default App;
