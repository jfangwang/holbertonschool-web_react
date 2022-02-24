import React from 'react';
import CourseListRow from './CourseListRow';
// import './CourseList.css';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid lightgray',
    borderCollapse: 'collapse',
  },
  thead: {
    tr: {
      backgroundColor: 'red',
      ":nth-child(1)" : {
        backgroundColor:'blue'
      },
    },
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});


export default function CourseList({listCourses}) {
  return (
    <table className={css(styles.table)}>
      <thead className={css(styles.thead, styles.thead.tr)}>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? <CourseListRow textFirstCell='No course available yet'/> :
          listCourses.map((item) => (
            <CourseListRow key={item.id} textFirstCell={item.name} textSecondCell={item.credit} />
          ))
        }

        {/* <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} /> */}
      </tbody>

    </table>
  )
}
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}
CourseList.defaultProps = {
  listCourses: []
}
