import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
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
    // when there is a change in the auth from firebase (signin with google)
    // call creerateuserprofile and update the state of the current user
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // when logging in will return userAuth object
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // take a snapshot from the userRef object that have the info
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
        // when logging out the auth.onChange will return null
      } else {
        this.setState({ currentUser: userAuth });
      }
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
