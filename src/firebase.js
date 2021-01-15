import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBC1ESzr7TsTvrcPWjfNQJ4Vddw507GeKQ",
    authDomain: "snapchat-clone-hari.firebaseapp.com",
    projectId: "snapchat-clone-hari",
    storageBucket: "snapchat-clone-hari.appspot.com",
    messagingSenderId: "936282878672",
    appId: "1:936282878672:web:704c7870bfba59eb1ca4d5",
    measurementId: "G-NYBMVNZ0VC"
};
const firebaseApp =firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore();
const auth =firebase.auth();
const storage=firebase.storage();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth,storage,provider}