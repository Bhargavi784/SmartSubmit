// src/components/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered successfully (mock)');
  };

  return (
    <div className="report-submission-container">
      <h2>Register for SmartSubmit</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
