import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import logo from '../assets/Holberton_Logo.jpg';
import './Login.css';

function App() {
  return (
    /* Short Hand version of <React.Fragment> */
    <>
      <p>Login to access the full dashboard</p>
      <label for="email">Email</label>
      <input id="email" type="email"/>
      <label for="password">Password</label>
      <input id="password" type="password"/>
      <button id="ok_button">OK</button>
    </>
  );
}

export default App;
