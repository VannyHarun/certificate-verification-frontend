// Mock API service for certificate operations

// Base API URL - replace with your actual backend URL when ready
// eslint-disable-next-line no-unused-vars
const API_URL = 'http://localhost:5000/api';

// Function to verify a certificate by its hash
export const verifyCertificate = async (certHash) => {
  try {
    // For development/testing, return mock data
    // In production, this would be a real API call:
    // const response = await fetch(`${API_URL}/certificates/verify/${certHash}`);
    // const data = await response.json();
    // return data;
    
    // Mock response for testing
    return {
      student_name: "John Doe",
      course: "Web Development",
      institution: "Tech University",
      issue_date: Date.now() / 1000, // Current time in seconds
      is_valid: true
    };
  } catch (error) {
    console.error('Error verifying certificate:', error);
    throw error;
  }
};

// Function to issue a new certificate
export const issueCertificate = async (certificateData) => {
  try {
    // For development/testing, return mock data
    // In production, this would be a real API call:
    // const response = await fetch(`${API_URL}/certificates/issue`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(certificateData),
    // });
    // const data = await response.json();
    // return data;
    
    // Mock response for testing
    return {
      cert_hash: "cert_" + Math.random().toString(36).substring(2, 15),
      status: "success"
    };
  } catch (error) {
    console.error('Error issuing certificate:', error);
    throw error;
  }
};