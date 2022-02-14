import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow Test Suite", () => {
    it("Header is True", () => {
        const wrapper = shallow(<CourseListRow/>)
        expect(wrapper.exists()).toEqual(true);
    });
    it("Header is True", () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test"/>);
        const tr = wrapper.find('tr');
        expect(tr.children()).toHaveLength(1);
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