import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBlExMWUAWOjlyteQCVn0eiIYm1lPN7osU',
  authDomain: 'ecommerce-app-web.firebaseapp.com',
  databaseURL: 'https://ecommerce-app-web.firebaseio.com',
  projectId: 'ecommerce-app-web',
  storageBucket: 'ecommerce-app-web.appspot.com',
  messagingSenderId: '271043848412',
  appId: '1:271043848412:web:44696330f27e1f0c5b6c19',
  measurementId: 'G-DZQNEMKRNP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// to check user session
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

// if the user logged in create a profile and save it in the firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the user is logging out
  if (!userAuth) return;

  // to qurey from the firestore (database) from the collection users
  // return an object respresenting the user even if does not exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // document Snapshot that represents the data, ex. exists
  const snapShot = await userRef.get();

  // if there is the first time
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // query to firebase to set this user in database with this info
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

// to add collections to the firesotre

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// to query the data from the firestore of collections

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
