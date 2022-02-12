import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import logo from '../assets/Holberton_Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="holberton logo" />
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email</label>
        <input id="email" type="email"/>
        <label for="password">Password</label>
        <input id="password" type="password"/>
        <button id="ok_button">OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
