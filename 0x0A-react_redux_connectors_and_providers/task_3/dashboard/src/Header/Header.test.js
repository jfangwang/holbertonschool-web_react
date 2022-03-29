/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header } from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import {AppContext, logOut} from '../App/AppContext';

const user = {
  email: 'willy',
  password: 'freewilly',
}

describe('Header Test Suite', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    })
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('Header renders without crashing', () => {
      const wrapper = mount(<Header/>);
      expect(wrapper.exists());
    });
    it('Can find img tag with app-logo class', () => {
      const wrapper = mount(<Header user={user}/>);
      expect(wrapper.find('img')).toHaveLength(1);
      expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('logout section is not created', () => {
      const user = null
      const wrapper = mount(<Header user={user}/>);
      expect(wrapper.find('#logoutSection')).toHaveLength(0);
    });
    it('logout section is created', () => {
      const wrapper = mount(<Header user={user} />);
      expect(wrapper.find('#logoutSection')).toHaveLength(1);
    });
    it("mounts the Header component with a user defined (isLoggedIn is true and an email is set). The logoutSection is created", () => {
      const wrapper = shallow(<Header user={user} />);
  
      expect(wrapper.find("#logoutSection")).toHaveLength(1);
    });
  });