import React from 'react'
import PropTypes from 'prop-types'
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	bodySectionWithMargin: {
	  marginBottom: '40px'
	}
  })

function BodySectionWithMarginBottom({children}) {
	return (
		<div className={css(styles.bodySectionWithMargin)}>
			<BodySection />
			{children}
		</div>
	)
}

export default BodySectionWithMarginBottom
