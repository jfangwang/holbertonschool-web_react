import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/closeIcon.png';
import { getLatestNotification } from '../utils/utils';

const Notifications = () => {
    return (
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
                <li data-priority='default'>New course available</li>
                <li data-priority='high'>New resume available</li>
                <li data-priority='high' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
};

export default Notifications;