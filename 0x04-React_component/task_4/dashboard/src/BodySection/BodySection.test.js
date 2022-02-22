import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';


describe('BodySection Test Suite', () => {
	it('Renders an <h2> element and children', () => {
		const wrapper = shallow(
		<BodySection title="test title">
			<p>test children node</p>
		</BodySection>);
		
		expect(wrapper.find('div.bodySection h2')).toHaveLength(1);
		expect(wrapper.find('div.bodySection h2').text()).toBe('test title');
		expect(wrapper.find('div.bodySection p')).toHaveLength(1);
		expect(wrapper.find('div.bodySection p').text()).toBe('test children node');
	});
});