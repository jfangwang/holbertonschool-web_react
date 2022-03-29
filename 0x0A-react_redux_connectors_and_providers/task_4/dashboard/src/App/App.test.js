/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { App, mapStateToProps } from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';

const courses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]

describe('App Test Suite', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
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
    const wrapper = shallow(<App displayDrawer={true} isLoggedIn={true}/>);
    expect(wrapper.find('Connect(Header)')).toHaveLength(1);
  });
  it('Contains Login Component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('Login')).toHaveLength(1);
  });
  it('Contains Footer Component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('Connect(Footer)')).toHaveLength(1);
  });
  it('CourseList is not displayed', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
  it('CourseList is not displayed', () => {
    const wrapper = shallow(<App listCourses={courses}/>);
    expect(wrapper.find("Login")).toHaveLength(1);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
  it('Login true', () => {
    const wrapper = shallow(<App listCourses={courses}/>);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  })
});
describe('Check states for isLoggedIn', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    const wrapper = shallow(<App />);
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('Login func updates the states correctly', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({
      user: {
        email: 'willy',
        password: 'free',
        isLoggedIn: true
      }
    })
    expect(wrapper.exists());
    expect(wrapper.state().user.email).toBe('willy');
    expect(wrapper.state().user.password).toBe('free');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });
});

describe('Redux Testing Suite', () => {
  it('mapStateToProps returns the correct object for drawer visible', () => {
    const state = {ui: fromJS({isNotificationDrawerVisible: true})};
    const result = mapStateToProps(state);
    expect(result.displayDrawer).toEqual(true);
  })
  it('mapStateToProps returns the correct object for logged in', () => {
    const state = {ui: fromJS({isUserLoggedIn: true})};
    const result = mapStateToProps(state);
    expect(result.isLoggedIn).toEqual(true);
  })
});