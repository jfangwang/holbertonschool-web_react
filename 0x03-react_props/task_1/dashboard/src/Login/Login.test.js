import React from 'react';
import { shallow } from 'enzyme';
import App from './Login';

describe('App Test Suite', () => {
    it('Test App renders without crashing', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists());
    });
  });