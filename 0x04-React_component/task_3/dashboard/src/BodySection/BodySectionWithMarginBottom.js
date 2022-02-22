import React from 'react'
import PropTypes from 'prop-types'
import BodySection from './BodySection';
import './BodySection.css';

function BodySectionWithMarginBottom({children}) {
	return (
		<div className="bodySectionWithMargin">
			<BodySection />
			{children}
		</div>
	)
}

BodySectionWithMarginBottom.propTypes = {}

export default BodySectionWithMarginBottom
