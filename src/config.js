import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';
import { getAuth,GoogleAuthProvider } from '@firebase/auth';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "my-porfolio-c92b6.firebaseapp.com",
  projectId: "my-porfolio-c92b6",
  storageBucket: "my-porfolio-c92b6.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-8FLV59LM2E"
};
const app = initializeApp(firebaseConfig)

export const db=getFirestore(app)
export const uploader=getStorage(app)
export const auth = getAuth(app)
export const googleAuth=new GoogleAuthProvider()