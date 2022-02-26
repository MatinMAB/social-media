import React, { useEffect, useState } from "react";

//Router
import { useNavigate } from "react-router-dom";

//Firebase API
import { auth } from "../Firebase";

//Context provider
export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
      setLoading(false);
      if (user) {
        Navigate("/chat");
      }
    });
  }, [user, Navigate]);

  return (
  <AuthContext.Provider value={user}>
    {!loading && props.children}
  </AuthContext.Provider>
);
};

export default AuthContextProvider;
