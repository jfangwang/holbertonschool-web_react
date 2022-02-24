import React from 'react';
import logo from '../assets/Holberton_Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppLogo: {
    height: '25vh'
  },
  AppHeader: {
    justifyContent: 'left',
    alignItems: 'center',
    color: 'var(--red)',
    borderBottom: '4px red solid',
    flexDirection: 'row',
    textAlign: 'center',
    display: 'flex'
  },
});

export default function Header() {
  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} className={css(styles.AppLogo)} alt="holberton logo" />
      <h1>School Dashboard</h1>
    </div>
  );
}
