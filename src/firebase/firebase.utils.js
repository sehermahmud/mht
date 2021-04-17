import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCOaZ5WRxjUAn-HiyqAnkljxJGt821UOuA',
  authDomain: 'mht-edu.firebaseapp.com',
  projectId: 'mht-edu',
  storageBucket: 'mht-edu.appspot.com',
  messagingSenderId: '1063002972285',
  appId: '1:1063002972285:web:3cedeeea63f27ae3f25114',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const EditUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  firebase
    .firestore()
    .collection('users')
    .where('uid', '==', userAuth.uid)
    .get()
    .then(function (querySnapshot) {
      const { displayName, email } = userAuth;
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data());
        doc.update({ displayName, email });
      });
    });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = firebase.firestore();

export default firebase;
