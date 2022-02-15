import React from 'react'
import { shallow } from 'enzyme'
import Notifications from './Notifications'
import NotificationItem from './NotificationItem'

describe('Notifications Test Suite', () => {
    it('Test Notifications renders without crashing', () => {
      const wrapper = shallow(<Notifications/>);
      expect(wrapper.exists()).toEqual(true);
    });
    it('Test renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find("ul").children()).toHaveLength(3);
      });
    it('Test renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find(".Notifications p").text()).toEqual("Here is the list of notifications");
    });
    it('Renders NotificationItem Component when True', () => {
      const wrapper = shallow(<Notifications displayDrawer={true}/>);
      expect(wrapper.containsMatchingElement(<NotificationItem />)).toEqual(true);
    })
    it('div.menuItem is being displayed when displayDrawer=False', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('div.menuItem')).toHaveLength(1);
    })
    it('div.Notifications is not being displayed when displayDrawer=False', () => {
      const wrapper = shallow(<Notifications displayDrawer={false}/>);
      expect(wrapper.find('div.Notifications')).toHaveLength(0);
    })
    it('div.menuItem is not being displayed when displayDrawer=True', () => {
      const wrapper = shallow(<Notifications displayDrawer={true}/>);
      expect(wrapper.find('div.menuItem')).toHaveLength(1);
    })
    it('div.Notifications is being displayed when displayDrawer=True', () => {
      const wrapper = shallow(<Notifications displayDrawer={true}/>);
      expect(wrapper.find('div.Notifications')).toHaveLength(1);
    })
  });