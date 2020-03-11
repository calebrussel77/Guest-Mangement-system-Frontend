import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = props => {
  return (
    <div className="navbar m-0 p-0 h-16 bg-white shadow-2xl border-t-4 border-teal-500 w-full">
      <div className="container-navbar flex justify-between">
        <div className="logo-svg text-white bg-teal-600 my-2 ml-2 p-0 h-10 ">
          GuestManagement
        </div>
        <ul className="items p-8 flex justify-between">
          {!props.isAuthenticated ? (
            <React.Fragment>
              <li className="pl-2 pr-2 cursor-pointer">
                <Link to="/login" className="text-indigo-700 font-light">
                  Login |
                </Link>
              </li>
              <li className="pl-2 pr-2 text-teal-600 font-light cursor-pointer">
                <Link to="/register"> Register</Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="pl-2 pr-2 cursor-pointer">
                <Link to="/" className="text-gray-600 font-light">
                  Hello, {props.userName} |
                </Link>
              </li>
              <li className="pl-2 pr-2 text-red-500 cursor-pointer">
                <Link to="/logout"> Logout</Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToPops = state => {
  return {
    isAuthenticated: state.auth.user !== null,
    userName: state.auth.user ? state.auth.user.userName : null,
  };
};

export default connect(mapStateToPops)(Navbar);
