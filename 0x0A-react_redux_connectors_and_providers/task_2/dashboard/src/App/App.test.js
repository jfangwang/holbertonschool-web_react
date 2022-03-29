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


describe('Redux Testing Suite', () => {
  it('mapStateToProps returns the correct object', () => {
    const state = fromJS({isUserLoggedIn: true});
    const result = mapStateToProps(state);
    expect(result.isLoggedIn).toEqual(true);
  })
});