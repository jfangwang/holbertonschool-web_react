import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Test Suite', () => {
    it('Footer renders without crashing', () => {
      const wrapper = shallow(<Footer/>);
      expect(wrapper.exists());
    });
    it('Check if Footer contains text: Copyright', () => {
      const wrapper = shallow(<Footer/>);
      expect(wrapper.text()).toContain("Copyright");
    });
  });