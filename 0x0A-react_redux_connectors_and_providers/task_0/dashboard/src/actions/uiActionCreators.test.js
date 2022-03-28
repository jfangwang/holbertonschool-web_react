import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes.js';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators.js';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)


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
  it('login success API is working', () => {
    // loginRequest('johann.salva@holberton.nz', 'test')
    // fetchMock.mock("/login-success.json", 200);
    // fetch('/login-success.json').then((res) => {
    //   console.log(res)
    // })
    // fetchMock.restore();
    const store = mockStore({})
    jest.mock('node-fetch', () => require('fetch-mock').sandbox())
    fetchMock.get('/login-success.json', 200)
    store.dispatch(loginRequest('free@willy.com', 'baz'))
      .then(() => {
        const actions = store.getActions()
        expect(actions).toEqual('free@willy.com', 'baz')
      })

    fetchMock.restore();
    fetchMock.reset();
  })
})