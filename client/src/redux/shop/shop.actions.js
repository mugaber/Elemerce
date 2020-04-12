import shopActoinTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: shopActoinTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsFailure = (errorMesssage) => ({
  type: shopActoinTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMesssage,
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: shopActoinTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections')

    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot)

        dispatch(fetchCollectionsSuccess(collectionMap))
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
  }
}
