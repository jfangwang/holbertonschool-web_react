import React, { Component } from 'react';
import closeIcon from '../assets/closeIcon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const screenSize = {
	small: '@media screen and (max-width: 900px)',
};
const opacityKf = {
	from: {
		opacity: 0.5,
	},

	to: {
		opacity: 1,
	},
};

const translateYkf = {
	'0%': {
		transform: 'translateY(0)',
	},

	'50%': {
		transform: 'translateY(-5px)',
	},

	'75%': {
		transform: 'translateY(5px)',
	},

	'100%': {
		transform: 'translateY(0)',
	},
};

const borderKf = {
	'0%': {
		border: `3px dashed cyan`,
	},

	'100%': {
		border: `3px dashed #e0344a`,
	},
};

const styles = StyleSheet.create({
	Notifications: {
		fontSize: '20px',
    border: 'thin dotted #e0344a',
    padding: '4px 16px',
    float: 'right',
    [screenSize.small]: {
      width: '90%',
			position:'absolute',
      border: 'none',
      backgroundColor: 'white',
			zIndex: 100,
    },
		backgroundColor: 'white',
	},
	list: {
		[screenSize.small]: {
			paddingInlineStart: 0
    },
	},
	menuItem: {
		position: 'absolute',
		top: '0',
		right: '0',
		padding: '0',
		marginRight: '1rem',
		':hover': {
			cursor: 'pointer',
			animationName: [opacityKf, translateYkf],
			animationDuration: '1s, 0.5s',
			animationIterationCount: 3,
		},
	},
	showOff: {
		textAlign: 'right',
    marginRight: '16px',
    [screenSize.small]: {},
	},

	showOn: {
		marginRight: '8px',
	},
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
		const { displayDrawer, listNotifications } = this.props;
		const show = css(displayDrawer ? styles.showOff : styles.showOn);
		return (
			<>
				<div className={css(styles.menuItem)}>
					<p className={show}>Your notifications</p>
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
						<ul className={css(styles.list)}>
							{listNotifications.length === 0 ? <NotificationItem value="No new notification for now" /> :
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