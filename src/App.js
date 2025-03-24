import React, { useState } from 'react';
import './App.css';
import CertificateVerification from './components/CertificateVerification';
import CertificateForm from './components/CertificateForm';
import AdminLogin from './components/AdminLogin';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [activeTab, setActiveTab] = useState('issue'); // 'issue' or 'verify'
  
  const handleAdminLogin = (success) => {
    setIsAdmin(success);
    setShowLoginModal(false); // Close the modal on successful login
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setActiveTab('issue'); // Reset to default tab
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Certificate Certification System</h1>
        {isAdmin ? (
          <div className="admin-controls">
            <span className="user-name">Admin Panel</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div className="admin-controls">
            <button className="header-login-button" onClick={toggleLoginModal}>
              Admin Login
            </button>
          </div>
        )}
      </header>
      
      <main className="App-main">
        {!isAdmin ? (
          <>
            <div className="component-container">
              <CertificateVerification />
            </div>
            
            {showLoginModal && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <AdminLogin onLogin={handleAdminLogin} />
                  <button className="cancel-button" onClick={toggleLoginModal}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="admin-dashboard">
            <div className="admin-tabs">
              <button 
                className={`tab-button ${activeTab === 'issue' ? 'active' : ''}`}
                onClick={() => setActiveTab('issue')}
              >
                Issue Certificate
              </button>
              <button 
                className={`tab-button ${activeTab === 'verify' ? 'active' : ''}`}
                onClick={() => setActiveTab('verify')}
              >
                Verify Certificate
              </button>
            </div>
            
            <div className="tab-content">
              {activeTab === 'issue' ? (
                <CertificateForm />
              ) : (
                <CertificateVerification />
              )}
            </div>
          </div>
        )}
      </main>
      
      <footer className="App-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Certificate Verification System</h3>
            <p>A secure platform for issuing and verifying educational certificates.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#verify">Verify Certificate</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@certverify.com</p>
            <p>Phone: =254 7699 18779</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Certificate Verification System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;