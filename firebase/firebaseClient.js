import firebase from 'firebase/app'

// const firebaseConfig = {
//     apiKey: "AIzaSyAVQIwfajtvjWKQF1Tbm7s_f7KFMs2JM-E",
//     authDomain: "studio-9946d.firebaseapp.com",
//     projectId: "studio-9946d",
//     storageBucket: "studio-9946d.appspot.com",
//     messagingSenderId: "282819877923",
//     appId: "1:282819877923:web:e11cf946e6c01e3a096596"
//   }; 

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  }; 

export default () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}
