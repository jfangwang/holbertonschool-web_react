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
	  zIndex: '1',
		backgroundColor: 'white',
		animationName: [borderKf],
    animationDuration: '0.8s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
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
		marginRight: '8px',
		[screenSize.small]: {
		  display: 'none',
		},
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
		return (Nextprops.listNotifications.length > this.props.listNotifications.length || Nextprops.displayDrawer !== this.props.displayDrawer)
	}
	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}
	render() {
		const {displayDrawer, listNotifications, handleHideDrawer, handleDisplayDrawer} = this.props;
		const show = css(displayDrawer ? styles.showOff : styles.showOn);
		return (
			<>
				<div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
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
							onClick={handleHideDrawer}
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
	listNotifications: [{ id: 1, type: "default", value: "No new notification for now" }],
	handleDisplayDrawer: () => null,
	handleHideDrawer: () => null
}
Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func
}

export default Notifications;