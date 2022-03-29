import { Map } from 'immutable';
import { createSelector } from "reselect";

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
export const getUnreadNotificationsByType = createSelector(
  state => state.notifications,
  (notifications) => {
    const messages = notifications.get("messages");
    const filter = notifications.get("filter");
    let filtered = messages;

    if (messages) {
      if (filter === "URGENT") {
        console.log("URGENT")
        filtered = {}
        Object.keys(messages).forEach((item) => {
          if (messages[item].isRead == false && messages[item].type === "urgent") {
            filtered[item] = messages[item]
          }
        });
      } else {
        console.log("DEFAULT")
        Object.keys(filtered).forEach((item) => {
          if (filtered[item].isRead == true) {
            delete filtered[item];
          }
        });
      }
    }
    console.log(filtered)
    return filtered;
  }
)