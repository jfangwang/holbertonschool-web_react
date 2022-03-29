/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import {Footer} from './Footer';
import {AppContext} from '../App/AppContext';

describe('Footer Test Suite', () => {
    it('Footer renders without crashing', () => {
      const wrapper = shallow(<Footer/>);
      expect(wrapper.exists());
    });
    it('Check if Footer contains text: Copyright', () => {
      const wrapper = mount(<Footer/>);
      expect(wrapper.text()).toContain("Copyright");
    });
    it('link is not displayed when the user is logged out within the context', () => {
      const wrapper = mount(<Footer user={null}/>);
      expect(wrapper.text()).not.toContain("Contact us");
      expect(wrapper.find('.App-footer a').exists()).toBe(false);
    });
    it('link is displayed when the user is logged in within the context', () => {
      const dummy = {user: {email: "willy@gmail.com", password: "freewilly", isLoggedIn: true}, logOut: () => {}}
      const wrapper = mount(<Footer user={dummy}/>);
      expect(wrapper.text()).toContain("Contact us");
      expect(wrapper.find('.App-footer a').exists()).toBe(true);
    });
  });