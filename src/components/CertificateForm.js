import React, { useState } from 'react';
import { issueCertificate } from '../services/certificateService';
import './CertificateForm.css';

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    course: '',
    institution: '',
    issueDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      student_name: formData.studentName,
      course: formData.course,
      institution: formData.institution,
      issue_date: formData.issueDate,
    };

    try {
      const response = await issueCertificate(data);
      alert(`Certificate issued with hash: ${response.cert_hash}`);
    } catch (error) {
      console.error('Error issuing certificate:', error);
      alert('Failed to issue certificate');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="certificate-form">
        <h2>Issue Certificate</h2>
        <div className="form-group">
          <label>Student Name:</label>
          <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <input type="text" name="course" value={formData.course} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Institution:</label>
          <input type="text" name="institution" value={formData.institution} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Issue Date:</label>
          <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} required />
        </div>
        <button type="submit">Issue Certificate</button>
      </form>
    </div>
  );
};

export default CertificateForm;