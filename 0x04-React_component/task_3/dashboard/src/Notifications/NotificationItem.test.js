import React from 'react';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';
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
        expect(wrapper.html()).toEqual('<li data-priority="default"><u>test</u></li>');
    })
    it ('markAsRead function works', () => {
        const wrapper = shallow(<Notifications/>);
        const spy = jest.spyOn(console, 'log').mockImplementation();
        wrapper.instance().markAsRead = spy;
        wrapper.instance().markAsRead(1)
        expect(wrapper.instance().markAsRead).toBeCalledWith(1);
        expect(spy).toBeCalledTimes(1);
        expect(spy).toBeCalledWith(1);
        spy.mockRestore();
    })
})