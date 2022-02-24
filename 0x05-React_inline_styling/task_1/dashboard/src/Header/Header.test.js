import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Test Suite', () => {
    beforeEach(() => {
      StyleSheetTestUtils.suppressStyleInjection();
    })
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('Header renders without crashing', () => {
      const wrapper = shallow(<Header/>);
      expect(wrapper.exists());
    });
    it('Can find img tag with app-loge class', () => {
      const wrapper = shallow(<Header/>);
      expect(wrapper.find('img')).toHaveLength(1);
      expect(wrapper.find('h1')).toHaveLength(1);
    });
  });