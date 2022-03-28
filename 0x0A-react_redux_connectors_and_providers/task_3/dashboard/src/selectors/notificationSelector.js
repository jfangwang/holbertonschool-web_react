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
  const notifications = state.get('notifications').toJS();
  Object.keys(notifications).forEach((item) => {
    if (notifications[item].isRead == true) {
      delete notifications[item];
    }
  });
  return (Map(notifications));
}
