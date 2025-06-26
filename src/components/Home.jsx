// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Header */}
      <header>
        <div className="container">
          <img src="/assets/logo.png" alt="SmartSubmit Logo" className="logo" />
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero dark-hero">
        <div className="glass-card hero-card">
          <h1 className="hero-title">Welcome to SmartSubmit</h1>
          <p className="hero-subtitle">
            Submit your academic reports with ease, get instant AI feedback,
            and let your mentors review in real-time.
          </p>

          <img src="/assets/hero-image.png" alt="Smart Report Illustration" className="hero-image" />
          <Link to="/login" className="cta hero-cta">🚀 Get Started</Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features-section dark-features">
        <div className="feature glass-card">
          <h3>📤 Simple Submissions</h3>
          <p>Upload your reports in a few clicks with real-time progress tracking.</p>
        </div>
        <div className="feature glass-card">
          <h3>🤖 AI Evaluation</h3>
          <p>Get instant feedback on grammar, margins, and formatting via smart algorithms.</p>
        </div>
        <div className="feature glass-card">
          <h3>👨‍🏫 Real-Time Review</h3>
          <p>Your guide can view and respond immediately — faster approvals guaranteed.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 SmartSubmit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
