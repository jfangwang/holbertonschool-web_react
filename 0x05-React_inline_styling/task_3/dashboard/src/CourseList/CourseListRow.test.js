import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from 'aphrodite';

describe("CourseListRow Test Suite", () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("CourseListRow Renders", () => {
        const wrapper = shallow(<CourseListRow textFirstCell="Test"/>);
        expect(wrapper.exists()).toEqual(true);
    });
    it("Header is True", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test"/>);
        const tr = wrapper.find('tr');
        expect(tr.find('th')).toHaveLength(1);
        expect(tr.find('th').prop('colSpan')).toEqual('2');
    });
    it("Header is False", () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test1" textSecondCell="Test2"/>);
        const tr = wrapper.find('tr');
        // Change this test, not optimal
        expect(tr.children()).toHaveLength(2);
        expect(tr.containsMatchingElement("<td>Test1</td><td>Test2</td>"));
    });
})