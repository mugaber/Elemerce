import React, { useEffect, lazy, Suspense } from 'react'
import './shop'

import { Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

const CollectionContainer = lazy(() => import('../collection/CollectionContainer'))
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverviewContainer')
)

//

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className='shop-page'>
      <Suspense fallback={<div></div>}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
