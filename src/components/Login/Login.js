import React from "react";

//Firebase API
import firebase from "firebase/app";
import {auth} from "../../Firebase"

//Styles
import style from "./Login.module.css";

//Icons
import googleIcon from "../../assets/images/google-svgrepo-com.svg"

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h2>از اینکه مارو انتخاب کردید سپاسگزاریم</h2>
        <div className={style.googleButton} onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <img src={googleIcon} alt="Google Icon"/> ورود از طریق گوگل
        </div>
      </div>
    </div>
  );
};

export default Login;
