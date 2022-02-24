import React, { Component } from 'react';
import closeIcon from '../assets/closeIcon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	Notifications: {
	  border: '2px dashed red',
	  display: 'flex',
	  flexDirection: 'column',
	  position: 'absolute',
	  top: '2.5rem',
	  right: '0',
	  marginRight: '1rem',
	  paddingLeft: '1rem',
	  paddingRight: '6rem',
	  justifyContent: 'left',
	  zIndex: '1'
	},
	menuItem: {
		position: 'absolute',
		top: '0',
		right: '0',
		padding: '0',
		marginRight: '1rem'
	}
  });

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
				<div className={css(styles.menuItem)}>
					<p>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className={css(styles.Notifications)}>
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