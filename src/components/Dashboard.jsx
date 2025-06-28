import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css'; 
import Navbar from './Navbar';// Uses your existing styling

const Dashboard = () => {
  // Dummy data for now (replace with API later)
  const reports = [
    {
      title: 'DBMS Mini Project',
      subject: 'Database Management Systems',
      status: 'Completed',
      feedbackAvailable: true,
    },
    {
      title: 'AI Assignment 2',
      subject: 'Artificial Intelligence',
      status: 'Guide Reviewing...',
      feedbackAvailable: false,
    },
    {
      title: 'SE Report Draft',
      subject: 'Software Engineering',
      status: 'AI Checking...',
      feedbackAvailable: false,
    },
  ];

  const getStatusClass = (status) => {
    if (status.includes('Completed')) return 'status-chip green';
    if (status.includes('Guide')) return 'status-chip orange';
    return 'status-chip blue';
  };

  return (
    <>
    <Navbar />
    <div className="dashboard-container"  style={{ paddingTop: '10px' }}>
      <header className="glass-card header-box">
        <h2>Student Dashboard</h2>
        <p>Track all your report submissions in one place.</p>
      </header>

      <div className="glass-card report-list">
        <h3>Your Submissions</h3>
        {reports.map((report, index) => (
          <div key={index} className="report-card">
            <div className="report-info">
              <h4>{report.title}</h4>
              <p className="subject">{report.subject}</p>
            </div>
            <div className="report-actions">
              <span className={getStatusClass(report.status)}>{report.status}</span>
              {report.feedbackAvailable && (
                <Link to="/feedback" className="btn-view-feedback">View Feedback</Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="upload-section">
        <Link to="/submit" className="cta">Upload New Report</Link>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
