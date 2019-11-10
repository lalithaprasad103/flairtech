import  firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD8b4IdaOUlVxWkijFnrk0yLO5mGDO5_Uw",
  authDomain: "netninja-pm.firebaseapp.com",
  databaseURL: "https://netninja-pm.firebaseio.com",
  projectId: "netninja-pm",
  storageBucket: "netninja-pm.appspot.com",
  messagingSenderId: "47734546445",
  appId: "1:47734546445:web:fc19bb2451606d4462f544",
  measurementId: "G-ZY61RRZQG2"
});
export default app;
