import { Map } from 'immutable';
import { createSelector } from 'reselect';

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

const getNotificationsSelector = (state) => state.notifications;
const selectSelf = (state) => state

export const getUnreadNotificationsByType = createSelector(
  selectSelf,
  (state) => {
    const messages = state.get("notifications");
    const filter = state.get('filter');
    // Object.keys(notifications).forEach((item) => {
    //   if (notifications[item].isRead == true) {
    //     delete notifications[item];
    //   }
    // });
    // return (Map(notifications));
    if (messages) {
      let filtered;

      if (filter === "URGENT") {
        filtered = messages
          .valueSeq()
          .filter(
            (value) =>
              value.get("isRead") === false && value.get("type") === "urgent"
          );
      } else {
        filtered = messages
          .valueSeq()
          .filter((value) => value.get("isRead") === false);
      }

      return filtered;
    }
    return messages;
  }
)