import React, {Component} from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';


describe('WithLogging Test Suite', () => {
	it('App renders without crashing', () => {
		const spy = jest.spyOn(console, 'log').mockImplementation();
	  const NewComponent = WithLogging(Component);
		const wrapper = shallow(<NewComponent/>);

		expect(spy).toBeCalledTimes(1);
		wrapper.unmount();
		expect(spy).toBeCalledTimes(2)
		spy.mockRestore();
	});
	it('checks if login component is mounted and unmounted', () => {
		const spy = jest.spyOn(console, 'log').mockImplementation();
	  const NewComponent = WithLogging('Login');
		const wrapper = shallow(<NewComponent/>);

		expect(spy).toBeCalledTimes(1);
		expect(spy).toBeCalledWith(`Component Login is mounted`);
		wrapper.unmount();
		expect(spy).toBeCalledTimes(2)
		expect(spy).toBeCalledWith(`Component Login is going to unmount`);
		spy.mockRestore();
	})
  });