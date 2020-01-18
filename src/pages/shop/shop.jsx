import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import "./shop";
import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <h2>shop page</h2>
    {collections.map(({ id, ...restProps }) => (
      <CollectionPreview key={id} {...restProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
