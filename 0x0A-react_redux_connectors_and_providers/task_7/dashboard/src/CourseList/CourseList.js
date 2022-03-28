import React, { Component } from 'react';
import CourseListRow from './CourseListRow';
// import './CourseList.css';
// import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { getListCourses } from '../selectors/courseSelector'
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const styles = StyleSheet.create({
  table: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid lightgray',
    borderCollapse: 'collapse',
  },
  thead: {
    width: '100%',

  },
  tbody: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:"center",
    alignItems: 'center',
  },
});


export class CourseList extends Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }
  componentDidMount() {
    this.props.fetchCourses()
  }
  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }
  render() {
    const { listCourses } = this.props;
  
    return (
      <table className={css(styles.table)}>
        <thead className={css(styles.thead, styles.thead.tr)}>
          <CourseListRow textFirstCell="Available courses" textSecondCell="" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody className={css(styles.tbody)}>
          {!listCourses || listCourses.length === 0 ? <CourseListRow textFirstCell='No course available yet'/> :
            listCourses.map((item) => (
              <CourseListRow
                key={item.id}
                id={item.id}
                textFirstCell={item.name}
                textSecondCell={item.credit}
                isChecked={item.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))
          }
  
          {/* <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
          <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} /> */}
        </tbody>
  
      </table>
    )
  }
}
CourseList.propTypes = {
  listCourses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
}
CourseList.defaultProps = {
  listCourses: null,
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
}
export const mapStateToProps = (state) => {
  const courseList = getListCourses(state);
  return {
    listCourses: courseList,
  }
}

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseList);