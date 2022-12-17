// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlDHgNvw9wOwS8Rf-rx2qhM8KD-ubyj2E",
  authDomain: "todoist-b99ca.firebaseapp.com",
  projectId: "todoist-b99ca",
  storageBucket: "todoist-b99ca.appspot.com",
  messagingSenderId: "411582186218",
  appId: "1:411582186218:web:f41e3f8e3f4ca4488d8d93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db