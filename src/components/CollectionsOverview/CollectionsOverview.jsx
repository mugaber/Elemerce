import React from "react";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections">
    {collections.map(({ id, ...restProps }) => (
      <CollectionPreview key={id} {...restProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
