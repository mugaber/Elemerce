import React from 'react';
import './shop';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionContainer from '../collection/CollectionContainer';

//

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsAsync } = this.props;
    fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
