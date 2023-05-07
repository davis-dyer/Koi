import { Spinner } from 'reactstrap';
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ApplicationViews from "./views/ApplicationViews";
import { onLoginStatusChange, me } from "./modules/authManager";
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
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

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <Router>
        <div className='w-screen h-auto flex flex-col'>
          <Header isLoggedIn={isLoggedIn} userProfile={userProfile} className='' />
          <div className='mt-14 md:mt-20 w-full'>
            <ApplicationViews isLoggedIn={isLoggedIn} />
          </div>
          <Footer />
        </div>
    </Router>
  );
}

export default App;



