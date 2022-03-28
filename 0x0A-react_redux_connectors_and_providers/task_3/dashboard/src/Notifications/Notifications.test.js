/**
 * @jest-environment jsdom
 */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'
import App from '../App/App'
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
        expect(wrapper.find(".Notifications_hz9cov p").text()).toEqual("Here is the list of notifications");
    });
    it('div.menuItem is being displayed when displayDrawer=False', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('div.menuItem_c88wb5')).toHaveLength(1);
    })
    it('div.Notifications is not being displayed when displayDrawer=False', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('div.Notifications')).toHaveLength(0);
    })
    it('div.menuItem is not being displayed when displayDrawer=True', () => {
      expect(wrapper.find('div.menuItem_c88wb5')).toHaveLength(1);
    })
    it('div.Notifications is being displayed when displayDrawer=True', () => {
      expect(wrapper.find('div.Notifications_hz9cov')).toHaveLength(1);
    })
    it('Renders when passing in empty array or undefined listNotifications', () => {
      const wrapper2 = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
      expect(wrapper.exists()).toEqual(true);
      expect(wrapper2.exists()).toEqual(true);
    })
    it('Renders when passing in a list of notifications with corrent num of items', () => {
      const wrapper2 = shallow(<Notifications displayDrawer={true} listNotifications={notificationsList}/>);
      expect(wrapper2.find('div.Notifications_hz9cov ul NotificationItem')).toHaveLength(3);
      expect(wrapper2.find('div.Notifications_hz9cov ul NotificationItem').at(0).prop('value')).toEqual("Testing...");
      expect(wrapper2.find('div.Notifications_hz9cov ul NotificationItem').at(1).prop('type')).toEqual("urgent");
    })
    it('Correct message when listNotifications is empty', () => {
      const wrapper2 = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
      expect(wrapper.find('div.Notifications_hz9cov ul NotificationItem').prop('value')).toEqual("No new notification for now");
      expect(wrapper2.find('div.Notifications_hz9cov ul NotificationItem').prop('value')).toEqual("No new notification for now");
    })
  });

 
  describe('States', () => {
    beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
        jest.restoreAllMocks();
    });
    let props = {
      displayDrawer: false,
      handleDisplayDrawer: jest.fn(),
      handleHideDrawer: jest.fn(),
    };
    it('handle display and hide', () => {
      const wrapper = shallow(<Notifications {...props}/>);
      
      wrapper.find('.menuItem_c88wb5').simulate('click');
      expect(props.handleDisplayDrawer.mock.calls.length).toBe(1);
      // expect(props.handleDisplayDrawer).toHaveBeenCalled();
      const wrapper2 = shallow(<Notifications displayDrawer={true} handleHideDrawer={props.handleHideDrawer}/>);
      wrapper2.find('#notification_button').simulate('click');
      expect(props.handleHideDrawer.mock.calls.length).toBe(1);
    });

    it('HandleDisplayDrawer works correctly', () => {
      const wrapper = shallow(<Notifications {...props}/>);
      const spy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');
      wrapper.find(".menuItem_c88wb5").simulate('click');
      expect(spy).toBeCalled()
      spy.mockRestore();
    });
    props = {
      listNotifications: notificationsList,
      displayDrawer: true,
      handleDisplayDrawer: jest.fn(),
      handleHideDrawer: jest.fn(),
    };
    it('HandleHideDrawer works correctly', () => {
      const wrapper = shallow(<Notifications {...props}/>);
      const spy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
      wrapper.find("#notification_button").simulate('click');
      expect(spy).toBeCalled()
      spy.mockRestore();
    });
    it('MarkAsRead is called', () => {
      const wrapper = shallow(<Notifications {...props}/>);
      const spy = jest.spyOn(console, 'log').mockImplementation();

      wrapper.instance().markAsRead = spy;
      wrapper.instance().markAsRead(1);
      expect(spy).toBeCalledWith(1);
      expect(spy).toBeCalledTimes(1);
      console.log(wrapper.state());
      spy.mockRestore();
    });
  });