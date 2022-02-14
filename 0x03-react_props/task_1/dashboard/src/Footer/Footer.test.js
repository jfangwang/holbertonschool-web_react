import React from 'react';
import { shallow } from 'enzyme';
import App from './Footer';

describe('App Test Suite', () => {
    it('Test App renders without crashing', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists());
    });
    it('Testverify that App renders a div with the class App-footer', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('div.App-footer')).toHaveLength(1);
    });
  });