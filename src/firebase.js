import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDRwLMqEyPOuCN4i7YH67tXonX4m6lt4uE",
  authDomain: "linkedin-clone-52d84.firebaseapp.com",
  projectId: "linkedin-clone-52d84",
  storageBucket: "linkedin-clone-52d84.appspot.com",
  messagingSenderId: "455481919466",
  appId: "1:455481919466:web:70e8b5dafb0f4f41855493",
  measurementId: "G-CXEL6NVZWY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;

// // import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { getStorage } from "firebase/storage";
// import "firebase/compat/storage";
// import "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// // import firebase from "firebase/app";
// // import * as Firebase from "firebase";
// require("firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyDRwLMqEyPOuCN4i7YH67tXonX4m6lt4uE",
//   authDomain: "linkedin-clone-52d84.firebaseapp.com",
//   projectId: "linkedin-clone-52d84",
//   storageBucket: "linkedin-clone-52d84.appspot.com",
//   messagingSenderId: "455481919466",
//   appId: "1:455481919466:web:70e8b5dafb0f4f41855493",
//   measurementId: "G-CXEL6NVZWY",
// };
// const app = firebase.initializeApp(firebaseConfig);
// // const db = app.firestore();
// const db = getDatabase(app);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = getStorage(app);
// const analytics = getAnalytics(app);
// export { auth, provider, storage };
// export default db;
