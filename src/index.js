import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContex from './context/firebase';
import{firebase,FieldValues} from "./lib/firebase";
import "./index.css"
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseContex.Provider value={(firebase,FieldValues)}><App/>
    </FirebaseContex.Provider>
);

