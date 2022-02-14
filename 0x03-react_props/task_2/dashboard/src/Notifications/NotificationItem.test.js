import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('NotificationItem Test Suite', () => {
    it('Components Renders Without Crashing', () => {
        const wrapper = shallow(<NotificationItem/>);
        expect(wrapper.exists()).toEqual(true);
    })
    it('Input props Type and Value renders', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test"/>);
        expect(wrapper.containsMatchingElement(<li data-priority="default">test</li>)).toEqual(true); 
    })
    it('Renders the correct html', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
        expect(wrapper.html()).toEqual('<li><u>test</u></li>');
    })
})