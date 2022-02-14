import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'

describe('Notifications Test Suite', () => {
    it('Test Notifications renders without crashing', () => {
      const wrapper = shallow(<Notifications/>);
      expect(wrapper.exists());
    });
    it('Test renders three list items', () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find("li")).toHaveLength(3);
      });
    it('Test renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find(".Notifications p").text()).toEqual("Here is the list of notifications");
    });
    
  });