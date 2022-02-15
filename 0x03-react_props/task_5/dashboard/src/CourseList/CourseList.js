import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css'
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

export default function CourseList(listCourses) {
  return (
    <table>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? <CourseListRow textFirstCell='No course available yet' isHeader={false}/> :
          listCourses.map((item, i) => (
            <CourseListRow textFirstCell={item[i]['name']} textSecondCell={item[i]['credit']} isHeader={false}/>
          ))
        }
      </tbody>

    </table>
  )
}
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(PropTypes.CourseShape)
}
CourseList.defaultProps = {
  listCourses: []
}