import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/uiActionTypes';

const defaultState = {
  user: {},
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false
}

export const uiReducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS: return {
      ...state,
      isUserLoggedIn: true
    }
    case LOGIN_FAILURE || LOGOUT: return {
      ...state,
      isUserLoggedIn: false
    }
    case DISPLAY_NOTIFICATION_DRAWER: return {
      ...state,
      isNotificationDrawerVisible: true
    }
    case HIDE_NOTIFICATION_DRAWER: return {
      ...state,
      isNotificationDrawerVisible: false
    }
    default: return (
      state
    )
  }
}