import firebase from "firebase";
const firebaseConfig = {
 //api-firebase
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
