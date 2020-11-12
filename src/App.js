//refer to mod login/logout-2 bottom of pg for navbar guidance

import React, { useState, useEffect } from 'react'; 
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login'; 
import Auth from './components/auth/Auth';  



function App() {

  const [sessionToken, setSessionToken] = useState(''); 

  useEffect( () => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  
  const updateToken=(newToken) => {
    localStorage.setItem('token', newToken); 
    setSessionToken(newToken); 
    console.log(sessionToken);
  }

  const clearToken= () => {
    localStorage.clear(); 
    setSessionToken(''); 
  }


  return (
   <div>
     <h1>You are now viewing App.js</h1>
     <Auth updateToken={updateToken} />
     {/* {navbar goes here clickLogout={clearToken}/>} */}
   </div>
  );
}

export default App;
