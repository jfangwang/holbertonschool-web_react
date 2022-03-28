import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import 'node-fetch'

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  }
}
export function boundMarkAsAread(index) {
  dispatch(markAsAread(index));
}
export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  }
}
export function boundSetNotificationFilter(filter) {
  dispatch(setNotificationFilter(filter));
}

export const setLoadingState = (loading) => {
  return {
    type: SET_LOADING_STATE,
    loading,
  }
}
export const setNotifications = (notifications) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications,
  }
}
export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('./notifications.json')
      .then((result) => result.json())
      .then((data) => dispatch(setNotifications(data)))
      .catch((err) => {})
      .finally(() => dispatch(setLoadingState(false)));
  }
}