import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import logo from '../assets/Holberton_Logo.jpg';
import './Footer.css';
import { AppContext } from '../App/AppContext';

export default function Footer() {
  return (
    <AppContext.Consumer>
      {({user, logOut}) => (
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          {user.isLoggedIn && <p><a>Contact us</a></p>}
      </div>
      )}
    </AppContext.Consumer>
  );
}
