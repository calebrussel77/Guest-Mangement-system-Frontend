import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {Redirect} from 'react-router-dom';
import {useEffect} from 'react';

const Logout = props => {
  useEffect(() => {
    props.onLogout();
  });
  return <Redirect to="/login" />;
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.authLogout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
