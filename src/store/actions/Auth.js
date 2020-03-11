import * as actionsTypes from './actionTypes';
import axiosInstance from '../../utils/axiosInstance';

export const authStart = () => {
  return {
    type: actionsTypes.AUTH_START,
  };
};

export const authSuccess = (token, user = null) => {
  return {
    type: actionsTypes.AUTH_SUCCESS,
    token: token,
    user: user ? user : null,
  };
};
export const authError = error => {
  return {
    type: actionsTypes.AUTH_ERROR,
    error: error,
  };
};

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userName');
  return {
    type: actionsTypes.AUTH_LOGOUT,
  };
};
export const checkAuthTimeout = expiresIn => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expiresIn * 1000);
  };
};

export const authRegister = (name, email, password) => {
  return dispatch => {
    dispatch(authStart());
    axiosInstance
      .post('/auth/register', {name, email, password})
      .then(resp => {
        dispatch(authSuccess(resp.data.token));
      })
      .catch(error => {
        dispatch(authError(error.response.data.msg));
      });
  };
};

export const authSignIn = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    axiosInstance
      .post('/auth/login', {email, password})
      .then(resp => {
        const expirationDate = new Date(
          new Date().getTime() + resp.data.expiresIn * 1000
        );
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('userId', resp.data.user.userId);
        localStorage.setItem('userName', resp.data.user.userName);
        dispatch(authSuccess(resp.data.token, resp.data.user));
        dispatch(checkAuthTimeout(resp.data.expiresIn));
      })
      .catch(error => {
        dispatch(authError(error.response.data.msg));
      });
  };
};

export const authCheckStatus = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(authLogout());
    } else {
      const expirationDate = new Date(
        localStorage.getItem('expirationDate')
      ).getTime();
      //getTIME display the time in milliseconds
      const userId = localStorage.getItem('userId');
      const userName = localStorage.getItem('userName');
      const dateNow = new Date().getTime();

      if (expirationDate >= dateNow) {
        dispatch(authSuccess(token, {userId, userName}));
        dispatch(checkAuthTimeout((expirationDate - dateNow) / 1000));
      } else {
        dispatch(authLogout());
      }
    }
  };
};
