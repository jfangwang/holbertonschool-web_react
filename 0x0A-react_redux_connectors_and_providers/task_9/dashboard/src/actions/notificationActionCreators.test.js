import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notificationActionCreators Test Suite', () => {
  it('markAsAread action is working', () => {
    const test = markAsAread(1);
    expect(test).toEqual({ type: MARK_AS_READ, index: 1, })
  });
  it('setNotificationFilter action is working', () => {
    const test = setNotificationFilter(NotificationTypeFilters.DEFAULT)
    expect(test).toEqual({ type: SET_TYPE_FILTER, filter: "DEFAULT" });
  });
})