import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    default: {
        color: 'blue'
    },
    urgent: {
        color: 'red'
    }
})

export default class NotificationItem extends PureComponent {
    render() {
        const {type, html, value, markAsRead, id} = this.props;
        const c = css(type === 'urgent' ? styles.urgent : styles.default);
        return(
            <>
            {html === undefined ? <li className={c} data-priority={type} onClick={() => markAsRead(id)}>{value}</li> : 
            <li className={c} key={id} data-priority={type} onClick={() => markAsRead(id)} dangerouslySetInnerHTML={html}>{value}</li>}
            </>
        )
    }
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
