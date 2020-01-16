import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items.map(({ id, ...otherProps }, index) => {
          if (index < 4) {
            return <CollectionItem key={id} {...otherProps} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
