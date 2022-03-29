/**
 * @jest-environment jsdom
 */

import React, { Component } from 'react';
import logo from '../assets/Holberton_Logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/uiActionCreators'

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

export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {user, logout} = this.props
    return (
      <>
        <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppLogo)} alt="holberton logo" />
          <h1>School Dashboard</h1>
        </div>
        { user && (
          <div className={css(styles.welcome)} id='logoutSection'>
            welcome <b>{user.email}</b> <a className={css(styles.logout)} onClick={logout}>(logout)</a>
          </div>
        )}
      </>
    );
  }
}

Header.contextType = AppContext;

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  }
}

const mapDispatchToProps = {
  logout,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);