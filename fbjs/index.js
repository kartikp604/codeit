var config = {
  apiKey: "AIzaSyAV1EgNWYyAYM8Hob3lvyUwuUcqiV4-_1M",
  authDomain: "codeit-07.firebaseapp.com",
  projectId: "codeit-07",
  storageBucket: "codeit-07.appspot.com",
  messagingSenderId: "196552393485",
  appId: "1:196552393485:web:b937c03869f210968fa644",
  measurementId: "G-2DN3BFL7L4"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
console.log("firebase");

var database=firebase.database();
