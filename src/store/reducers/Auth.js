import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utils/updateObject';

const initialState = {
  token: null,
  user: null,
  error: null,
  msg: null,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updateObject(state, {
        isLoading: true,
      });
    case actionTypes.AUTH_SUCCESS:
      return updateObject(state, {
        token: action.token,
        user: action.user ? action.user : null,
        isLoading: false,
        error: null,
      });
    case actionTypes.AUTH_LOGOUT:
      return updateObject(state, {
        token: null,
        user: null,
      });
    case actionTypes.AUTH_ERROR:
      return updateObject(state, {
        isLoading: false,
        error: action.error,
      });
    // case actionTypes.AUTH_START:
    //   return updateObject(state, {
    //     isLoading: true,
    //   });
    default:
      return state;
  }
};

export default Auth;
