import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import { Map } from 'immutable'

const defaultState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT
}

export const notificationReducer = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: return {
      ...state,
      notifications: (action.data.map(item => {
        return {
          ...item,
          isRead: false
        }
      }))
    }
    case MARK_AS_READ: return {
      ...state,
      notifications: state.notifications.map((notifications) => {
        const list = {
          ...notifications,
        };
        if (notifications.id === action.index) {
          list.isRead = true
        }
        return list
      })
    }
    case SET_TYPE_FILTER: return {
      ...state,
      filter: NotificationTypeFilters[action.filter],
    }
    default: return (
      state
    )
  }
}