//refer to mod login/logout-2 bottom of pg for navbar guidance

import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Auth from './components/auth/Auth';
import Home from './components/Home/Home';


function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken); //state var will not display updated value if called immediately after being set
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  //adding func to take user to Home once signed/logged in with a token
  function protectedViews() {
    return (sessionToken === localStorage.getItem('token') ? <Home token={sessionToken} /> : <Auth updateToken={updateToken} />)
  }


  return (

    
      <div>
        <h1>You are now viewing App.js</h1>
        {/* <Auth updateToken={updateToken} /> */}
        {protectedViews()}
        {/* {navbar goes here clickLogout={clearToken}/>} */}
      </div>
 

  );
}

export default App;
