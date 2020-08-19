import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBM3FMinBCX6zwBA8MWrQv8mJA24ILFAg0",
  authDomain: "istiak-slack-clone.firebaseapp.com",
  databaseURL: "https://istiak-slack-clone.firebaseio.com",
  projectId: "istiak-slack-clone",
  storageBucket: "istiak-slack-clone.appspot.com",
  messagingSenderId: "1046292838409",
  appId: "1:1046292838409:web:0045e40e1c5a40bb13a0d8",
  measurementId: "G-VKSMRLHCRP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
