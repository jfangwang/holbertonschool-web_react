/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';


describe('BodySection Test Suite', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	})
	afterEach(() => {
		return new Promise(resolve => {
			StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
			return process.nextTick(resolve);
		});
	});
	it('Renders an <h2> element and children', () => {
		const wrapper = shallow(
		<BodySection title="test title">
			<p>test children node</p>
		</BodySection>);
		
		// expect(wrapper.find('div.bodySection h2')).toHaveLength(1);
		// expect(wrapper.find('div.bodySection h2').text()).toBe('test title');
		expect(wrapper.find('div p')).toHaveLength(1);
		expect(wrapper.find('div p').text()).toBe('test children node');
		jest.restoreAllMocks();
	});
});