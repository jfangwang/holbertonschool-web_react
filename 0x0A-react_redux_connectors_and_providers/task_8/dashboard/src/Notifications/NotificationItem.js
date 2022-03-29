import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite'

const screenSize = {
    small: '@media screen and (max-width: 900px)',
  };
  
  const onSmall = {
    fontSize: '20px',
    padding: '10px 8px',
    borderBottom: '1px solid black',
    listStyle: 'none',
  };
  
  const styles = StyleSheet.create({
    default: {
      color: 'blue',
      [screenSize.small]: onSmall,
    },
  
    urgent: {
      color: 'red',
      [screenSize.small]: onSmall,
    },
  });

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
    id: "a",
}
NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string,
    // id: PropTypes.string,
    markAsRead: PropTypes.func
}
