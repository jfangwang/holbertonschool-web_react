import React from 'react'

export default function NotificationItem({type, html, value}) {
    if (html === undefined) {
        return(<li data-priority={type}>{value}</li>)
    }
    return(<li data-priority={type} dangerouslySetInnerHTML={html}>{value}</li>)
}
