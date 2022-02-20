import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseListRow from '../CourseList/CourseListRow';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

const courses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
]
{/* <NotificationItem type='default' value='New course available'></NotificationItem>
    <NotificationItem type='urgent' value='New resume available'></NotificationItem>
    <NotificationItem type='urgent' html={{ __html: getLatestNotification() }}></NotificationItem> */}
const notificationsList = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, type: "urgent", html: {__html: getLatestNotification()}}
]

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      /* Short Hand version of <React.Fragment> */
      <>
        <Notifications listNotifications={notificationsList}/>
        <div className="App">
          <Header/>
          <div className="App-body">
            {isLoggedIn ? <CourseList listCourses={courses}/> : <Login/>}
          </div>
          <div className="App-foooter">
            <Footer/>
          </div>
        </div>
      </>
    );
  }
}
App.propTypes = {
  isLoggedIn: PropTypes.bool
}
App.defaultProps = {
  isLoggedIn: false
}

export default App;
