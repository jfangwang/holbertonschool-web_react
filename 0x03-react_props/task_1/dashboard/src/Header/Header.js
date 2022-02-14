import React from 'react';
import logo from '../assets/Holberton_Logo.jpg';
import './Header.css';

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="holberton logo" />
      <h1>School Dashboard</h1>
    </div>
  );
}
