import React from 'react'
import PropTypes from 'prop-types'

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {

  let body = null;
  const bgrow = {backgroundColor: '#F5F5AB'}
  const bgheader = {backgroundColor: '#B5B545'}
  let bgcolor;

  if (isHeader === true) {
    bgcolor = bgheader;
    if (textSecondCell === null) {
      body = <th style={bgcolor} colSpan="2">{textFirstCell}</th>
    } else {
      body = <><th style={bgcolor} colSpan="2">{textFirstCell}</th><th style={bgcolor} colSpan="2">{textSecondCell}</th></>
    }
  } else {
    bgcolor = bgrow;
    body = <><td>{textFirstCell}</td><td>{textSecondCell}</td></>
  }

  return(<tr style={bgcolor}>{body}</tr>)
}
CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: null,
  textSecondCell: null 
}
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
