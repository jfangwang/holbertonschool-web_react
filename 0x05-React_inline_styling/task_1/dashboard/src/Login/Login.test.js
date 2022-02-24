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