import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyC_MN8MMeyqbAKlZgM5NWN-inpA9JSqvhM",
    authDomain: "fir-chat-93305.firebaseapp.com",
    projectId: "fir-chat-93305",
    storageBucket: "fir-chat-93305.appspot.com",
    messagingSenderId: "797234183272",
    appId: "1:797234183272:web:e2630d0352fdb9f6258fdd"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        firestore,
        auth
    }}>
        <App />
    </Context.Provider>
);

