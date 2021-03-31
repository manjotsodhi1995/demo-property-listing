import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  return auth
    .signInWithPopup(googleProvider)
    .then(res => {
      console.log("SUCCESS ", JSON.stringify(res.user));
      return res.user;
    })
    .catch(error => {
      console.log("error ", JSON.stringify(error.message));
    });
};

export const logOut = async () => {
  await auth
    .signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch(error => {
      console.log("error logout", error.message);
    });
};
