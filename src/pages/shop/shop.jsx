import React from "react";
import "./shop";

import { Route } from "react-router-dom";

import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../collection/Collection";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

//

import WithSpinner from "../../components/WithSpinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

//

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");

    // this is using observable and observere pattern that is listening
    // in the firestore to any changes and it will fire the funciton
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapShot);

    //   updateCollections(collectionMap);
    //   this.setState({
    //     loading: false
    //   });
    // });

    // we can use the promise way that is going to fire only when comp mounts
    collectionRef.get().then(snapShot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapShot);

      updateCollections(collectionMap);
      this.setState({
        loading: false
      });
    });

    // we even can call the firestore as an API using fetch
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/ecommerce-app-web/databases/(default)/documents/cities/LA"
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
