import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth, GoogleAuthProvider } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCMJnbPrzVKy_QtFw4NrfSMXr_C581K7kM",
  authDomain: "my-porfolio-c92b6.firebaseapp.com",
  projectId: "my-porfolio-c92b6",
  storageBucket: "my-porfolio-c92b6.appspot.com",
  messagingSenderId: "692625195243",
  appId: "1:692625195243:web:876417e552355b44c3feae",
  measurementId: "G-8FLV59LM2E",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const uploader = getStorage(app);
export const auth = getAuth(app);
export const googleAuth = new GoogleAuthProvider();
