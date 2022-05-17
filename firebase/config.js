import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEdhJdomr8FZqAd401b81qNBPbGj5hHmk",
  authDomain: "rx-pandan.firebaseapp.com",
  projectId: "rx-pandan",
  storageBucket: "rx-pandan.appspot.com",
  messagingSenderId: "576448030524",
  appId: "1:576448030524:web:dff366355fb6935a01e039",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export {
  auth,
  provider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
};
