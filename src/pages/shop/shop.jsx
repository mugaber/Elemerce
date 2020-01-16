import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import "./shop";
import SHOP_DATA from "./shop.data";
import React from "react";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const collections = this.state.collections;
    return (
      <div className="shop-page">
        <h2>shop page</h2>
        {collections.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
