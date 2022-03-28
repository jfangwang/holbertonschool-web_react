/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { mapStateToProps } from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { uiReducer } from '../reducers/uiReducer';

const defaultState = {
  user: {},
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false
}

const store = createStore(uiReducer, defaultState)


// describe('App Test Suite', () => {
//   beforeEach(() => {
//     StyleSheetTestUtils.suppressStyleInjection();
//   });
//   afterEach(() => {
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
//   });
//   it('App renders without crashing', () => {
//     const wrapper = shallow(<App store={store}/>);
//     expect(wrapper.exists());
//   });
//   it('Verify that App renders a div with the class App-body', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.find('div.App-body')).toHaveLength(1);
//   });
//   it('Contains Notifications Component', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.find('Notifications')).toHaveLength(1);
//   });
//   it('Contains Header Component', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.find('Header')).toHaveLength(1);
//   });
//   it('Contains Login Component', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.find('Login')).toHaveLength(1);
//   });
//   it('Contains Footer Component', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.find('Footer')).toHaveLength(1);
//   });
//   it('CourseList is not displayed', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.find(CourseList)).toHaveLength(0);
//   });
//   it('CourseList is not displayed', () => {
//     const wrapper = shallow(<App isLoggedIn={true}/>);
//     expect(wrapper.find(Login)).toHaveLength(1);
//     expect(wrapper.find(CourseList)).toHaveLength(0);
//   });
//   it('Login true', () => {
//     const wrapper = shallow(<App isLoggedIn={true}/>);
//     expect(wrapper.find('Login')).toHaveLength(1);
//     expect(wrapper.find('CourseList')).toHaveLength(0);
//   })
//   it('displayDrawer', () => {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.state('displayDrawer')).toEqual(false);
//     wrapper.instance().handleDisplayDrawer();
//     expect(wrapper.state('displayDrawer')).toEqual(true);
//     wrapper.instance().handleHideDrawer();
//     expect(wrapper.state('displayDrawer')).toEqual(false);
//   })
// });
// describe('Check states for isLoggedIn', () => {
//   beforeEach(() => {
//     StyleSheetTestUtils.suppressStyleInjection();
//     const wrapper = shallow(<App />);
//   });
//   afterEach(() => {
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
//   });
//   it('Login func updates the states correctly', () => {
//     const wrapper = shallow(<App/>);
//     wrapper.setState({
//       user: {
//         email: 'willy',
//         password: 'free',
//         isLoggedIn: true
//       }
//     })
//     expect(wrapper.exists());
//     expect(wrapper.state().user.email).toBe('willy');
//     expect(wrapper.state().user.password).toBe('free');
//     expect(wrapper.state().user.isLoggedIn).toBe(true);
//   });
//   it('LogOut func updates the states correctly', () => {
//     const wrapper = mount(<App/>);
//     expect(wrapper.exists());
//     wrapper.state().logOut();
//     expect(wrapper.state().user.email).toBe('');
//     expect(wrapper.state().user.password).toBe('');
//     expect(wrapper.state().user.isLoggedIn).toBe(false);
//   });
// });
describe('Redux Testing Suite', () => {
  it('mapStateToProps returns the correct object', () => {
    const state = fromJS({isUserLoggedIn: true});
    const result = mapStateToProps(state);
    expect(result.isLoggedIn).toEqual(true);
  })
  it('mapStateToProps returns the correct object from displayDrawer', () => {
    const state = fromJS({isNotificationDrawerVisible: true});
    const result = mapStateToProps(state);
    expect(result.displayDrawer).toEqual(true);
  })
});