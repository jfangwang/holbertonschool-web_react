import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('App Test Suite', () => {
    it('Test App renders without crashing', () => {
      const wrapper = shallow(<Header/>);
      expect(wrapper.exists());
    });
  });