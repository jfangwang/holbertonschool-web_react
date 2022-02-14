import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Test Suite', () => {
    it('App renders without crashing', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists());
    });
    // it('Verify that App renders a div with the class App-body', () => {
    //   const wrapper = shallow(<App/>);
    //   expect(wrapper.find('div.App-body')).toHaveLength(1);
    // });
    it('Contains Notifications Component', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('Notifications')).toHaveLength(1);
    });
    it('Contains Header Component', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('Header')).toHaveLength(1);
    });
    it('Contains Login Component', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('Login')).toHaveLength(1);
    });
    it('Contains Footer Component', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('Footer')).toHaveLength(1);
    });
  });