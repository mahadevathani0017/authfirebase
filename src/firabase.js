import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREABSE_API_KEY,
  authDomain: process.env.REACT_APP_FIREABSE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREABSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREABSE_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_FIREABSE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREABSE_DATABASE_URL,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
