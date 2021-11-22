
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import {
//    seedDatabase
// } from "../seed"


// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyABVMHTwkNuxFehtrFESpfoTuGkZvs7emM",
   authDomain: "netflix-yt-a80b9.firebaseapp.com",
   projectId: "netflix-yt-a80b9",
   storageBucket: "netflix-yt-a80b9.appspot.com",
   messagingSenderId: "992985680439",
   appId: "1:992985680439:web:efb98394b4a36e64a74db2"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

//seedDatabase(app);

export {
   Firebase
};