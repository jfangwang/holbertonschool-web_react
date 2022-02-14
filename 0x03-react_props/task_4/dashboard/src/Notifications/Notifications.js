import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/closeIcon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({displayDrawer}) => {
    const showNotifications = (<>
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button id="notification_button"
                    style={{height:'20px', width:'30px', outline:'none', border:'none',
                        background:'transparent', padding:'none', position:'absolute', right:'10px'}}
                    aria-label="Close"
                    onClick={() => console.log("Close button has been clicked")}
                    >
                <img style={{height:'15px', width:'15px'}} src={closeIcon} alt="closeIcon"></img>
            </button>
            <ul>
                <NotificationItem type='default' value='New course available'></NotificationItem>
                <NotificationItem type='urgent' value='New resume available'></NotificationItem>
                <NotificationItem type='urgent' html={{ __html: getLatestNotification() }}></NotificationItem>
            </ul>
        </div>
    </>);
    return (
        <>
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {displayDrawer && showNotifications}
        </>
    );
    Notifications.defaultProps = {
        displayDrawer: false
    }
    Notifications.propTypes = {
        displayDrawer: PropTypes.bool
    }
};

export default Notifications;