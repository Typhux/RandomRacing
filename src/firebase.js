import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDIGx2ofx7e4CVOzSVf-E3ywLWkRmZMAK8",
  authDomain: "random-racing.firebaseapp.com",
  databaseURL: "https://random-racing-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "random-racing",
  storageBucket: "random-racing.firebasestorage.app",
  messagingSenderId: "646634514032",
  appId: "1:646634514032:web:867af1bda8ff3835d0f6b5"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')