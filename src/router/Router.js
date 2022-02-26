import React from 'react';

//Router
import {Routes , Route} from "react-router-dom";

//Components
import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default Router;