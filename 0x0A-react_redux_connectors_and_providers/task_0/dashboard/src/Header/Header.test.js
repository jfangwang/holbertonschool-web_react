/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import {AppContext, logOut} from '../App/AppContext';

const user = {
  email: 'willy',
  password: 'freewilly',
  isLoggedIn: true,
}

describe('Header Test Suite', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    })
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('Header renders without crashing', () => {
      const wrapper = mount(<AppContext.Provider value={{user, logOut}}><Header/></AppContext.Provider>);
      expect(wrapper.exists());
    });
    it('Can find img tag with app-logo class', () => {
      const wrapper = mount(<AppContext.Provider value={{user, logOut}}><Header/></AppContext.Provider>);
      expect(wrapper.find('img')).toHaveLength(1);
      expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('logout section is not created', () => {
      const user = {
        email: '',
        password: '',
        isLoggedIn: false,
      }
      const wrapper = mount(<AppContext.Provider value={{user, logOut}}><Header/></AppContext.Provider>);
      expect(wrapper.find('#logoutSection')).toHaveLength(0);
    });
    it('logout section is created', () => {
      const wrapper = mount(<AppContext.Provider value={{user, logOut}}><Header/></AppContext.Provider>);
      expect(wrapper.find('#logoutSection')).toHaveLength(1);
    });
    it('Clicking on logout works with spy', () => {
      const dummy = {user: {email: "willy@gmail.com", password: "freewilly", isLoggedIn: true}, logOut: () => {}}
      const spy = jest.spyOn(dummy, 'logOut');
      const wrapper = mount(<AppContext.Provider value={dummy}><Header/></AppContext.Provider>);
      wrapper.find('#logoutSection a').simulate('click');
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    });
  });