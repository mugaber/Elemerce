import React from "react";
import "./Collection.scss";

import CollectionItem from "../../components/CollectionItem/CollectionItem";

// to show a collection dynamically based on the route
// get the collection from the state using a selector

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// selectCollection is a HOF that takes the collectionId map it
// and return a selector that return the collection based on map

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
