import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg'
import Routes from './routes';

function App() {
  

  // function handleEmailChange(event){
  //   setEmail(event.target.value);
  // }

  return (
    <div className="container">
      <img src={logo} alt="Beapps" />
      <div className="content">
        <Routes />
        
      </div>
    </div>
  );
}

export default App;
