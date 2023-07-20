import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDL06RZYkA7SJVCJKp2Az575GOzgtwmj9A",
  authDomain: "my-developer-type-test.firebaseapp.com",
  projectId: "my-developer-type-test",
  storageBucket: "my-developer-type-test.appspot.com",
  messagingSenderId: "36254585613",
  appId: "1:36254585613:web:f3a10fb0d4ce9384a9d644",
  measurementId: "G-M01MSRDCS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


