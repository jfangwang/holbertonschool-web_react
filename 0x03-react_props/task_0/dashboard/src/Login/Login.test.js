import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('App Test Suite', () => {
    it('Test App renders without crashing', () => {
      const wrapper = shallow(<Login/>);
      expect(wrapper.exists());
    });
  });