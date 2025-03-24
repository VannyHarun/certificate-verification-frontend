import React, { useState } from 'react';
import { apiService } from '../services/api';
import './CertificateForm.css';

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    course: '',
    institution: '',
    issueDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [issuanceAttempted, setIssuanceAttempted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    if (issuanceAttempted) {
      setError(null);
      setIssuanceAttempted(false);
    }
  };

  const resetForm = () => {
    setFormData({
      studentName: '',
      course: '',
      institution: '',
      issueDate: '',
    });
    setIssuanceAttempted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setIssuanceAttempted(true);

    // Convert date to Unix timestamp (integer)
    const dateObj = new Date(formData.issueDate);
    dateObj.setHours(0, 0, 0, 0); // Set to midnight
    
    const data = {
      student_name: formData.studentName,
      course: formData.course,
      institution: formData.institution,
      issue_date: Math.floor(dateObj.getTime() / 1000) // Integer timestamp in seconds
    };

    try {
      console.log("Submitting certificate data:", data);
      const response = await apiService.issueCertificate(data);
      
      setSuccess({
        message: 'Certificate issued successfully!',
        certHash: response.cert_hash,
        details: response
      });
      
      console.log("Certificate issued successfully:", response);
      resetForm();
    } catch (error) {
      console.error('Error issuing certificate:', error);
      
      // Handle different types of error responses
      let errorMessage = 'Failed to issue certificate';
      
      if (typeof error === 'object') {
        if (error.error) {
          errorMessage = error.error;
        } else if (error.message) {
          errorMessage = error.message;
        } else {
          errorMessage = JSON.stringify(error);
        }
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="certificate-form-container">
      <form onSubmit={handleSubmit} className="certificate-form">
        <h2>Issue Certificate</h2>
        
        {error && (
          <div className="error-message">
            <p><strong>Error:</strong> {error}</p>
            <p className="error-help">This could happen if the certificate already exists or there's an issue with the blockchain connection. Please try again with different information.</p>
          </div>
        )}

        {success && (
          <div className="success-message">
            <p>{success.message}</p>
            <p>Certificate Hash: <span className="cert-hash">{success.certHash}</span></p>
            <p className="success-help">Share this hash with the certificate holder for verification.</p>
          </div>
        )}

        <div className="form-group">
          <label>Student Name:</label>
          <input 
            type="text" 
            name="studentName" 
            value={formData.studentName} 
            onChange={handleChange} 
            placeholder="Enter student's full name"
            required 
          />
        </div>

        <div className="form-group">
          <label>Course:</label>
          <input 
            type="text" 
            name="course" 
            value={formData.course} 
            onChange={handleChange} 
            placeholder="Enter course name"
            required 
          />
        </div>

        <div className="form-group">
          <label>Institution:</label>
          <input 
            type="text" 
            name="institution" 
            value={formData.institution} 
            onChange={handleChange} 
            placeholder="Enter institution name"
            required 
          />
        </div>

        <div className="form-group">
          <label>Issue Date:</label>
          <input 
            type="date" 
            name="issueDate" 
            value={formData.issueDate} 
            onChange={handleChange}
            max={new Date().toISOString().split('T')[0]}
            required 
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Issuing Certificate...' : 'Issue Certificate'}
        </button>
      </form>
    </div>
  );
};

export default CertificateForm;