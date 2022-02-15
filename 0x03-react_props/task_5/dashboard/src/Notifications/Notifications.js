import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/closeIcon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const Notifications = ({displayDrawer, listNotifications}) => {
    const showNotifications = (<>
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button id="notification_button"
                    style={{height:'20px', width:'30px', outline:'none', border:'none',
                        background:'transparent', padding:'none', position:'absolute', right:'10px', top: '10px'}}
                    aria-label="Close"
                    onClick={() => console.log("Close button has been clicked")}
                    >
                <img style={{height:'15px', width:'15px'}} src={closeIcon} alt="closeIcon"></img>
            </button>
            <ul>
                {listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" />:
                listNotifications.map((item) => (
                    <NotificationItem key={item.id} html={item.html} type={item.type} value={item.value} />
                ))}
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
    
};
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [{id: 1, type: "default", value: "No new notification for now"}]
}
Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notifications;