import * as firebase from 'firebase';  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAd9RK6CR6W-KpbjFGMYKr7pL5DrQVTseQ",
    authDomain: "mydairyapp.firebaseapp.com",
    databaseURL: "https://mydairyapp.firebaseio.com",
    projectId: "mydairyapp",
    storageBucket: "",
    messagingSenderId: "462558769579"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref("/notes");