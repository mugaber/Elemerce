import { takeLatest, call, put } from 'redux-saga/effects';
import shopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapShop = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShop);
    put(fetchCollectionsSuccess(collectionMap));
  } catch (err) {
    put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
