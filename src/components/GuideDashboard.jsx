import React, { useState } from 'react';
import '../css/styles.css';
import Navbar from './Navbar';

const GuideDashboard = () => {
  const submissions = [
    {
      student: 'Riya Sharma',
      title: 'AI in Healthcare',
      subject: 'Artificial Intelligence',
      status: 'AI Checked',
    },
    {
      student: 'Aman Verma',
      title: 'Compiler Design Report',
      subject: 'System Software',
      status: 'Pending Review',
    },
    {
      student: 'Sneha Kulkarni',
      title: 'Web Dev Internship Report',
      subject: 'Full Stack Development',
      status: 'Completed',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [feedback, setFeedback] = useState('');

  const openModal = (report) => {
    setSelectedReport(report);
    setFeedback('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  const handleFeedbackSubmit = () => {
    alert(`Feedback submitted for ${selectedReport.title}:\n${feedback}`);
    closeModal();
  };

  const getStatusClass = (status) => {
    if (status === 'Completed') return 'status-chip green';
    if (status === 'AI Checked') return 'status-chip blue';
    return 'status-chip orange';
  };

  return (
    <>
    <Navbar />
    <div className="dashboard-container">
      <div className="glass-card header-box">
        <h2>Guide Dashboard</h2>
        <p>Review and provide feedback on submitted reports.</p>
      </div>

      <div className="glass-card report-list">
        <h3>Student Submissions</h3>
        {submissions.map((report, index) => (
          <div key={index} className="report-card">
            <div className="report-info">
              <h4>{report.title}</h4>
              <p className="subject">{report.subject}</p>
              <p className="subject">Submitted by: <strong>{report.student}</strong></p>
            </div>
            <div className="report-actions">
              <span className={getStatusClass(report.status)}>{report.status}</span>
              <div className="action-buttons">
                <button className="btn-action">View Report</button>
                <button className="btn-action" onClick={() => openModal(report)}>Add Feedback</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Feedback for: {selectedReport.title}</h3>
            <textarea
              rows="6"
              placeholder="Enter your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="modal-buttons">
              <button className="btn-action" onClick={handleFeedbackSubmit}>Submit</button>
              <button className="btn-action" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default GuideDashboard;
