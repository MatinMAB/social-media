import React, { useState, useEffect, useContext } from "react";

//axios
import axios from "axios";

//Chat Engine
import { ChatEngine } from "react-chat-engine";

//Router
import { useNavigate } from "react-router-dom";

//Firebase API
import { auth } from "../../Firebase";

//Styles
import style from "./Chat.module.css";

//Components
import Navbar from "./Navbar/Navbar";

//Context
import { AuthContext } from "../../context/AuthContextProvider";

const Chat = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      Navigate("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "d6ef72d6-4449-4f31-915e-113172e347f1",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => setLoading(false))
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": "e4a56c55-8ac6-4852-a0f0-c69871aab052",
              },
            })
            .then(() => setLoading(false))
            .catch((err) => console.log(err));
        });
      });
  }, [user, Navigate]);

  const getFile = async (url) => {
    const res = await fetch(url);
    const data = await res.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    Navigate("/");
  };

  if (loading || !user) return <h2 style={{ direction: "ltr", textAlign: "center", marginTop: "50px" }}>Loading...</h2>;

  return (
    <div>
      <Navbar logout={logoutHandler} />

      <ChatEngine 
        height="100vh" 
        projectID="d6ef72d6-4449-4f31-915e-113172e347f1" 
        userName={user.email} 
        userSecret={user.uid}
        
       />
    </div>
  );
};

export default Chat;
