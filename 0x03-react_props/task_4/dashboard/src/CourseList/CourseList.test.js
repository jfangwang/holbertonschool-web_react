import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList Test Suite", () => {
    it("Renders CourseList without crashing", () => {
        const wrapper = shallow(<CourseList/>);
        expect(wrapper.exists());
    });
    it("Renders 5 rows correctly", () => {
        const wrapper = shallow(<CourseList/>);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
        expect(wrapper.find('CourseListRow').at(0).prop('textFirstCell', 'Available courses'));
        expect(wrapper.find('CourseListRow').at(0).prop('isHeader', 'true'));
        expect(wrapper.find('CourseListRow').at(1).prop('isHeader', 'true'));
        expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell', 'Course name'));
        expect(wrapper.find('CourseListRow').at(1).prop('textSecondCell', 'Credit'));
        expect(wrapper.find('CourseListRow').at(2).prop('isHeader', 'false'));
        expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell', 'ES6'));
        expect(wrapper.find('CourseListRow').at(2).prop('textSecondCell', '60'));
        expect(wrapper.find('CourseListRow').at(3).prop('isHeader', 'false'));
        expect(wrapper.find('CourseListRow').at(3).prop('textFirstCell', 'Webpack'));
        expect(wrapper.find('CourseListRow').at(3).prop('textSecondCell', '20'));
        expect(wrapper.find('CourseListRow').at(4).prop('isHeader', 'false'));
        expect(wrapper.find('CourseListRow').at(4).prop('textFirstCell', 'React'));
        expect(wrapper.find('CourseListRow').at(4).prop('textSecondCell', '40'));
    });
});