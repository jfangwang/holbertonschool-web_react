import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

const notificationsList = [
  {id: 1, type: "default", value: "Testing..."},
  {id: 2, type: "urgent", value: "Test 2"},
  {id: 3, type: "urgent", html: {__html: getLatestNotification()}, value:"Test 3"}
]

describe('Notifications Test Suite', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true}/>);
      StyleSheetTestUtils.suppressStyleInjection();
    })
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('Test Notifications renders without crashing', () => {
      const wrapper = shallow(<Notifications/>);
      expect(wrapper.exists()).toEqual(true);
    });
    it('Test renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notificationsList}/>);
        expect(wrapper.find("ul").children()).toHaveLength(3);
      });
    it('Test renders the text Here is the list of notifications', () => {
        expect(wrapper.find(".Notifications p").text()).toEqual("Here is the list of notifications");
    });
    it('div.menuItem is being displayed when displayDrawer=False', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('div.menuItem')).toHaveLength(1);
    })
    it('div.Notifications is not being displayed when displayDrawer=False', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('div.Notifications')).toHaveLength(0);
    })
    it('div.menuItem is not being displayed when displayDrawer=True', () => {
      expect(wrapper.find('div.menuItem')).toHaveLength(1);
    })
    it('div.Notifications is being displayed when displayDrawer=True', () => {
      expect(wrapper.find('div.Notifications')).toHaveLength(1);
    })
    it('Renders when passing in empty array or undefined listNotifications', () => {
      const wrapper2 = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
      expect(wrapper.exists()).toEqual(true);
      expect(wrapper2.exists()).toEqual(true);
    })
    it('Renders when passing in a list of notifications with corrent num of items', () => {
      const wrapper2 = shallow(<Notifications displayDrawer={true} listNotifications={notificationsList}/>);
      expect(wrapper2.find('div.Notifications ul NotificationItem')).toHaveLength(3);
      expect(wrapper2.find('div.Notifications ul NotificationItem').at(0).prop('value')).toEqual("Testing...");
      expect(wrapper2.find('div.Notifications ul NotificationItem').at(1).prop('type')).toEqual("urgent");
    })
    it('Correct message when listNotifications is empty', () => {
      const wrapper2 = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
      expect(wrapper.find('div.Notifications ul NotificationItem').prop('value')).toEqual("No new notification for now");
      expect(wrapper2.find('div.Notifications ul NotificationItem').prop('value')).toEqual("No new notification for now");
    })
    it('when updating the props of the component with the same list, the component doesn’t rerender', () => {
      const list = [
        {id: 1, type: 'default', value: 'Testing'},
        {id: 2, type: 'urgent', value: 'Testing 2'},
      ];
      const wrapper = shallow(
        <Notifications listNotifications={list} />
      );
      const update = jest.spyOn(
        Notifications.prototype,
        'shouldComponentUpdate'
      );
      wrapper.setProps({listNotifications: list});
      expect(update).toHaveBeenCalled();
      expect(update).toHaveLastReturnedWith(false);
      jest.restoreAllMocks();
    })
    it(' when updating the props of the component with a longer list, the component does rerender', () => {
      const list1 = [
        {id: 1, type: 'default', value: 'Testing'},
        {id: 2, type: 'urgent', value: 'Testing 2'},
      ];
      const list2 = [
        {id: 1, type: 'default', value: 'Testing'},
        {id: 2, type: 'urgent', value: 'Testing 2'},
        {id: 3, type: 'urgent', value: 'Testing 3'}
      ];
      const wrapper = shallow(
        <Notifications listNotifications={list1} />
      );
      const update = jest.spyOn(
        Notifications.prototype,
        'shouldComponentUpdate'
      );
      wrapper.setProps({listNotifications: list2});
      expect(update).toHaveBeenCalled();
      expect(update).toHaveLastReturnedWith(true);
      jest.restoreAllMocks();
    })
  });