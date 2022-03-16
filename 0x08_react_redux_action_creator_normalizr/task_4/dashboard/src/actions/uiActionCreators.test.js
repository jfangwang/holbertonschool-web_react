import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes.js';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators.js';

describe('uiActionCreators Test Suite', () => {
  it('login is working', () => {
    const test = login("asdf@gmail.com", "asdf")
    const data = {
      type: LOGIN,
      user: {
        email: "asdf@gmail.com",
        password: "asdf",
      }
    }
    expect(test).toEqual(data);
  });
  it('logout is working', () => {
    const test = logout();
    const data = {
      type: LOGOUT,
    }
    expect(test).toEqual(data);
  });
  it('displayNotificationDrawer is working', () => {
    const test = displayNotificationDrawer();
    const data = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    }
    expect(test).toEqual(data);
  });
  it('hideNotificationDrawer is working', () => {
    const test = hideNotificationDrawer();
    const data = {
      type: HIDE_NOTIFICATION_DRAWER,
    }
    expect(test).toEqual(data);
  });
})