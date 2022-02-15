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
  list = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40}
  ]
  return (
    /* Short Hand version of <React.Fragment> */
    <>
      <Notifications />
      <div className="App">
        <Header/>
        <div className="App-body">
          {isLoggedIn ? <CourseList CourseList={list}/> : <Login/>}
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
