import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('App Test Suite', () => {
    it('Test App renders without crashing', () => {
      const wrapper = shallow(<Footer/>);
      expect(wrapper.exists());
    });
    it('Testverify that App renders a div with the class App-footer', () => {
      const wrapper = shallow(<Footer/>);
      expect(wrapper.find('div.App-footer')).toHaveLength(1);
    });
  });