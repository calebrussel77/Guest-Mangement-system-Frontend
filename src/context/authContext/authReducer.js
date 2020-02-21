const authReducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS_LOGIN':
    case 'SUCCESS_REGISTER':
      localStorage.setItem('token', action.userData);
      return {
        ...state,
        userAuth: true,
        errors: null,
      };
    case 'FAIL_REGISTER':
    case 'FAIL_LOGIN':
      return {
        ...state,
        userAuth: null,
        errors: action.errors,
      };
    case 'FORM_ERROR':
      return {
        ...state,
        userAuth: null,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default authReducer;
