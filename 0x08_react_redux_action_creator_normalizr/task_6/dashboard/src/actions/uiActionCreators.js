import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes.js';

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