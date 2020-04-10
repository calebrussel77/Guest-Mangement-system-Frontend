import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Image from '../../assets/images/images';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Alert from '../../components/Alert/Alert';

const SingIn = props => {
  const initialState = {
    email: '',
    password: '',
  };
  const [user, setUser] = useState(initialState);
  const {email, password} = user;

  const handleSubmit = e => {
    e.preventDefault();
    props.onAuth(email, password);
  };

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  let authRedirect = null;
  if (props.isAuthenticated) {
    authRedirect = <Redirect to="/" />;
  }
  return (
    <div className="flex">
      <div className="w-full max-w-md pt-20 pl-56">
        <Image />
      </div>
      {authRedirect}
      <div className="w-full max-w-md m-0 m-auto pt-20">
        {props.error ? <Alert msg={props.error} color="red" /> : null}

        <form
          className="bg-white shadow-md rounded px-20 py-16"
          onSubmit={handleSubmit}
        >
          <h1 className="py-1 font-light text-center">Sign In</h1>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full  px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
              id="inline-username"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              placeholder="email"
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
              id="inline-username"
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              required
              placeholder="password"
            />
          </div>
          <button
            className="shadow bg-teal-500 text-gray-200 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold w-full "
            type="submit"
          >
            Sign In
          </button>
          <p className="text-sm text-gray-500 py-2">
            Don't have an account ?
            <Link
              to="/register"
              className="text-teal-300 hover:text-teal-500 cursor-pointer"
            >
              {' '}
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    token: state.auth.token,
    user: state.auth.user,
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispacthToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.authSignIn(email, password)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(SingIn);
