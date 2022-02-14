import React from 'react';
import { shallow } from 'enzyme';
import App from './Header';

describe('App Test Suite', () => {
    it('Test App renders without crashing', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists());
    });
  });