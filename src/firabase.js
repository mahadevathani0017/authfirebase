import firebase from "firebase/compat/app";
import "firbase/auth"

const app = firebase.initializeApp( {
  apiKey: process.env.REACT_APP_FIREABSE_API_KEY,
  authDomain: process.env.REACT_APP_FIREABSE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREABSE_PROJECT - ID,
  storageBucket: process.env.REACT_APP_FIREABSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREABSE_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_FIREABSE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREABSE_DATABASE_URL,
});
export const auth =app.auth()
export default  app
