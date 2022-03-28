import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import logo from '../assets/Holberton_Logo.jpg';
import './Footer.css';
import { AppContext } from '../App/AppContext';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function Footer() {
  return (
    <AppContext.Consumer>
      {({user, logOut}) => (
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          {user.isLoggedIn && <p><a>Contact us</a></p>}
      </div>
      )}
    </AppContext.Consumer>
  );
}

Footer.defaultProps = {
  user:null,
}

Footer.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  }
}
connect(mapStateToProps, null)(Footer);