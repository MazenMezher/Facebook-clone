import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNba-hZKANxUYO3_JC9mghKjqy3vPLzl8",
    authDomain: "facebook-clone-971ea.firebaseapp.com",
    databaseURL: "https://facebook-clone-971ea.firebaseio.com",
    projectId: "facebook-clone-971ea",
    storageBucket: "facebook-clone-971ea.appspot.com",
    messagingSenderId: "677255753459",
    appId: "1:677255753459:web:6a4227a5693c05627c5186",
    measurementId: "G-CQ0QJTKT0G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;