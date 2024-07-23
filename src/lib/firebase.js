
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
//   apiKey: import.meta.env.apiKey.VITE_API_KEY,
  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: "reactchat-d52fe.firebaseapp.com",
  projectId: "reactchat-d52fe",
  storageBucket: "reactchat-d52fe.appspot.com",
  messagingSenderId: "1063223871633",
  appId: "1:1063223871633:web:6568f09d9b07d626c71730"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()