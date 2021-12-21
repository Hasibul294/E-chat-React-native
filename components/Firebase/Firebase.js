import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6VUjLzP3XmZIIf1kH6-x6dvtjloyToK8",
  authDomain: "e-chat-react-native-expo.firebaseapp.com",
  projectId: "e-chat-react-native-expo",
  storageBucket: "e-chat-react-native-expo.appspot.com",
  messagingSenderId: "726449755946",
  appId: "1:726449755946:web:9aed5fcf533f6dfae4b053",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
