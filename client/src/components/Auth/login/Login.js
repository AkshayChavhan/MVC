import React, { useState } from 'react';
import { loginUser, getUserData } from "./handle";
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signupUser } from '../../redux/actions/authActions';

const Login = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const moveToSignUp = () => {
    navigate('/');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // for (let i = 0; i < localStorage.length; i++) {
    //   const key = localStorage.key(i); // Get the key of the current item
    //   const value = localStorage.getItem(key); // Get the value of the current item
    //   console.log(`Key: ${key}, Value: ${value}`);
    // }
    const result = await loginUser(formData);
    const token = result.data.token;
    const secretKey = result.data.secretKey;
    const message = result.data.message;
    const valid = result.data.valid;


    if (result.status === 200) {
      localStorage.setItem(formData.username, token);
      localStorage.setItem(`${formData.username}_secretKey`, secretKey);
      console.log("result , token ,secretKey , message ,valid ", result , token ,secretKey , message ,valid);
      const userDataResult = await getUserData(token); // Call the function to fetch user-specific data
      // Store userDataResult in your state or context
      navigate('/dashboard');
      console.clear();
      console.log("User Data:", userDataResult);
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); // Get the key of the current item
        console.log(`Key: ${key}`);
      }
    } else {
      console.log("Login failed:", result.data.message);
      return
    }
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6"
            // action="#"
            method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
            <div>
              <button
                onClick={moveToSignUp}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;