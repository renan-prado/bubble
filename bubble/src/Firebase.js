
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


export const saveProfile = (userId, username, bios, image) => {
  
  Firebase
    .database()
    .ref('users/' + userId)
    .set({
      image,
      username,
      bios,
      editName: true
    });

};

export const verifyChatCreate = (chatId, user1, user2) => {

  var starCountRef = Firebase.database().ref('chat/' + chatId);
  starCountRef.on('value', chat => {

    if(!chat.val()){
      Firebase
        .database()
        .ref('chat/' + chatId)
        .set({
          members: [user1, user2],
          msgs: false,
          notification: false,
        })
        .then(() => {

          Firebase
            .database()
            .ref('chat/' + chatId + '/notification/' + user1)
            .set({
              data: false,
              view: true
            })

          Firebase
            .database()
            .ref('chat/' + chatId + '/notification/' + user2)
            .set({
              data: false,
              view: true
            })

        });
    }
  
  });

  

};


export const sendMessageChat = (chatId, msg, userId) => {

  const date = Date.now();

  Firebase
    .database()
    .ref('chat/' + chatId + '/msgs/' + date)
    .set({
      date,
      msg,
      userId
    });
}

export const toLike = (postId, userId, liked) => {
  
  if(liked){
    let userRef = Firebase.database().ref('posts/' + postId + '/likes/' + userId);
    userRef.remove();
    return;
  }

  Firebase
    .database()
    .ref('posts/' + postId + '/likes/' + userId)
    .set({
      userId,
      data: Date.now()
    });
}

export const toPost = (userId, msg) => {

  const uuidv4 = () => {
    return 'xxxxxxxxxxxx4x'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const d = new Date();
  let year = d.getFullYear();
  let month = String(d.getMonth()).length === 1 ? '0' + d.getMonth() : d.getMonth();
  let day = String(d.getDate()).length === 1 ? '0' + d.getDate() : d.getDate();
  let hours = String(d.getHours()).length === 1 ? '0' + d.getHours() : d.getHours();
  let minutes = String(d.getMinutes()).length === 1 ? '0' + d.getMinutes() : d.getMinutes();
  let seconds =String(d.getSeconds()).length === 1 ? '0' + d.getSeconds() : d.getSeconds();
  let now = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;

  Firebase
    .database()
    .ref('posts/' + Date.now() + uuidv4())
    .set({
      userId,
      msg,
      likes: false,
      data: now
    });

};

export const createUserWithEmailAndPassword = (email, password, callback = () => false) => {
  Firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(user => {
      callback(user);
    });
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

export const readProfile = (id, callback) => {
  var starCountRef = Firebase.database().ref('users/' + id + '/');
  starCountRef.on('value', value => callback(value.val()));
}

export const getProfiles = callback => {
  var starCountRef = Firebase.database().ref('users/');
  starCountRef.on('value', value => callback(value.val()));
}

export const getPosts = callback => {
  var starCountRef = Firebase.database().ref('posts/');
  starCountRef.on('value', value => callback(value.val()));
}

export const getMessages = (chatId, callback) => {
  var starCountRef = Firebase.database().ref('chat/' + chatId);
  starCountRef
  .orderByChild('data')
  .on('value', value => callback(value.val()));
}


export default Firebase;