import React from "react";

//Styles
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={style.container}>
      <div className={style.nav}>
        <h3>برنامه پیامرسان من</h3>
        <button onClick={() => props.logout()}>خروج</button>
      </div>
    </div>
  );
};

export default Navbar;
