/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';


describe('BodySectionWithMarginBottom Test Suite', () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it('Render correctly a body section component', () => {
		const wrapper = shallow(
		<BodySectionWithMarginBottom>
			<p>test children node</p>
		</BodySectionWithMarginBottom>);
		
		expect(wrapper.find('div BodySection')).toHaveLength(1);
		expect(wrapper.find('div p')).toHaveLength(1);
		expect(wrapper.find('div p').text()).toBe('test children node');
	});
});