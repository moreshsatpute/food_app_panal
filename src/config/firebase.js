
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBrO0Ia8EyQWijFjJfk8D1Lzn1_4YLKCA0",
  authDomain: "fooddata-cb5f8.firebaseapp.com",
  projectId: "fooddata-cb5f8",
  storageBucket: "fooddata-cb5f8.firebasestorage.app",
  messagingSenderId: "1079542546320",
  appId: "1:1079542546320:web:e3092cb1e1645277da3d15",
  measurementId: "G-NYK0T1JL7Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

