import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  th: {
    borderBottom: '2px grey solid'
  },
  cell: {
    width: '100%'
  },
  twocells: {
    width: '50%'
  },
  rowChecked: {
    backgroundColor:'#e6e4e4',
  }
});

export default function CourseListRow({isHeader, textFirstCell, textSecondCell}) {

  let body = null;
  const bgrow = {backgroundColor: '#F5F5AB', width: '100%'}
  const bgheader = {backgroundColor: '#B5B545', width: '100%'}
  let bgcolor;
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = () => {
    let status = !isChecked;
    setIsChecked(status);
  }

  if (isHeader === true) {
    bgcolor = bgheader;
    if (textSecondCell === null) {
      body = <th className={css(styles.th, styles.cell)} style={bgcolor} colSpan="2">{textFirstCell}</th>
    } else {
      body = <><th className={css(styles.th)} style={bgcolor} colSpan="2">{textFirstCell}</th>
               <th className={css(styles.th)} style={bgcolor} colSpan="2">{textSecondCell}</th></>
    }
  } else {
    bgcolor = bgrow;
    body = <>
    <td style={bgcolor} className={isChecked ? css(styles.rowChecked, styles.cell) : css(styles.cell)}>
      <input
        type="checkbox" 
        onChange={handleChecked}
        className={isChecked ? css(styles.rowChecked) : null}
      />
      {textFirstCell}
    </td>
    <td style={bgcolor} className={isChecked ? css(styles.rowChecked) : null}>{textSecondCell}</td></>
  }

  return(<tr className={css(styles.cell)}>{body}</tr>)
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
