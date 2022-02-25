import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import logo from '../assets/Holberton_Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  label: {
    padding: '8px 4px 8px 4px',
  },
  margin: {
    
  }
});

export default function Login() {
  return (
    /* Short Hand version of <React.Fragment> */
    <>
      <p>Login to access the full dashboard</p>
      <label className={css(styles.label)} htmlFor="email">Email</label>
      <input id="email" type="email"/>
      <label className={css(styles.label)} htmlFor="password">Password</label>
      <input id="password" type="password"/>
      <button id="ok_button">OK</button>
    </>
  );
}
