import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/styles.css';

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role') || 'student'; // mock role
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar glass-card">
      <div className="logo-area">
        <img src="/assets/logo.png" alt="SmartSubmit Logo" className="logo" />
        <span className="logo-text">SmartSubmit</span>
      </div>
      <div className="nav-links">
        {role === 'student' && (
          <>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}
        {role === 'guide' && (
          <Link to="/guide-dashboard">Guide Dashboard</Link>
        )}
        <button onClick={handleLogout} className="btn-action">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
