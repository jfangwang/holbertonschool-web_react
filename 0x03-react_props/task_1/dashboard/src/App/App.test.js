import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Test Suite', () => {
    it('Test App renders without crashing', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists());
    });
    it('Testverify that App renders a div with the class App-body', () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.find('div.App-body')).toHaveLength(1);
    });
  });