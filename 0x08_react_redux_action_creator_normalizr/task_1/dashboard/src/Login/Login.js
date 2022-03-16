import React, {Component} from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import logo from '../assets/Holberton_Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  label: {
    padding: '8px 4px 8px 4px',
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }
  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }
  handleChangeEmail(e) {
    if (e.target.value === '' || this.state.password === '') {
      this.setState({enableSubmit: false})
    } else {
      this.setState({enableSubmit: true})
    }
    this.setState({email: e.target.value})
  }
  handleChangePassword(e) {
    if (e.target.value === '' || this.state.email === '') {
      this.setState({enableSubmit: false})
    } else {
      this.setState({enableSubmit: true})
    }
    this.setState({password: e.target.value})
  }
  render() {
    return (
      <>
      <p>Login to access the full dashboard</p>
      <form onSubmit={this.handleLoginSubmit}>
        <label className={css(styles.label)} htmlFor="email">Email</label>
        <input id="email" type="email" value={this.state.email} onChange={this.handleChangeEmail}/>
        <label className={css(styles.label)} htmlFor="password">Password</label>
        <input id="password" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
        <button type="submit" id="ok_button" disabled={!this.state.enableSubmit}>OK</button>
      </form>
    </>
    )
  }
}

export default Login