import { initializeApp } from "firebase/app";
/* Authentication */
import { getAuth } from "firebase/auth";

import { getFirestore } from 'firebase/firestore';
import App from "./App";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain:  import.meta.env.VITE_AUTH_DOMAIN,
    projectId: "chat-react-160bc",
    storageBucket: "chat-react-160bc.appspot.com",
    messagingSenderId: "1059332111469",
    appId: "1:1059332111469:web:91dec73959a1c1f44fd364"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const db = getFirestore(app);

  export { app, auth, db }


