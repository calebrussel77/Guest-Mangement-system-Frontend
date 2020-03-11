import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Alert from '../../Alert/Alert.component';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const Register = props => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    conFirmPassword: '',
  };
  const [user, setUser] = useState(initialState);
  const {name, email, password, confirmPassword} = user;

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      props.onAuthError("Both Password doesn't match !");
    } else {
      props.onAuth(name, email, password);
    }
  };

  useEffect(() => {
    if (props.token) {
      props.history.push('/login');
    }
    //eslint-disable-next-line
  }, [props.history, props.token]);

  const handleChange = e => {
    setUser({
      name,
      email,
      password,
      confirmPassword,
      [e.target.name]: e.target.value,
    });
  };

  const setAlertTimeout = (color, msg) => {
    return <Alert color={color} msg={msg} />;
  };

  // setTimeout(() => {
  //   clearTimeout(setAlertTimeout());
  // }, 2000);

  return (
    <div className="w-full max-w-md m-0 m-auto pt-24">
      {props.error ? setAlertTimeout('red', props.error) : null}
      <form
        className="bg-white shadow-md rounded px-20 py-16"
        onSubmit={handleSubmit}
      >
        <h1 className="py-1 font-light text-center">Register</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            name
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            placeholder="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full  px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            type="password"
            name="password"
            value={password}
            required
            minLength="6"
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <div className="mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            type="password"
            name="confirmPassword"
            value={confirmPassword || ''}
            onChange={handleChange}
            minLength="6"
            required
            placeholder="Confirm Password"
          />
        </div>
        <button
          className="shadow bg-teal-500 text-gray-200 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold w-full "
          type="submit"
        >
          Register
        </button>
        <p className="text-sm text-gray-500 mt-2">
          have an account ?
          <Link
            to="/login"
            className="text-teal-300 hover:text-teal-500 cursor-pointer"
          >
            {' '}
            Sign In here
          </Link>
        </p>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    error: state.auth.error,
    token: state.auth.token,
    user: state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (name, email, password) =>
      dispatch(actions.authRegister(name, email, password)),
    onAuthError: errorMsg => dispatch(actions.authError(errorMsg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
