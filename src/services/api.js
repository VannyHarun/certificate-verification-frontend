import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // Issue a new certificate
  issueCertificate: async (certificateData) => {
    try {
      const response = await api.post('/api/certificates/issue/', certificateData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Verify a certificate
  verifyCertificate: async (certHash) => {
    try {
      const response = await api.get(`/api/certificates/verify/${certHash}/`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Admin login
  adminLogin: async (credentials) => {
    try {
      const response = await api.post('/api/admin/login/', credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Revoke a certificate
  revokeCertificate: async (certHash) => {
    try {
      const response = await api.post(`/api/certificates/revoke/${certHash}/`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
}; 