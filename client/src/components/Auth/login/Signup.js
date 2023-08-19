import React, { useState } from 'react';
import { signupUser } from "./handle";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signupUser } from '../../redux/actions/authActions';

const Signup = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
    const result = await signupUser(formData);
    console.log("result in Signup => ", result);
    if (result.statusText !== "Created") return;
    const token = result.data.token;
    const secretKey = result.data.secretKey;
    if (token && secretKey) {
      localStorage.setItem(formData.username, token);
      localStorage.setItem(`${formData.username}_secretKey`, secretKey);
      navigate('/dashboard');
      // navigate('/dashboard' ,  { state: { userData: response.data.userData } });
    }
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i); // Get the key of the current item
      console.log(`Key: ${key}`);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
