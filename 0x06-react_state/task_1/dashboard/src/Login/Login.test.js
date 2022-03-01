/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login Test Suite', () => {
    beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    })
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('Login renders without crashing', () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.exists());
    });
    it('2 Input Tags', () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.find('input')).toHaveLength(2);
      expect(wrapper.find('label')).toHaveLength(2);
    });
});

describe('States Test', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })
  afterEach(() => {
      StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('button is disabled when form is empty', () => {
    const wrapper = shallow(<Login isLoggedIn={false}/>);
    // expect(wrapper.state('isLoggedIn')).toEqual(false);
    expect(wrapper.find('#ok_button').prop('disabled')).toEqual(true);
  });
  it('button is enables when email and pass is filled', () => {
    const wrapper = shallow(<Login isLoggedIn={false}/>);
    wrapper.find('#email').simulate('change', {target: {value: 'hello'}})
    expect(wrapper.find('#ok_button').prop('disabled')).toEqual(true);
    wrapper.find('#password').simulate('change', {target: {value: 'hello'}})
    expect(wrapper.find('#ok_button').prop('disabled')).toEqual(false);
  })
});