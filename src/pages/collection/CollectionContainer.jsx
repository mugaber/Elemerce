import WithSpinner from '../../components/WithSpinner/WithSpinner';
import Collection from './Collection';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
