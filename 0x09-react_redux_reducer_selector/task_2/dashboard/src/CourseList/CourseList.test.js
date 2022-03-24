/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from 'aphrodite';

const courses = [
    {id: 3, name: "Science", credit: 15},
    {id: 1, name: "History", credit: 4},
    {id: 2, name: "Writing", credit: 80}
  ]

describe("CourseList Test Suite", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CourseList listCourses={courses}/>);
        StyleSheetTestUtils.suppressStyleInjection();
    })
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("Renders correctly when passing in empty array or undefined", () => {
        wrapper = shallow(<CourseList/>);
        const wrapper2 = shallow(<CourseList listCourses={[]}/>);
        expect(wrapper.exists());
        expect(wrapper2.exists());
    });
    it("Renders 5 rows correctly", () => {
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
    it("Outputs the correct items", () => {
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
        expect(wrapper.find('CourseListRow').at(0).prop('id', 3));
        expect(wrapper.find('CourseListRow').at(0).prop('textFirstCell', 'Science'));
        expect(wrapper.find('CourseListRow').at(0).prop('textSecondCell', 15));
        expect(wrapper.find('CourseListRow').at(1).prop('id', 1));
        expect(wrapper.find('CourseListRow').at(1).prop('textFirstCell', 'History'));
        expect(wrapper.find('CourseListRow').at(1).prop('textSecondCell', 4));
        expect(wrapper.find('CourseListRow').at(2).prop('id', 2));
        expect(wrapper.find('CourseListRow').at(2).prop('textFirstCell', 'Writing'));
        expect(wrapper.find('CourseListRow').at(2).prop('textSecondCell', 80));
    });
});