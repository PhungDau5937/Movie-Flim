// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDytBiezT9krTYsZQ_C4ZgzTWVj5yBjRbY",
  authDomain: "netflix-film-e6087.firebaseapp.com",
  projectId: "netflix-film-e6087",
  storageBucket: "netflix-film-e6087.firebasestorage.app",
  messagingSenderId: "692049860024",
  appId: "1:692049860024:web:a9e73ce75bb7975b9aeb4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log("error: ",error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log("error: ",error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = () =>{
    signOut(auth);
}

export {auth, db, login, logout, signup}