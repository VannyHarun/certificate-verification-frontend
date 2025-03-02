import React, { useState } from 'react';
import { verifyCertificate } from '../services/certificateService';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const [certHash, setCertHash] = useState('');
  const [certificate, setCertificate] = useState(null);

  const handleChange = (e) => {
    setCertHash(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyCertificate(certHash);
      setCertificate(response);
    } catch (error) {
      console.error('Error verifying certificate:', error);
      alert('Failed to verify certificate');
    }
  };

  return (
    <div className="certificate-verification">
      <form onSubmit={handleSubmit}>
        <h2>Verify Certificate</h2>
        <div className="form-group">
          <label>Certificate Hash:</label>
          <input type="text" value={certHash} onChange={handleChange} required />
        </div>
        <button type="submit">Verify Certificate</button>
      </form>
      {certificate && (
        <div className="certificate-details">
          <h3>Certificate Details:</h3>
          <p>Student Name: {certificate.student_name}</p>
          <p>Course: {certificate.course}</p>
          <p>Institution: {certificate.institution}</p>
          <p>Issue Date: {new Date(certificate.issue_date * 1000).toLocaleDateString()}</p>
          <p>Valid: {certificate.is_valid ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default CertificateVerification;