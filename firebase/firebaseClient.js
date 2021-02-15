import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAVQIwfajtvjWKQF1Tbm7s_f7KFMs2JM-E",
    authDomain: "studio-9946d.firebaseapp.com",
    projectId: "studio-9946d",
    storageBucket: "studio-9946d.appspot.com",
    messagingSenderId: "282819877923",
    appId: "1:282819877923:web:e11cf946e6c01e3a096596"
  }; 

export default () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}