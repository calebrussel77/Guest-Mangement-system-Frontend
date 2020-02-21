import React, {createContext, useReducer} from 'react';
import authReducer from './authReducer';
import axiosInstance from '../../utils/axiosInstance';

export const AuthContext = createContext([]);

const AuthContextProvider = props => {
  const initialState = {
    userAuth: null,
    errors: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const formError = err => {
    dispatch({
      type: 'FORM_ERROR',
      errors: err,
    });
  };

  /*
   * Register a User
   */
  const registerUser = userData => {
    axiosInstance
      .post(`/auth/register`, userData)
      .then(resp => {
        dispatch({
          type: 'SUCCESS_REGISTER',
          userData: resp.data.token,
        });
      })
      .catch(error => {
        dispatch({
          type: 'FAIL_REGISTER',
          errors: error.response.data,
        });
      });
  };

  /*
   * Login a User
   */
  const loginUser = userData => {
    axiosInstance
      .post(`/auth/login`, userData)
      .then(resp => {
        dispatch({
          type: 'SUCCESS_LOGIN',
          userData: resp.data.token,
        });
      })
      .catch(error => {
        dispatch({
          type: 'FAIL_LOGIN',
          errors: error.response.data,
        });
      });
  };

  return (
    <AuthContext.Provider
      value={{dispatch, ...state, registerUser, loginUser, formError}}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
