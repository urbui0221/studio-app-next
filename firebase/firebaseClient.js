import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDriBmSHVMQIXAPqVAmHgnUg0rlkmgbqfE",
    authDomain: "website-form-8cd47.firebaseapp.com",
    projectId: "website-form-8cd47",
    storageBucket: "website-form-8cd47.appspot.com",
    messagingSenderId: "813297583460",
    appId: "1:813297583460:web:fe4c098f0cf6ebf14ee671",
    measurementId: "G-FZD5324SPS"
  };

export default () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}