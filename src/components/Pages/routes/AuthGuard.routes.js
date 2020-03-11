import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from '../../../context/authContext/authContext';

/*
 * Use to Protect our routes
 * When you are not authenticted
 */
const AuthGuard = ({component: Component, ...rest}) => {
  const {userAuth} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        !userAuth ? <Redirect to="/login" /> : <Component {...props} />
      }
    ></Route>
  );
};

export default AuthGuard;
