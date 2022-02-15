import React from 'react'
import PropTypes from 'prop-types';

export default function NotificationItem({type, html, value}) {
    if (html === undefined) {
        return(<li data-priority={type}>{value}</li>)
    }
    return(<li data-priority={type} dangerouslySetInnerHTML={html}>{value}</li>)
}
NotificationItem.defaultProps = {
    type: "default",
    html: null,
    value: null
}
NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string
}
