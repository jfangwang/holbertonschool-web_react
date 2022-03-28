import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/uiActionTypes';
import { Map } from 'immutable'

export const defaultState = {
  user: {},
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false
}

export const uiReducer = (state = Map(defaultState), action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true);
    case LOGIN_FAILURE || LOGOUT:
      return state.set("isUserLoggedIn", false);
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);
    case LOGIN:
      return state.set("user", action.user);
    case LOGOUT:
      return state.set("isUserLoggedIn", false).set("user", null);
    default: return (
      state
    )
  }
}