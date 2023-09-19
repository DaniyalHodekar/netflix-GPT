// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmzpwMHyRu9ghuH1o7R-9e5L_Rso5STxo",
  authDomain: "netflixgpt-e13ce.firebaseapp.com",
  projectId: "netflixgpt-e13ce",
  storageBucket: "netflixgpt-e13ce.appspot.com",
  messagingSenderId: "49700431396",
  appId: "1:49700431396:web:c56cf0fd14add1bb5f9ab1",
  measurementId: "G-X9ZCBDMT1Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

/**
 * Configuring firebase:
 *
 * Created new app in firebase .
 * enabled email authentication.
 * npm install firebase
 * npm install -g firebase-tools for hosting tools.
 * npx firebase init for initalizing
 *
 * selected this option:
 * Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 *
 * Select existing project from foirebase
 * Seletc project you want
 *
 * selected dist as deploy folder as im using vite
 * Configure as single page app , select NO.
 * Seleted auto deploys as no
 *
 * Hosting initailization complete.
 *
 * now run npx firebase deploy
 *
 * Your site is live!!
 * https://netflixgpt-e13ce.web.app
 *
 *
 * Now lets create new user sign in:
 * Reading docs is a superpower of developer
 * Always keep reading docs
 * Firebase auth
 * password authentication api import
 *
 *
 */
