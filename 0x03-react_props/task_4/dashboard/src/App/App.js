import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseListRow from '../CourseList/CourseListRow';
import CourseList from '../CourseList/CourseList';


function App() {
  return (
    /* Short Hand version of <React.Fragment> */
    <>
      <CourseList />
      <div id='root-notifications'>
        <Notifications />
      </div>
      <div className="App">
        <Header/>
        <div className="App-body">
          <Login/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
