import React from 'react'
import PropTypes from 'prop-types';

export default function NotificationItem({type, html, value, markAsRead, id}) {
    if (html === undefined) {
        return(<li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>)
    }
    return(<li key={id} data-priority={type} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html}>{value}</li>)
}
NotificationItem.defaultProps = {
    type: "default",
    html: null,
    value: null,
    markAsRead: () => null,
    id: 1
}
NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string,
    id: PropTypes.number,
    markAsRead: PropTypes.func
}
