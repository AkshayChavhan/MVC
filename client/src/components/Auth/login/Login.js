import React, { useState } from 'react';
import { loginUser } from "./handle";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem(formData.username); // Retrieve token from localStorage
    const secretKey = localStorage.getItem(`${formData.username}_secretKey`);
    formData.token = token;
    formData.secretKey = secretKey;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // Get the key of the current item
      const value = localStorage.getItem(key); // Get the value of the current item
      console.log(`Key: ${key}, Value: ${value}`);
    }
    const result = await loginUser(formData);
    console.clear();
    console.log("result from login ", result);
    if (result.status !== 200) return;
    navigate('/dashboard');
    console.log("message in login => ", result.data.message, result.status)
  };

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;