import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'

describe('Notifications Test Suite', () => {
    it('Test Notifications renders without crashing', () => {
      const wrapper = shallow(<Notifications/>);
      expect(wrapper.exists());
    });
    it('Test renders three list items', () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find("ul").children()).toHaveLength(3);
      });
    it('Test renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find(".Notifications p").text()).toEqual("Here is the list of notifications");
    });
    it('Renders NotificationItem Component', () => {
      const wrapper = shallow(<Notifications/>);
      expect(wrapper.containsMatchingElement(<NotificationItem />)).toEqual(true);
    })
  });