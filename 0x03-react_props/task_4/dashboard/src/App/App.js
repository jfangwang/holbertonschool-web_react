import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseListRow from '../CourseList/CourseListRow';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


function App({isLoggedIn}) {
  return (
    /* Short Hand version of <React.Fragment> */
    <>
      <Notifications />
      <div className="App">
        <Header/>
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login/>}
        </div>
        <div className="App-foooter">
          <Footer/>
        </div>
      </div>
    </>
  );
}
App.propTypes = {
  isLoggedIn: PropTypes.bool
}
App.defaultProps = {
  isLoggedIn: false
}

export default App;
