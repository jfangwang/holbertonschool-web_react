import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

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
    it('CourseList is not displayed', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find(CourseList)).toHaveLength(0);
    });
    it('CourseList is not displayed', () => {
      const wrapper = shallow(<App isLoggedIn={true}/>);
      expect(wrapper.find(Login)).toHaveLength(0);
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });
  