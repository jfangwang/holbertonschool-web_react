import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseListRow from '../CourseList/CourseListRow';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import {defaultUser, AppContext} from './AppContext';
import { connect } from 'react-redux';

const courses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]
{/* <NotificationItem type='default' value='New course available'></NotificationItem>
    <NotificationItem type='urgent' value='New resume available'></NotificationItem>
    <NotificationItem type='urgent' html={{ __html: getLatestNotification() }}></NotificationItem> */}
// const notificationsList = [
//   {id: 1, type: "default", value: "New course available"},
//   {id: 2, type: "urgent", value: "New resume available"},
//   {id: 3, type: "urgent", html: {__html: getLatestNotification()}}
// ]
const styles = StyleSheet.create({
  App: {
    position: 'absolute',
    top:0,
    left:0,
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  footer: {
    width: '100%',
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: () => {this.setState({user: defaultUser})},
      listNotifications: [
        {id: 1, type: "default", value: "New course available"},
        {id: 2, type: "urgent", value: "New resume available"},
        {id: 3, type: "urgent", html: {__html: getLatestNotification()}}
      ]
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)
    this.logIn = this.logIn.bind(this)
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this)
  }
  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    })
  }
  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    })
  }
  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    })
  }
  handleLogout(event) {
    var name = event.key;
    // var code = event.code;
    var ctrl = event.ctrlKey;
    if (name === "h" && ctrl === true) {
      alert("Logging you out");
      this.state.logOut();
    }
  }
  markNotificationAsRead(id) {
    const new_list = [];
    this.state.listNotifications.forEach((item) => {
      if (item.id !== id) {
        new_list.push(item);
      }
    })
    this.setState({listNotifications: new_list})
  }
  componentDidMount() {
    document.addEventListener('keypress', this.handleLogout(this.state.logOut));
  }

  render() {
    const { isLoggedIn } = this.props
    const {user, logOut} = this.state;
    return (
      /* Short Hand version of <React.Fragment> */
      <>
        <AppContext.Provider value={{user, logOut}}>
          <Notifications
            listNotifications={this.state.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className="App">
            <Header/>
            <div className="App-body">
              {isLoggedIn ?
              <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={courses}/>
              </BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>
              }
              <BodySection title="News from the School">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </BodySection>
            </div>
            <div className={css(styles.footer)}>
              <Footer/>
            </div>
          </div>
        </AppContext.Provider>
      </>
    );
  }
}
App.propTypes = {
  logOut: PropTypes.func,
}
App.defaultProps = {
  logOut: () => null
}
export function mapStateToProps(state) {
  return {
    isLoggedIn: state.get('isUserLoggedIn')
  }
}


export default connect(mapStateToProps)(App);
