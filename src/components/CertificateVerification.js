import React, { useState } from 'react';
import { apiService } from '../services/api';
import './CertificateVerification.css';

const CertificateVerification = () => {
  const [certHash, setCertHash] = useState('');
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verificationDetails, setVerificationDetails] = useState(null);

  const handleChange = (e) => {
    setCertHash(e.target.value);
    setError(null);
    setCertificate(null);
    setVerificationDetails(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setCertificate(null);
    setVerificationDetails(null);
    
    try {
      const response = await apiService.verifyCertificate(certHash);
      setCertificate(response.certificate);
      
      // Store additional verification details if available
      if (response.blockchain_valid !== undefined) {
        setVerificationDetails({
          blockchainValid: response.blockchain_valid,
          databaseValid: response.database_valid,
          isValid: response.is_valid,
          blockchainDetails: response.blockchain_details,
          failureReason: response.failure_reason
        });
      }
    } catch (error) {
      console.error('Error verifying certificate:', error);
      let errorMessage = 'Failed to verify certificate';
      
      if (typeof error === 'object') {
        errorMessage = error.error || errorMessage;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      setError(errorMessage);
      setCertificate(null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    
    try {
      // If timestamp is a number or numeric string, treat as UNIX timestamp
      if (!isNaN(parseInt(timestamp))) {
        const numericTimestamp = parseInt(timestamp);
        const date = new Date(numericTimestamp * 1000);
        if (!isNaN(date.getTime())) {
          return date.toLocaleDateString();
        }
      }
      
      // If timestamp is a string that might be an ISO date
      if (typeof timestamp === 'string') {
        const isoDate = new Date(timestamp);
        if (!isNaN(isoDate.getTime())) {
          return isoDate.toLocaleDateString();
        }
      }
      
      // If we have a timestamp in blockchain details, use that
      if (verificationDetails && verificationDetails.blockchainDetails && 
          verificationDetails.blockchainDetails.issue_date) {
        const blockchainDate = new Date(verificationDetails.blockchainDetails.issue_date * 1000);
        if (!isNaN(blockchainDate.getTime())) {
          return blockchainDate.toLocaleDateString();
        }
      }
      
      return "Invalid Date";
    } catch (e) {
      console.error("Error formatting date:", e);
      return "Invalid Date";
    }
  };

  return (
    <div className="certificate-verification">
      <form onSubmit={handleSubmit}>
        <h2>Verify Certificate</h2>
        <div className="form-group">
          <label>Certificate Hash:</label>
          <input 
            type="text" 
            value={certHash} 
            onChange={handleChange} 
            placeholder="Enter certificate hash"
            required 
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify Certificate'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {certificate && (
        <div className="certificate-details">
          <h3>Certificate Details:</h3>
          <p>Student Name: {certificate.student_name}</p>
          <p>Course: {certificate.course}</p>
          <p>Institution: {certificate.institution}</p>
          <p>Issue Date: {formatDate(certificate.issue_date_timestamp || certificate.issue_date)}</p>
          
          {verificationDetails && (
            <>
              <h4>Verification Status:</h4>
              <p className={`validation-status ${verificationDetails.isValid ? 'valid' : 'invalid'}`}>
                Overall Status: {verificationDetails.isValid ? 'Valid' : 'Invalid'}
              </p>
              <p className={`validation-status ${verificationDetails.databaseValid ? 'valid' : 'invalid'}`}>
                Database Status: {verificationDetails.databaseValid ? 'Valid' : 'Revoked'}
              </p>
              <p className={`validation-status ${verificationDetails.blockchainValid ? 'valid' : 'invalid'}`}>
                Blockchain Status: {verificationDetails.blockchainValid ? 'Valid' : 'Invalid'}
              </p>
              
              {verificationDetails.failureReason && (
                <p className="failure-reason">
                  Reason: {verificationDetails.failureReason}
                </p>
              )}
            </>
          )}
          
          {!verificationDetails && (
            <p className={`validation-status ${certificate.is_valid ? 'valid' : 'invalid'}`}>
              Status: {certificate.is_valid ? 'Valid' : 'Revoked'}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CertificateVerification;