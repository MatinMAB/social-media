import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDI7aIIOj3Ih1sX6EWronU3deR14qE91BU",
    authDomain: "social-media-7b4f4.firebaseapp.com",
    projectId: "social-media-7b4f4",
    storageBucket: "social-media-7b4f4.appspot.com",
    messagingSenderId: "575583185081",
    appId: "1:575583185081:web:928bf4030b2b7dec151368",
  })
  .auth();
