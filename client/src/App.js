import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ApplicationViews from "./views/ApplicationViews";
import { onLoginStatusChange, me } from "./modules/authManager";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      me().then(setUserProfile);
    } else {
      setUserProfile(null);
    }
  }, [isLoggedIn]);

  return (
    <Router>
        <div className='w-screen h-auto flex flex-col'>
          <Header isLoggedIn={isLoggedIn} userProfile={userProfile} className='' />
          <div className='mt-14 md:mt-20 w-full'>
            <ApplicationViews isLoggedIn={isLoggedIn} />
          </div>
        </div>
    </Router>
  );
}

export default App;



