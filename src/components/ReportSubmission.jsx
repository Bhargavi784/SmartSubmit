// src/components/ReportSubmission.jsx
import React, { useState } from 'react';

const ReportSubmission = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('Not Submitted');
  const [feedback, setFeedback] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !title || !subject) {
      alert('Please fill all fields and upload your report.');
      return;
    }

    setStatus('AI Checking...');

    // Simulate API call with delay
    setTimeout(() => {
      setStatus('Guide Reviewing...');
      setFeedback('Margins are correct. Minor grammar issues found. Please improve the abstract.');
    }, 2000);

    setTimeout(() => {
      setStatus('Completed');
    }, 5000);
  };

  return (
    <div className="report-submission-container">
      <h2>Submit Your Report</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Report Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject / Course Name"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="file"
          accept=".pdf,.docx"
          onChange={handleFileChange}
        />
        <button type="submit">Submit Report</button>
      </form>

      <div className="status-box">
        <h3>Submission Status:</h3>
        <p className={status === 'Completed' ? 'text-success' : 'text-primary'}>
          {status}
        </p>

        {feedback && (
          <div className="feedback-box">
            <h4>AI Feedback:</h4>
            <p>{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportSubmission;
