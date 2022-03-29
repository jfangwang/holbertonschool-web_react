import { Map } from 'immutable';
export const filterTypeSelected = (state) => {
  const filter = state.get('filter');
  return (filter);
}
export const getNotifications = (state) => {
  const notifications = state.get('notifications');
  return (Map(notifications));
}
export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.get('messages')
  let filtered = notifications
  if (notifications) {
    Object.keys(filtered).forEach((item) => {
    if (filtered[item].isRead == true) {
      delete filtered[item];
    }
  });
  }
  return (filtered);
}
