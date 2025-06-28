import React from 'react';
import '../css/styles.css';

const FeedbackPage = () => {
  // Dummy feedback data (replace with API later)
  const report = {
    title: 'DBMS Mini Project',
    subject: 'Database Management Systems',
    status: 'Completed',
    aiFeedback: 'Margins are correct. Minor grammar issues found. Abstract needs better clarity.',
    guideFeedback: 'Good effort overall. Please refine the conclusion and remove typos.',
  };

  const getStatusClass = (status) => {
    if (status.includes('Completed')) return 'status-chip green';
    if (status.includes('Guide')) return 'status-chip orange';
    return 'status-chip blue';
  };

  return (
    <div className="dashboard-container">
      <div className="glass-card feedback-header">
        <h2>{report.title}</h2>
        <p className="subject">{report.subject}</p>
        <span className={getStatusClass(report.status)}>{report.status}</span>
      </div>

      <div className="glass-card feedback-section">
        <h3>AI Feedback</h3>
        <p>{report.aiFeedback}</p>
      </div>

      <div className="glass-card feedback-section">
        <h3>Guide Feedback</h3>
        <p>{report.guideFeedback}</p>
      </div>

      {/* Future enhancement: */}
      {/* <div className="download-feedback">
        <button className="cta">Download Feedback PDF</button>
      </div> */}
    </div>
  );
};

export default FeedbackPage;
