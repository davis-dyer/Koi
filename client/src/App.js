import { Spinner } from 'reactstrap';
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ApplicationViews from "./views/ApplicationViews";
import { BrowserRouter } from "react-router-dom";
import { onLoginStatusChange, me } from "./modules/authManager";

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

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} userProfile={userProfile} />
        <ApplicationViews isLoggedIn={isLoggedIn} />
          <p className='border border-black'>Hello World</p>
      </BrowserRouter>
    </div>
  );
}

export default App;



