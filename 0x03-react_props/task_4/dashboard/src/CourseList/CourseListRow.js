import React from 'react'
import PropTypes from 'prop-types'

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {

  let body = null;

  if (isHeader) {
    if (textSecondCell === undefined) {
      body = <th colSpan="2">{textFirstCell}</th>
    } else {
      body = <><th colSpan="2">{textFirstCell}</th><th colSpan="2">{textSecondCell}</th></>
    }
  } else {
    body = <><td>{textFirstCell}</td><td>{textSecondCell}</td></>
  }

  return(<tr>{body}</tr>)

  CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null 
  }
  CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
  }
}