// src/components/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully (mock)');
  };

  return (
    <div className="report-submission-container">
      <h2>Login to SmartSubmit</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
