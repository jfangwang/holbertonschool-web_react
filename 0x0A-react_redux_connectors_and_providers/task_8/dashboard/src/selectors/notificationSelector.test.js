import { filterTypeSelected, getNotifications, getUnreadNotificationsByType } from '../selectors/notificationSelector'
import { fromJS, isMap } from 'immutable'

const state = {
  filter: "DEFAULT",
  notifications: {
    "1": {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    "2": {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    "3": {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    }
  }
}

const stateWithUnread = {
  filter: "DEFAULT",
  notifications: {
    "1": {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    "2": {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available"
    },
    "3": {
      id: 3,
      isRead: true,
      type: "urgent",
      value: "New data available"
    }
  }
}

describe('notification selectors test suite', () => {
  it('return the current states filter attribute with default', () => {
    expect(filterTypeSelected(fromJS(state))).toBe('DEFAULT');
  });
  it('return the current states notifications attribute', () => {
    expect(isMap(getNotifications(fromJS(state)))).toBe(true);
    expect(getNotifications(fromJS(state)).toJS()).toEqual(state.notifications);
  });
  it('return the current states unread notifications', () => {
    const expectedUnreadNotifications = [
      {
        id: 1,
        isRead: false,
        type: "default",
        value: "New course available"
      }
    ]
    expect(getUnreadNotificationsByType(fromJS(stateWithUnread)).toJS()).toEqual(expectedUnreadNotifications);
  });
})