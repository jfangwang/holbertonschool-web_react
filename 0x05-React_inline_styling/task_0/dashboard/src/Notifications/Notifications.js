import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/closeIcon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends Component {
	// ({displayDrawer, listNotifications})
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}
	shouldComponentUpdate(Nextprops) {
		return (Nextprops.listNotifications.length > this.props.listNotifications.length)
	}
	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}
	render() {
		const {displayDrawer, listNotifications} = this.props;
		return (
			<>
				<div className="menuItem">
					<p>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className="Notifications">
						<p>Here is the list of notifications</p>
						<button id="notification_button"
							style={{
								height: '20px', width: '30px', outline: 'none', border: 'none',
								background: 'transparent', padding: 'none', position: 'absolute', right: '10px', top: '10px'
							}}
							aria-label="Close"
							onClick={() => console.log("Close button has been clicked")}
						>
							<img style={{ height: '15px', width: '15px' }} src={closeIcon} alt="closeIcon"></img>
						</button>
						<ul>
							{listNotifications.length === 0 ? <NotificationItem value="No new notification for now"/> :
								listNotifications.map((item) => (
									<NotificationItem key={item.id} id={item.id} html={item.html} type={item.type} value={item.value} markAsRead={this.markAsRead} />
								))}
						</ul>
					</div>
				)
				}
			</>
		);
	}

};
Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [{ id: 1, type: "default", value: "No new notification for now" }]
}
Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

export default Notifications;