import React from "react";
import "./shop";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../collection/Collection";

// we named a dynamic path using colon in the path to make it available
// as match for the CollectionPage to generate a route dynamically from url

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
