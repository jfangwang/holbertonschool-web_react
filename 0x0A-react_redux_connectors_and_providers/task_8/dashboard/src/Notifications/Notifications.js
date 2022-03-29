import React, { Component } from 'react';
import closeIcon from '../assets/closeIcon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import { connect } from 'react-redux';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

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

export class Notifications extends Component {
	// ({displayDrawer, listNotifications})
	constructor(props) {
		super(props);
	}
	componentDidMount() {
    this.props.fetchNotifications();
  }
	render() {
		const {
			displayDrawer,
			listNotifications,
			handleHideDrawer,
			handleDisplayDrawer,
			markNotificationAsRead,
			setNotificationFilter,
		} = this.props;
		const show = css(displayDrawer ? styles.showOff : styles.showOn);
		return (
			<>
				<div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
					<p className={show}>Your notifications</p>
				</div>
				{displayDrawer && (
					<div className={css(styles.Notifications)}>
						<p>Here is the list of notifications</p>
						<button
              type="button"
              className={css(styles.filterButton)}
              id="buttonFilterUrgent"
              onClick={() => {
                setNotificationFilter("URGENT");
              }}
            >
              ❗❗
            </button>
            <button
              type="button"
              className={css(styles.filterButton)}
              id="buttonFilterDefault"
              onClick={() => {
                setNotificationFilter("DEFAULT");
              }}
            >
              💠
            </button>
						<button id="notification_button"
							style={{
								height: '20px', width: '30px', outline: 'none', border: 'none',
								background: 'transparent', padding: 'none', position: 'absolute', right: '10px', top: '10px'
							}}
							aria-label="Close"
							onClick={handleHideDrawer}
							className="notification_button"
						>
							<img style={{ height: '15px', width: '15px' }} src={closeIcon} alt="closeIcon"></img>
						</button>
						<ul>
							{listNotifications.length === 0 ? <NotificationItem value="No new notification for now"/> :
								Object.values(listNotifications).map((item) => (
									<NotificationItem key={item.guid} id={item.guid} html={item.html} type={item.type} value={item.value} markAsRead={markNotificationAsRead} />
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
	listNotifications: {},
	handleDisplayDrawer: () => null,
	handleHideDrawer: () => null
}
Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.object,
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func
}

const mapStateToProps = (state) => {
	const unread = getUnreadNotificationsByType(state)
  return {
    listNotifications: unread
  };
};

const mapDispatchToProps = {
  fetchNotifications,
	markNotificationAsRead: markAsAread,
	setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);