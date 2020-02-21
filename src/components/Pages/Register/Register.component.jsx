import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context/authContext/authContext';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const Register = props => {
  const {registerUser, errors, userAuth, formError} = useContext(AuthContext);

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
      formError({msg: "Password don't Match"});
    } else {
      registerUser({name, email, password});
    }
  };

  useEffect(() => {
    if (userAuth) {
      props.history.push('/login', {msgerie: 'caleb bonjour'});
    }
  }, [userAuth, props.history]);

  useEffect(() => {
    const toastrOptions = {
      hideDuration: 300,
      timeOut: 6000,
      progressBar: true,
    };

    if (errors !== null) {
      if (errors.error) {
        //provide by express-validator;
        toastr.error(errors.error[0].msg, 'Error Message', toastrOptions);
      }
      if (errors.msg) {
        toastr.error(errors.msg, 'Error Message', toastrOptions);
      }
    }
  }, [errors]);

  const handleChange = e => {
    setUser({
      name,
      email,
      password,
      confirmPassword,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-md m-0 m-auto pt-24">
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

export default Register;
