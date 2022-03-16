import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
  }
})

function BodySection({title, children}) {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

BodySection.propTypes = {
    title: PropTypes.string,
}

export default BodySection
