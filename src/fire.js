import firebase from 'firebase';

// Initialize Firebase
let config = {
    apiKey: "AIzaSyAdolkiFfazXwM6a-jSPmhdYykUTBjaDpQ",
    authDomain: "react-firebase-513a3.firebaseapp.com",
    databaseURL: "https://react-firebase-513a3.firebaseio.com",
    projectId: "react-firebase-513a3",
    storageBucket: "react-firebase-513a3.appspot.com",
    messagingSenderId: "191875281765"
};
const fire = firebase.initializeApp(config);

export default fire;