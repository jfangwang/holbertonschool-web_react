import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import { Map } from 'immutable'
import { notificationsNormalizer } from '../schema/notifications'

export const defaultState = {
  notifications: {},
  filter: NotificationTypeFilters.DEFAULT,
  loading: false,
}

export const notificationReducer = (state = Map(defaultState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);

      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });

      return state.mergeDeep(normalizedData);
    case MARK_AS_READ:
      return state.setIn(["messages", String(action.index), "isRead"], true);
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    case SET_LOADING_STATE:
      return state.set("loading", action.loading);
    default: return (
      state
    )
  }
}