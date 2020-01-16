import React from "react";
import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {items.map(({ id, name }, index) => {
          if (index < 4) {
            return <div key={id}>{name}</div>;
          } else {
            return null
          }
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
