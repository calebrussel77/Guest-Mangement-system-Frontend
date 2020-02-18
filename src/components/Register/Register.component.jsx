import React from 'react';

const Register = () => {
    return (
        <div className="w-full max-w-md">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                        id="inline-username"
                        type="text"
                        placeholder="name"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                        id="inline-username"
                        type="password"
                        placeholder="******************"
                    />
                </div>
                <div className="md:w-2/3">
                    <button
                        className="shadow bg-teal-500 text-gray-200 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-2 rounded"
                        type="button">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;