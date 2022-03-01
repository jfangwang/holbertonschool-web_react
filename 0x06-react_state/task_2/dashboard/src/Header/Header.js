import React, { Component } from 'react';
import logo from '../assets/Holberton_Logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

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
  logout: {
    cursor: 'pointer',
  },
  welcome: {
    margin: '1rem 0 0 0',
  },
});

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let value = this.context;
    return (
      <>
        <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppLogo)} alt="holberton logo" />
          <h1>School Dashboard</h1>
        </div>
        { value.user.isLoggedIn && (
          <div className={css(styles.welcome)} id='logoutSection'>
            welcome <b>{value.user.email}</b> <a className={css(styles.logout)} onClick={value.logOut}>(logout)</a>
          </div>
        )}
      </>
    );
  }
}

Header.contextType = AppContext;
export default Header;