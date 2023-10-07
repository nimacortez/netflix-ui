import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFKDkiHJdhCq6r6Z35Wnx_ETqn3tknerw",
  authDomain: "react-netflix-app-5a555.firebaseapp.com",
  projectId: "react-netflix-app-5a555",
  storageBucket: "react-netflix-app-5a555.appspot.com",
  messagingSenderId: "871909407531",
  appId: "1:871909407531:web:6007539309324493a7236e",
  measurementId: "G-PW4F1DMC6X"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);