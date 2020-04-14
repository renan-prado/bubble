
import * as Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQPWUiCG4Uc19nCKCnG7YXSzamZ5QQi5s",
  authDomain: "bubble-86a39.firebaseapp.com",
  databaseURL: "https://bubble-86a39.firebaseio.com",
  projectId: "bubble-86a39",
  storageBucket: "bubble-86a39.appspot.com",
  messagingSenderId: "566130388273",
  appId: "1:566130388273:web:928b392b4a7f5e44bf1410",
  measurementId: "G-W6Z75E7FN1"
};

Firebase.initializeApp(firebaseConfig);

export const writeUserData = (userId, name, email) => {
  Firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
};


export const createUserWithEmailAndPassword = (email, password, callback = () => false) => {
  Firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(callback());
}

export const signInWithEmailAndPassword = (email, password, callback = () => false) => {
  Firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => callback(error))
    .then(() => callback(false));
}

export const userLogged = callback => {
  Firebase
    .auth()
    .onAuthStateChanged(function(user) {
      if (user) {

        callback({
          id: user.uid,
          email: user.email,
        });

      }
      else { callback(false) }
  });
}

export const logout = () => {
  Firebase
    .auth()
    .signOut();
}

export const readDocument = id => {
  var starCountRef = Firebase.database().ref('users/' + id + '/username');
  starCountRef.on('value', function(snapshot) {
    alert(snapshot.val());
  });

}


export default Firebase;