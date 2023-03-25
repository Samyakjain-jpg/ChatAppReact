
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACnqrgGwwhyXZbgtar42t8ZTdfOWMgfng",
  authDomain: "chat-app-by-samyak.firebaseapp.com",
  projectId: "chat-app-by-samyak",
  storageBucket: "chat-app-by-samyak.appspot.com",
  messagingSenderId: "861057981286",
  appId: "1:861057981286:web:07b69fd46fac3823a7c6a7"
};


export const app = initializeApp(firebaseConfig);