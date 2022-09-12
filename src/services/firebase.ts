import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const auth = getAuth();

export async function registerAccountWithEmail(
  email: string,
  password: string,
): Promise<UserCredential> {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function signInWithEmail(
  email: string,
  password: string,
): Promise<UserCredential> {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}