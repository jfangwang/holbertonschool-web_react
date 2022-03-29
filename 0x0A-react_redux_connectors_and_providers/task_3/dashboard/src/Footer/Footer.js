import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils';
import logo from '../assets/Holberton_Logo.jpg';
import './Footer.css';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux'
import PropTypes from "prop-types";

export function Footer({user}) {
  console.log(user)
  return (
      <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
          {user && <p><a href="#">Contact us</a></p>}
      </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};


const mapStateToProps = (state) => {
  return {
    user: state.get('user')
  };
}
export default connect(mapStateToProps)(Footer);