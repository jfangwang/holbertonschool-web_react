import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from './uiActionTypes.js';
import fetch from 'node-fetch';

export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    }
  }
}
export function boundLogin(email, password) {
  dispatch(login(email, password))
}

export function logout() {
  return {
    type: LOGOUT,
  }
}
export function boundLogout() {
  dispatch(logout())
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  }
}
export function boundDisplayNotificationDrawer() {
  dispatch(displayNotificationDrawer())
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  }
}
export function boundHideNotificationDrawer() {
  dispatch(hideNotificationDrawer())
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  }
}
export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  }
}
export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    const lh8080 = 'http://localhost:8080/login-success.json'
    const lh3000 = 'http://localhost:3000/login-success.json'
    return fetch(lh8080)
      .then((r) => r.json())
      .then(() => dispatch(loginSuccess()))
      .catch(() => dispatch(loginFailure()))
  }
}